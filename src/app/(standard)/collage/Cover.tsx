"use client";

import "./Cover.scss";
import { Book as BookType } from "@/utils/types";
import Image from "next/image";

const Cover = (book: BookType) => {
  if (!book.coverImg) {
    return null;
  }
  return (
    <a target="_blank" href={book.goodreadsUrl}>
      <Image
        src={book.coverImg}
        alt={book.title}
        sizes="(min-width: 960px) 5vw, (min-width: 640px) 10vw, 20vw"
      />
    </a>
  );
};

export default Cover;
