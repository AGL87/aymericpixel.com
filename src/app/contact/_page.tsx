import {ReactNode} from "react";
import HeaderComponent from "@/aymericpixel/app/ui/foundation/heacerComponent";
import BodyWrapperComponent from "@/aymericpixel/app/ui/foundation/bodyWrapperComponent";
import ContactZoneComponent from "@/aymericpixel/app/ui/contact/contactZoneComponent";

export default function ContactPageUI() : ReactNode {
	return (
		<>
			<HeaderComponent title={"Contactez-moi"} subTitle={"Parlons de votre projet ensemble"} />

			<BodyWrapperComponent>
				<ContactZoneComponent />
			</BodyWrapperComponent>
		</>
	)
}