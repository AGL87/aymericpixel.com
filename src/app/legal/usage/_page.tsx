import {ReactNode} from "react";
import {LEGAL_USAGE_TEXT} from "@/aymericpixel/lib/front/legalTexts";
import LegalBody from "@/aymericpixel/app/ui/legal/legalBody";

export default function UsagePageUI() : ReactNode {
	return <LegalBody settings={LEGAL_USAGE_TEXT}/>
}