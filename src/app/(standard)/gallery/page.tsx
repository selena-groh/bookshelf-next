import books from "@/data/books";
import "./Gallery.scss";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const Cover = dynamic(() => import("./Cover"), { ssr: false });

export const metadata: Metadata = {
  title: "Gallery",
};

export default function Gallery() {
  return (
    <div className="Gallery">
      {books.map((book) => (
        <Cover key={book.bookId} {...book} />
      ))}
    </div>
  );
}
