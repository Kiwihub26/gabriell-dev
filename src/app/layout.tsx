import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Gabriell Montero — Software Engineer",
    template: "%s | Gabriell Montero",
  },

  description:
    "Portfolio of Gabriell Montero, a software engineer and Computer Engineering graduate focused on full-stack applications, mobile development, database systems, and practical software solutions.",

  keywords: [
    "Gabriell Montero",
    "Software Engineer",
    "Full-Stack Developer",
    "Computer Engineer",
    "Next.js Developer",
    "React Developer",
    "Mobile Developer",
    "Portfolio",
    "Philippines",
  ],

  authors: [
    {
      name: "Gabriell Montero",
    },
  ],

  creator: "Gabriell Montero",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Gabriell Montero Portfolio",

    title: "Gabriell Montero — Software Engineer",

    description:
      "Full-stack software engineering, mobile development, database systems, and practical digital solutions.",

    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Gabriell Montero Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Gabriell Montero — Software Engineer",

    description:
      "Full-stack software engineering, mobile development, database systems, and practical digital solutions.",

    images: ["/images/og-cover.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}