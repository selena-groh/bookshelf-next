import type { Metadata } from "next";
import Link from "next/link";
import "./Layout.scss";

export const metadata: Metadata = {
  title: "Colin's Library",
  description: "A visualization of a lifetime's worth of reading (so far)",
};

export default function StandardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="App">
      <header>
        <h1 className="App-title">Colin&rsquo;s Library</h1>
        <p className="App-subtitle">
          A visualization of a lifetime's worth of reading (so far)
        </p>
        <div className="App-navigation">
          <Link href="/library">Library</Link>
          <Link href="/ledger">Ledger</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
      </header>
      {children}
    </div>
  );
}
