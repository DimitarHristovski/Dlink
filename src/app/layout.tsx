import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../styles/globals.css";
import { LocaleProvider } from "@/context/locale-context";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dlink — Dimitar",
  description: "Links and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased text-neutral-950 dark:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
