import {ReactNode} from "react";
import "./style.css";
import BodyWrapperComponent from "@/aymericpixel/app/ui/foundation/bodyWrapperComponent";

export default function LegalLayout({children}: Readonly<{
	children: ReactNode
}>) {
	return (
		<BodyWrapperComponent>
			<main className={'legal-page-content'}>{children}</main>
		</BodyWrapperComponent>
	)
}