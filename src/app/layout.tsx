import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/providers/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Chao Chao Dog",
  description: "Chao Chao Dog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased dark:bg-slate-800 ",
          fontSans.variable,
        )}
      >
        <Providers>
        <div className="grid h-screen grid-rows-[auto,1fr]">
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </div>
        </Providers>
      </body>
    </html>
  );
}
