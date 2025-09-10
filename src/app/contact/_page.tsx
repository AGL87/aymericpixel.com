import {ReactNode} from "react";
import HeaderComponent from "@/aymericpixel/app/ui/foundation/heacerComponent";
import BodyWrapperComponent from "@/aymericpixel/app/ui/foundation/bodyWrapperComponent";
import ContactFormComponent from "@/aymericpixel/app/ui/contact/contactFormComponent";
import style from './style.module.css';

export default function ContactPageUI() : ReactNode {
	return (
		<>
			<HeaderComponent title={"Contactez-moi"} subTitle={"Parlons de votre projet ensemble"} />

			<BodyWrapperComponent>
				<div className={style.contactPage}>
					<section className={style.contactInformationSection}>
						<h3 className={style.contactInformationTitle}>Restons en contact</h3>

						<p className={style.contactInformationParagraph}>
							Je suis là pour répondre à toutes vos questions et discuter de votre projet de développement web ou d&#39;application mobile.
							N&#39;hésitez pas à me contacter par le moyen qui vous convient le mieux.
						</p>

						<div className={style.contactBlockItemWrapper}>
							<div className={style.contactBlockItemIcon}>
								<i className="fi fi-rr-envelope"></i>
							</div>
							<div className={style.contactBlockItemContent}>
								<span>Email</span>
								<strong><a href="mailto:contact@aymericpixel.com" target={'_blank'}>contact@aymericpixel.com</a></strong>
							</div>
						</div>

						<div className={style.contactBlockItemWrapper}>
							<div className={style.contactBlockItemIcon}>
								<i className="fi fi-brands-linkedin"></i>
							</div>
							<div className={style.contactBlockItemContent}>
								<span>LinkedIn</span>
								<strong><a href="https://www.linkedin.com/in/aymeric-leger-achard/" target={'_blank'}>/in/aymeric-leger-achard</a></strong>
							</div>
						</div>
					</section>

					<ContactFormComponent />
				</div>
			</BodyWrapperComponent>
		</>
	)
}