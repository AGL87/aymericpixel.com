import {ReactNode} from "react";
import {LEGAL_SELLER_TEXT} from "@/aymericpixel/lib/front/legalTexts";
import LegalBody from "@/aymericpixel/app/ui/legal/legalBody";

export function LegalSellerPageUI(): ReactNode {
	return <LegalBody settings={LEGAL_SELLER_TEXT}/>
}