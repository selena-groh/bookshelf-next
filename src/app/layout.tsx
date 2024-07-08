import type { Metadata } from "next";
import { roboto_condensed, gentium_book_plus } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "A visualization of a bookshelf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto_condensed.variable} ${gentium_book_plus.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
