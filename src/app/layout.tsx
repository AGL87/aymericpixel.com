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
	      <Script id="google-tag-manager" async={true} src={"https://www.googletagmanager.com/gtag/js?id=G-E56H2F1B4R"} />
	      <Script id={"google-analytics"}>{`window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());
				
				  gtag('config', 'G-E56H2F1B4R');`}
	      </Script>
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
