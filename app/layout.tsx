import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Mono, Sora } from "next/font/google";
import { SmoothScroller } from "@/src/components/animations/smooth-scroller";
import { AppShell } from "@/src/components/layout/app-shell";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sharaj Singh Padda | Portfolio",
  description:
    "Technologist, IT Director, and BCA graduate specializing in systems architecture, UI/UX design, and full-stack SaaS platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${plexMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroller>
          <AppShell>{children}</AppShell>
        </SmoothScroller>
      </body>
    </html>
  );
}
