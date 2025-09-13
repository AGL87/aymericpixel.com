import NotFoundUI from "@/aymericpixel/app/_notFound";
import {Metadata} from "next";
import {makePageMetadata} from "@/aymericpixel/lib/seo/seoConfig";

export const metadata: Metadata = makePageMetadata({
	title: "Oups ! Page introuvable",
});

export default function NotFound() {
	return <NotFoundUI />;
}
