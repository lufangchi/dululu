import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "dululu233",
  description: "A running log of the job, the side builds, and the rest of life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <div className="layout">
          <div className="spine">
            <span className="spine-label">FANGCHI / LOG</span>
          </div>
          <div className="main">
            <nav className="nav">
              <a href="/" className="nav-name">
                fangchi
              </a>
              <div className="nav-links">
                <a href="/">about</a>
                <a href="/blog">blog</a>
                <a href="/quest">side quest</a>
                <a href="/contact">contact</a>
              </div>
            </nav>
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
