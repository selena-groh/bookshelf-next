"use client";

import { useEffect, useState } from "react";
import Vibrant from "node-vibrant";
import "./Book.scss";
import classNames from "classnames";
import { Book as BookType } from "@/utils/types";
import {
  PaletteType,
  getBackgroundColor,
  getFontStyles,
  getBookHeight,
  getTextColor,
  calculateBookWidth,
  calculateTitleSize,
  calculateRandomBorderRadius,
} from "@/utils/style-utils";
import { seriesMap } from "@/data/books";
import {
  getAuthorLastName,
  getShortenedBookTitle,
} from "@/utils/data-processing";
import Image from "next/image";

const BOOK_PAGE_THRESHOLD = 250;

const Book = (book: BookType) => {
  const [palette, setPalette] = useState<PaletteType>(null);
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(
    null
  );

  useEffect(() => {
    if (book.coverImg && imageElement && palette === null) {
      Vibrant.from(imageElement)
        .getPalette()
        .then((calculatedPalette) => setPalette(calculatedPalette));
    }
  }, [book, imageElement]);

  const backgroundColor = getBackgroundColor(palette);
  const textColor = getTextColor(palette);

  const series = seriesMap[book.series];
  const shortenedBookTitle = getShortenedBookTitle(book);
  const authorLastName = getAuthorLastName(book);
  const numberOfPages = book.numberOfPages || 0;
  const width = calculateBookWidth(numberOfPages);
  const height = getBookHeight(book, series);
  const fontStyles = getFontStyles(book, series);

  return (
    <a
      className={classNames("Book", {
        "Book--hasSeries": book.series,
        "Book--isSkinny": numberOfPages <= BOOK_PAGE_THRESHOLD,
        "Book--isWide": numberOfPages > BOOK_PAGE_THRESHOLD,
      })}
      style={{
        width,
        backgroundColor,
        height,
        ...fontStyles,
        borderRadius: calculateRandomBorderRadius(2, 8),
      }}
      target="_blank"
      href={book.goodreadsUrl}
    >
      {book.coverImg && (
        <div style={{ display: "none" }}>
          <Image
            unoptimized
            src={book.coverImg}
            alt={book.title}
            loading="eager"
            onLoad={(e) => {
              setImageElement(e.target as HTMLImageElement);
            }}
          />
        </div>
      )}
      <span
        className="Book-title"
        style={{
          color: textColor,
          fontSize: calculateTitleSize(height, 8, 24, shortenedBookTitle),
        }}
      >
        {shortenedBookTitle}
      </span>
      <span
        className="Book-author"
        style={{
          color: textColor,
        }}
      >
        {authorLastName}
      </span>
      {series && (
        <span
          className="Book-series"
          style={{
            color: textColor,
          }}
        >
          {series.seriesAcronym}
        </span>
      )}
      {book.seriesNumber !== "" && (
        <span
          className="Book-seriesNumber"
          style={{
            color: textColor,
          }}
        >
          {book.seriesNumber}
        </span>
      )}
    </a>
  );
};

export default Book;
