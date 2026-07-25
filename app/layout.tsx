import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
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
                <a href="/blog">blog</a>
                <a href="/projects">projects</a>
                <a href="/quest">side quest</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  linkedin
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  github
                </a>
              </div>
            </nav>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
