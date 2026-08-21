import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  pages: { signIn: "/admin/login" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
  const parsed =
    loginSchema.safeParse(credentials);

  if (!parsed.success) {
    console.log(
      "AUTH: credentials failed validation"
    );
    return null;
  }

  const email = parsed.data.email
    .trim()
    .toLowerCase();

  const password =
    parsed.data.password;

  console.log(
    "AUTH: login attempt for",
    email
  );

  const user =
    await prisma.user.findUnique({
      where: {
        email,
      },
    });

  console.log(
    "AUTH: user found",
    Boolean(user)
  );

  if (!user) {
    return null;
  }

  console.log(
    "AUTH: role",
    user.role
  );

  if (user.role !== "ADMIN") {
    return null;
  }

  const passwordMatches =
    await bcrypt.compare(
      password,
      user.passwordHash
    );

  console.log(
    "AUTH: password matches",
    passwordMatches
  );

  if (!passwordMatches) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
},
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
  if (session.user) {
    if (token.sub) {
      session.user.id = token.sub;
    }

    session.user.role = token.role as string;
  }

  return session;
},
    },
  },
);
