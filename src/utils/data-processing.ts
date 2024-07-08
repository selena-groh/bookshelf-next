import { calculateBookHeight, FONT_STYLES } from "./style-utils";
import { AuthorMap, Book, BookMap, SeriesMap } from "./types";
import { getAcronym, getRandomElement } from "./utils";

export function createBookMap(books: Book[]): BookMap {
  let result: BookMap = {};
  books.map((book) => {
    result[book.bookId] = book;
  });
  return result;
}

export function createAuthorMap(books: Book[]): AuthorMap {
  let result: AuthorMap = {};
  books.map((book) => {
    const authorEntry = result[book.authorLastFirst];
    if (authorEntry) {
      result[book.authorLastFirst] = {
        ...authorEntry,
        bookIds: [...authorEntry.bookIds, book.bookId],
      };
    } else {
      result[book.authorLastFirst] = {
        authorLastFirst: book.authorLastFirst,
        author: book.author,
        bookIds: [book.bookId],
      };
    }
  });
  return result;
}

export function createSeriesMap(books: Book[]): SeriesMap {
  let result: SeriesMap = {};
  books.map((book) => {
    if (!book.series) {
      return;
    }
    const seriesEntry = result[book.series];
    if (seriesEntry) {
      result[book.series] = {
        ...seriesEntry,
        bookIds: [...seriesEntry.bookIds, book.bookId],
      };
    } else {
      const numberOfPages = book.numberOfPages || 0;
      result[book.series] = {
        series: book.series,
        seriesAcronym: getAcronym(book.series),
        seriesHeight: calculateBookHeight(numberOfPages),
        seriesFontStyles: getRandomElement(FONT_STYLES),
        // seriesTextColor: getRandomElement(LIGHT_COLORS),
        authorLastFirst: book.authorLastFirst,
        author: book.author,
        bookIds: [book.bookId],
      };
    }
  });
  return result;
}

export function getShortenedBookTitle(book: Book): string {
  return book.title.split(":")[0];
}

export function getAuthorLastName(book: Book): string {
  return book.authorLastFirst.split(",").at(0) || book.authorLastFirst;
}

export function getBookTitleWithSeries(book: Book) {
  return book.series
    ? `${book.title} (${book.series} #${book.seriesNumber})`
    : book.title;
}

export function getSeriesWithNumber(book: Book) {
  if (book.series && (book.seriesNumber || book.seriesNumber === 0)) {
    return `${book.series} #${book.seriesNumber}`;
  } else if (book.series) {
    return book.series;
  }
  return "";
}
