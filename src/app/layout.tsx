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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" className={`${questrial.className} ${poppins.variable}`}>
      <head>
	      <Script
		      id={"google-tag-manager-script"}
		      dangerouslySetInnerHTML={{
			      __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5ZS3MVLG');
            `,
		      }}
	      />
      </head>
      <body>
	      <noscript
		      dangerouslySetInnerHTML={{
			      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZS3MVLG"
	            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
		      }}
	      />
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
