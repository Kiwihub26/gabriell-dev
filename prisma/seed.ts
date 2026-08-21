import "dotenv/config";

import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

/*
|--------------------------------------------------------------------------
| Environment Variables
|--------------------------------------------------------------------------
*/

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not defined.`);
  }

  return value;
}

const connectionString = requireEnv("DATABASE_URL");

const adminEmail = requireEnv("ADMIN_EMAIL")
  .trim()
  .toLowerCase();

const adminPassword = requireEnv("ADMIN_PASSWORD");

/*
|--------------------------------------------------------------------------
| Prisma
|--------------------------------------------------------------------------
*/

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

/*
|--------------------------------------------------------------------------
| Seed
|--------------------------------------------------------------------------
*/

async function main() {
  const passwordHash = await bcrypt.hash(
    adminPassword,
    12
  );

  const admin = await prisma.user.upsert({
    where: {
      email: adminEmail,
    },

    update: {
      name: "Gabriell Montero",
      passwordHash,
      role: "ADMIN",
    },

    create: {
      name: "Gabriell Montero",
      email: adminEmail,
      passwordHash,
      role: "ADMIN",
    },
  });

  console.log("Admin user seeded successfully.");
  console.log(`Admin email: ${admin.email}`);
}

/*
|--------------------------------------------------------------------------
| Run
|--------------------------------------------------------------------------
*/

main()
  .catch((error) => {
    console.error("Seed failed:");
    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });