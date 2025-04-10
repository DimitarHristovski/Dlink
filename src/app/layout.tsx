import "../styles/globals.css";
import Page from "./page";

export default function RootLayout({}: Readonly<{
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
