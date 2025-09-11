import {ReactNode} from "react";
import {LEGAL_PRIVACY_TEXT, LEGAL_SELLER_TEXT} from "@/aymericpixel/lib/front/legalTexts";
import LegalBody from "@/aymericpixel/app/ui/legal/legalBody";

export function LegalPrivacyPageUI(): ReactNode {
	return <LegalBody settings={LEGAL_PRIVACY_TEXT}/>
}