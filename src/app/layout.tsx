import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ubuntu Quest | Software, Cloud, Security & Digital Services",
    template: "%s | Ubuntu Quest",
  },
  description:
    "Ubuntu Quest is a technology consultancy delivering custom software, web development, DevOps, cloud infrastructure, cybersecurity, managed IT, automation, SEO and digital solutions.",
  openGraph: {
    title: "Ubuntu Quest",
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
