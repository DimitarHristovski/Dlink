import "../styles/globals.css";
import Page from "./page";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
