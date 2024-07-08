import books from "@/data/books";
import "./Library.scss";
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
import { Metadata } from "next";

const Book = dynamic(() => import("./Book"), { ssr: false });

export const metadata: Metadata = {
  title: "Library",
};

export default function Library() {
  const allButLastThreeBooks = books.slice(0, -3);
  const lastThreeBooks = books.slice(-3);

  return (
    <div
      className={cx(
        "Library",
        bebas_neue.variable,
        gabriela.variable,
        gentium_book_plus.variable,
        cinzel.variable,
        besley.variable,
        kode_mono.variable
      )}
    >
      {allButLastThreeBooks.map((book, index) => (
        <div key={book.bookId} className="Library-bookWrap">
          <Book {...book} />
        </div>
      ))}
      <div className="Library-endOfBookshelf">
        {lastThreeBooks.map((book, index) => (
          <div
            key={book.bookId}
            className={cx("Library-bookWrap", {
              "Library-bookWrap--isLastBook":
                index === lastThreeBooks.length - 1,
            })}
          >
            <Book {...book} />
          </div>
        ))}
        <div className="Library-bookWrap Library-emptyBookShelfSpace"></div>
      </div>
    </div>
  );
}
