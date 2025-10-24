import HomePageUI from "@/aymericpixel/app/_page";

import {makePageMetadata} from "@/aymericpixel/lib/seo/seoConfig";
import {Metadata} from "next";
import FaqJsonLd from "@/aymericpixel/lib/front/faqConfig";

export const metadata: Metadata = makePageMetadata({
	title: "Développeur freelance web & mobile Limoges",
	description:
		"Développeur freelance web & mobile sur Limoges, je crée vos apps sur mesure avec un suivi clair et des solutions performantes pour votre projet.",
	path: "/",
});

export default function Home() {
  return (<>
	  <HomePageUI />
	  <FaqJsonLd />
  </>);
}