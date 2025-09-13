import {ReactNode} from "react";
import Link from "next/link";
import style from "./contactInfoBlockComponent.module.css";

export default function ContactInfoBlockComponent({title, description}: Readonly<{
	title?: string;
	description?: string;
}>) : ReactNode {
	return (
		<section className={style.contactInformationSection}>
			<h3 className={style.contactInformationTitle}>{title || 'Restons en contact'}</h3>

			<p className={style.contactInformationParagraph}>
				{description || 'Je suis là pour répondre à toutes vos questions et discuter de votre projet de développement web ou d\'application mobile.\n' +
					'N\'hésitez pas à me contacter par le moyen qui vous convient le mieux.'}
			</p>

			<div className={style.contactBlockItemWrapper}>
				<div className={style.contactBlockItemIcon}>
					<i className="fi fi-rr-envelope"></i>
				</div>
				<div className={style.contactBlockItemContent}>
					<span className={style.targetLabel}>Email</span>
					<strong><Link href="mailto:contact@aymericpixel.com" target={'_blank'} className={style.targetLink}>contact@aymericpixel.com</Link></strong>
				</div>
			</div>

			<div className={style.contactBlockItemWrapper}>
				<div className={style.contactBlockItemIcon}>
					<i className="fi fi-brands-linkedin"></i>
				</div>
				<div className={style.contactBlockItemContent}>
					<span className={style.targetLabel}>LinkedIn</span>
					<strong><Link href="https://www.linkedin.com/in/aymeric-leger-achard/" target={'_blank'} className={style.targetLink}>/in/aymeric-leger-achard</Link></strong>
				</div>
			</div>
		</section>
	);
}