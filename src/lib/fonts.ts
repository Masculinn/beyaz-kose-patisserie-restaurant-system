import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const brandFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-brand",
});

const primaryFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});

export { brandFont, primaryFont };
