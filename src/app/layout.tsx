import type { Metadata } from "next";
import {Poppins, Questrial} from "next/font/google";
import "./globals.css";
import NavigationComponent from "@/aymericpixel/app/ui/foundation/navigationComponent";
import FooterComponent from "@/aymericpixel/app/ui/foundation/footerComponent";
import {ReactNode} from "react";
import SeoJsonLd from "@/aymericpixel/lib/seo/seoJsonLd";
import {baseMetadata} from "@/aymericpixel/lib/seo/seoConfig";
import Script from "next/script";

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
const GA_ID = "G-E56H2F1B4R";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" className={`${questrial.className} ${poppins.variable}`}>
      <head>
	      <Script
		      id="gtag-loader"
		      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
		      strategy="beforeInteractive"
	      />
	      <Script id="gtag-init" strategy="beforeInteractive">
		      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // (Facultatif mais propre) Consent Mode par défaut
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });

            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
	      </Script>
      </head>
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
