import {ReactNode} from "react";

export interface LegalUsageItem {
	title: string;
	content: ReactNode;
}

export interface LegalUsageText {
	title: string;
	lastEditionDate: string;
	items: LegalUsageItem[];
}