import type { Metadata } from "next";
import "../styles/globals.css";
import Page from "./page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Page />
      </body>
    </html>
  );
}
