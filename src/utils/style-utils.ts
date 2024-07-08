import Vibrant from "node-vibrant";
import { Book as BookType, Series } from "./types";
import { getRandomElement, getRandomInt } from "./utils";

export const BOOK_BASE_HEIGHT = 200;
export const BOOK_MAX_HEIGHT = 400;
export const HEIGHT_VARIANCE_PER_PAGE = 0.2;
export const COVER_WIDTH = 16; // "min-width"
export const PAGE_WIDTH = 0.08;
export const FONT_SIZE_PAGE_THRESHOLD = 100;
const BOOK_BACKGROUND_COLOR_DEFAULT = "#444444";

const OFF_WHITE = "#fff0db";
const LIGHT_GOLD = "#e7c97c";
const DARK_GOLD = "#e1ba43";
const SILVER = "#C0C0C0";
export const LIGHT_COLORS = [OFF_WHITE, LIGHT_GOLD, DARK_GOLD, SILVER];

export type LightColor = (typeof LIGHT_COLORS)[number];

export const FONT_STYLES = [
  { fontFamily: "var(--font-bebas-neue)" },
  {
    fontFamily: "var(--font-gabriela)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  {
    fontFamily: "var(--font-gentium-book-plus)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  {
    fontFamily: "var(--font-cinzel)",
    fontWeight: "bold",
  },
  {
    fontFamily: "var(--font-besley)",
  },
  {
    fontFamily: "var(--font-kode-mono)",
  },
];

export type FontStyle = (typeof FONT_STYLES)[number];

export type PaletteType = ReturnType<Vibrant["palette"]> | null;

export function calculateBookHeight(numberOfPages: number): string {
  const height = Math.floor(
    Math.min(
      numberOfPages * HEIGHT_VARIANCE_PER_PAGE + BOOK_BASE_HEIGHT,
      BOOK_MAX_HEIGHT
    )
  );
  return `${height}px`;
}

export function getBookHeight(book: BookType, series: Series) {
  if (series) {
    return series.seriesHeight;
  } else {
    return calculateBookHeight(book.numberOfPages || 0);
  }
}

export function calculateBookWidth(numberOfPages: number): string {
  return `${numberOfPages * PAGE_WIDTH + COVER_WIDTH}px`;
}

export function getFontStyles(book: BookType, series: Series) {
  if (series) {
    return series.seriesFontStyles;
  } else {
    return getRandomElement(FONT_STYLES);
  }
}

export function transformWhite(color: string | undefined) {
  return color === "rgb(255, 255, 255)" || color === "#fff"
    ? getRandomElement(LIGHT_COLORS)
    : color;
}

export function getBackgroundColor(palette: PaletteType): string {
  return palette?.DarkVibrant?.hex || BOOK_BACKGROUND_COLOR_DEFAULT;
}

// export function getTextColor(palette?: PaletteType): string {
// return transformWhite(palette?.DarkVibrant?.bodyTextColor) || LIGHT_GOLD;
// }

export function getTextColor(palette?: PaletteType): string {
  return palette?.LightVibrant?.hex || LIGHT_GOLD;
}

// export function getTextColor(book: BookType, seriesMap: SeriesMap) {
//   const seriesEntry = seriesMap[book.series];
//   if (seriesEntry) {
//     return seriesEntry.seriesTextColor;
//   } else {
//     // return getRandomElement(LIGHT_COLORS);
//   }
// }

export function calculateTitleSize(
  height: string,
  min: number,
  max: number,
  title: string
): string {
  const numberHeight = Number(height.match(/[\d\.]+/g));

  return `${Math.floor(
    Math.min(Math.max((numberHeight * 0.9) / title.length, min), max)
  )}px`;
}

export function calculateRandomBorderRadius(min: number, max: number): string {
  const randomInt = getRandomInt(min, max);
  return `${randomInt}px ${randomInt}px ${randomInt}px ${randomInt}px`;
}
