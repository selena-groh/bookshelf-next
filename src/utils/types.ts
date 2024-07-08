import { FontStyle, LightColor } from "./style-utils";

export type BookId = number;

export type Book = {
  bookId: BookId;
  title: string;
  series: string;
  seriesNumber: number | string;
  yearPublished: number | "";
  author: string;
  authorLastFirst: string;
  rating: number;
  numberOfPages: number | "";
  dateFinished: string;
  // coverImg: any;
  goodreadsUrl: string;
};

export type Author = {
  authorLastFirst: string;
  author: string;
  bookIds: BookId[];
};

export type Series = {
  series: string;
  seriesAcronym: string;
  seriesHeight: string;
  seriesFontStyles: FontStyle;
  // seriesTextColor: LightColor;
  authorLastFirst: string;
  author: string;
  bookIds: BookId[];
};

export type BookMap = { [bookId: BookId]: Book };
export type AuthorMap = { [authorLastFirst: string]: Author };
export type SeriesMap = { [series: string]: Series };
