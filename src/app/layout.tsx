import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Technology Consultancy | Software, Cloud, Security & Digital Services",
    template: "%s | Unknown Technology Consultancy",
  },
  description:
    "Technology consultancy delivering custom software, web development, DevOps, cloud infrastructure, cybersecurity, managed IT, automation, SEO and digital solutions.",
  openGraph: {
    title: "Unknown Technology Consultancy",
    description:
      "Software, cloud, security, automation, managed IT and digital services built around real business outcomes.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
