import {ReactNode} from "react";
import {LEGAL_MENTIONS_TEXT} from "@/aymericpixel/lib/front/legalTexts";
import LegalBody from "@/aymericpixel/app/ui/legal/legalBody";

export function LegalMentionsPageUI(): ReactNode {
	return <LegalBody settings={LEGAL_MENTIONS_TEXT}/>;
}