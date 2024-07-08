"use client";

import books from "@/data/books";
import "./Bookshelf.scss";
import cx from "classnames";
import {
  bebas_neue,
  besley,
  cinzel,
  gabriela,
  gentium_book_plus,
  kode_mono,
} from "@/app/fonts";
import dynamic from "next/dynamic";

const Book = dynamic(() => import("./Book"), { ssr: false });

export default function Bookshelf() {
  const allButLastThreeBooks = books.slice(0, -3);
  const lastThreeBooks = books.slice(-3);

  return (
    <div
      className={cx(
        "Bookshelf",
        bebas_neue.variable,
        gabriela.variable,
        gentium_book_plus.variable,
        cinzel.variable,
        besley.variable,
        kode_mono.variable
      )}
    >
      {allButLastThreeBooks.map((book, index) => (
        <div key={book.bookId} className="Bookshelf-bookWrap">
          <Book {...book} />
        </div>
      ))}
      <div className="Bookshelf-endOfBookshelf">
        {lastThreeBooks.map((book, index) => (
          <div
            key={book.bookId}
            className={cx("Bookshelf-bookWrap", {
              "Bookshelf-bookWrap--isLastBook":
                index === lastThreeBooks.length - 1,
            })}
          >
            <Book {...book} />
          </div>
        ))}
        <div className="Bookshelf-bookWrap Bookshelf-emptyBookShelfSpace"></div>
      </div>
    </div>
  );
}
