"use client";

import books from "@/data/books";
import "./Collage.scss";
import dynamic from "next/dynamic";

const Cover = dynamic(() => import("./Cover"), { ssr: false });

export default function Collage() {
  return (
    <div className="Collage">
      {books.map((book, index) => (
        <Cover key={book.bookId} {...book} />
      ))}
    </div>
  );
}
