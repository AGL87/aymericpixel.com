import type { Metadata } from "next";
import {Poppins, Questrial} from "next/font/google";
import "./globals.css";
import NavigationComponent from "@/aymericpixel/app/ui/foundation/navigationComponent";
import FooterComponent from "@/aymericpixel/app/ui/foundation/footerComponent";
import {ReactNode} from "react";
import SeoJsonLd from "@/aymericpixel/lib/seo/seoJsonLd";
import {baseMetadata} from "@/aymericpixel/lib/seo/seoConfig";


const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
	weight: "400",
});

const poppins = Poppins({
	variable: "--font-poppins",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" className={`${questrial.className} ${poppins.variable}`}>
      <body>
        <NavigationComponent />
        <div className="superContainer">
	        {children}
        </div>
        <FooterComponent />
        <SeoJsonLd />
      </body>
    </html>
  );
}
