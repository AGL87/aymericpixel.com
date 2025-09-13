import {ReactNode} from "react";
import ContactInfoBlockComponent from "@/aymericpixel/app/ui/contact/contactInfoBlockComponent";
import ContactFormComponent from "@/aymericpixel/app/ui/contact/contactFormComponent";
import style from './contactZoneComponent.module.css';

export default function ContactZoneComponent({title, description}: Readonly<{
	title?: string;
  description?: string;
}>) : ReactNode {
	return (
		<div className={style.contactPage}>
			<ContactInfoBlockComponent title={title} description={description} />
			<ContactFormComponent />
		</div>
	);
}