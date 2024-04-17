import {
  Darker_Grotesque,
  DotGothic16,
  Fjalla_One,
  Inter,
  Space_Grotesk,
} from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const fjalla_one = Fjalla_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const space_grotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });
const dot_gothic_16 = DotGothic16({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const darker_grotesque = Darker_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://swmpool.xyz"),
  title: "Swimming Pool. Wanna' jump in?",
  description:
    "The market is boring. Liquidity is drying up. Hodlers, everywhere.",
  openGraph: {
    images: "/og.png",
    title: "Swimming Pool. Wanna' jump in?",
    description:
      "The market is boring. Liquidity is drying up. Hodlers, everywhere.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
