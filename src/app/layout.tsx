import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type ReactNode } from "react";

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} p-4`}>
      <body>{props.children}</body>
    </html>
  );
}
