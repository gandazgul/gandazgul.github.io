import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlos Ravelo | Staff Software Engineer / Solutions Architect",
  description:
    "Interview-ready terminal portfolio for Carlos Ravelo: staff engineering impact, curated GitHub projects, skills, and resume download.",
  metadataBase: new URL("https://gandazgul.github.io"),
  openGraph: {
    title: "Carlos Ravelo | Resume Portfolio",
    description:
      "High-scale web platforms, search/retrieval workflows, cloud infrastructure, and curated engineering projects.",
    url: "https://gandazgul.github.io",
    siteName: "Carlos Ravelo Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Carlos Ravelo | Resume Portfolio",
    description: "Staff Software Engineer / Solutions Architect portfolio built using RunWield.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-webtui-theme="dark">
      <body>{children}</body>
    </html>
  );
}
