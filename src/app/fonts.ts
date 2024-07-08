import {
  Bebas_Neue,
  Gabriela,
  Gentium_Book_Plus,
  Besley,
  Cinzel,
  Kode_Mono,
  Roboto_Condensed,
} from "next/font/google";

export const bebas_neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const gabriela = Gabriela({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-gabriela",
  display: "swap",
});

export const gentium_book_plus = Gentium_Book_Plus({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gentium-book-plus",
  display: "swap",
});

export const roboto_condensed = Roboto_Condensed({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const besley = Besley({
  subsets: ["latin"],
  variable: "--font-besley",
  display: "swap",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const kode_mono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono",
  display: "swap",
});
