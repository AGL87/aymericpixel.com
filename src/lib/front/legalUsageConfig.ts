export interface LegalUsageItem {
	title: string;
	texts: string[];
}

export interface LegalSection {
	title: string;
	items: LegalUsageItem[];
}

export interface LegalUsageText {
	title: string;
	preamble?: string;
	lastEditionDate: string;
	items: LegalUsageItem[] | LegalSection[];
}