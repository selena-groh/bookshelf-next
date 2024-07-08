import type { Metadata } from "next";
import Link from "next/link";
import "./Layout.scss";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "A visualization of a bookshelf",
};

export default function StandardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="App">
      <header>
        <h1 className="App-title">Colin's Bookshelf</h1>
        <p className="App-subtitle">A visualization of Colin Groh's library</p>
        <div className="App-navigation">
          <Link href="/bookshelf">Book Shelves</Link>
          <Link href="/booklist">Book List</Link>
        </div>
      </header>
      {children}
    </div>
  );
}