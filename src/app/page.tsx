import HomePageUI from "@/aymericpixel/app/_page";

import {makePageMetadata} from "@/aymericpixel/lib/seo/seoConfig";
import {Metadata} from "next";
import FaqJsonLd from "@/aymericpixel/lib/front/faqConfig";

export const metadata: Metadata = makePageMetadata({
	title: "Accueil",
	description:
		"Développeur freelance web & mobile, je crée vos apps sur mesure avec un suivi clair et des solutions performantes pour garantir le succès de votre projet.",
	path: "/",
});

export default function Home() {
  return <>
	  <HomePageUI />
	  <FaqJsonLd />
  </>;
}
