import {ReactNode} from "react";
import HeaderComponent from "@/aymericpixel/app/ui/foundation/heacerComponent";
import ContactZoneComponent from "@/aymericpixel/app/ui/contact/contactZoneComponent";
import BodyWrapperComponent from "@/aymericpixel/app/ui/foundation/bodyWrapperComponent";
import style from './style.module.css';
import Image from "next/image";
import {homeFaq} from "@/aymericpixel/lib/front/faqConfig";

export default function HomePageUI() : ReactNode {
	return (
		<>
			<HeaderComponent>
				<div className={style.headerSuperBlock}>
					<div className={style.headerTextBlock}>
						<h1 className={style.mainTitle}>Développeur <br/> Freelance</h1>
						<h2 className={style.subTitle}>Web & Mobile</h2>

						<p className={style.headerText}>Je transforme vos idées en solutions numériques performantes. Développement sur-mesure avec une approche moderne et agile.</p>

						<div className={style.headerCtaBlock}>
							<a href="/contact" className={style.ctaBtn}>Démarrer mon projet</a>
							<a href="/portfolio" className={style.ctaBtnSecondary}>Voir mes réalisations</a>
						</div>
					</div>

					<div className={style.headerIconBlock}>
						<Image src={"/assets/images/home/homeBg.svg"} alt={'Example de projet web par Aymeric Leger Achard'} width={535} height={353} className={style.headerImage} />
					</div>
				</div>
			</HeaderComponent>

			<BodyWrapperComponent>
				<section className={style.globServiceBlock}>
					<div className={style.globServiceHeader}>
						<strong className={style.globServiceCategory}>À propos</strong>
						<h3 className={style.globServiceTitle}>Votre freelance tech pour des solutions sur-mesure</h3>
					</div>

					<div className={style.aboutContent}>
						<div className={style.aboutFirstBlock}>
							<Image src={"/assets/images/home/me.webp"} alt={"Une photo de Aymeric"} width={200} height={200} className={style.aboutFirstImage} />
						</div>

						<div className={style.aboutListBlock}>
							<p className={style.globServiceDescription}>Passionné par le développement depuis plus mes 11 ans, je vous accompagne dans la création de solutions web et mobile innovantes. <br/>
								Mon approche ? Une méthode agile, des technologies modernes et un suivi personnalisé pour garantir le succès de votre projet.</p>

							<ul className={style.aboutList}>
								<li className={style.aboutListItem}><i className={`fi fi-rr-check ${style.aboutIcon}`}></i>Expertise en PHP / Symfony / MySQL</li>
								<li className={style.aboutListItem}><i className={`fi fi-rr-check ${style.aboutIcon}`}></i>Développement React, Next.js, Nest.js</li>
								<li className={style.aboutListItem}><i className={`fi fi-rr-check ${style.aboutIcon}`}></i>Conception d&#39;applications mobiles en Flutter</li>
								<li className={style.aboutListItem}><i className={`fi fi-rr-check ${style.aboutIcon}`}></i>Méthode agile et livraisons régulières</li>
								<li className={style.aboutListItem}><i className={`fi fi-rr-check ${style.aboutIcon}`}></i>Support & maintenance</li>
								<li className={style.aboutListItem}><i className={`fi fi-rr-check ${style.aboutIcon}`}></i>Hébergement supervisé</li>
							</ul>

							<div className={style.headServiceCtaBlock}>
								<a href="/process" className={style.ctaGlobService}>Découvrir ma méthode</a>
							</div>
						</div>
					</div>
				</section>

				<section className={style.globServiceBlock}>
					<div className={style.globServiceHeader}>
						<strong className={style.globServiceCategory}>Développement web</strong>
						<h3 className={style.globServiceTitle}>Sites web modernes et performants</h3>
						<p className={style.globServiceDescription}>De la simple vitrine au site e-commerce complexe, je crée des expériences web qui convertissent et fidélisent vos utilisateurs.</p>
					</div>

					<div className={style.globServiceWrapper}>
						<div className={style.globServiceCard}>
							<i className={`fi fi-rr-globe-pointer ${style.globServiceIcon}`}></i>
							<h4 className={style.globServiceCardTitle}>Sites vitrines</h4>
							<p className={style.globalServiceCardDesc}>Présentez votre activité avec style et professionnalisme</p>
						</div>

						<div className={style.globServiceCard}>
							<i className={`fi fi-rr-globe-pointer ${style.globServiceIcon}`}></i>
							<h4 className={style.globServiceCardTitle}>E-commerce</h4>
							<p className={style.globalServiceCardDesc}>Boutiques en ligne avec paiement sécurisé et gestion des stocks</p>
						</div>

						<div className={style.globServiceCard}>
							<i className={`fi fi-rr-globe-pointer ${style.globServiceIcon}`}></i>
							<h4 className={style.globServiceCardTitle}>Application web</h4>
							<p className={style.globalServiceCardDesc}>Solutions SaaS et plateformes métier sur-mesure</p>
						</div>
					</div>

					<div className={style.globServiceCtaBlock}>
						<a href="/contact?type=web" className={style.ctaGlobService}>Demander un devis web</a>
					</div>
				</section>

				<section className={style.globServiceBlock}>
					<div className={style.globServiceHeader}>
						<strong className={style.globServiceCategory}>Développement mobile</strong>
						<h3 className={style.globServiceTitle}>Applications mobiles avec Flutter</h3>
						<p className={style.globServiceDescription}>Une seule base de code pour iOS et Android. Applications natives performantes avec une expérience utilisateur exceptionnelle.</p>
					</div>

					<div className={style.globServiceWrapper}>
						<div className={style.globServiceCard}>
							<i className={`fi fi-rr-globe-pointer ${style.globServiceIcon}`}></i>
							<h4 className={style.globServiceCardTitle}>Apps Natives</h4>
							<p className={style.globalServiceCardDesc}>Performance native sur iOS et Android</p>
						</div>

						<div className={style.globServiceCard}>
							<i className={`fi fi-rr-globe-pointer ${style.globServiceIcon}`}></i>
							<h4 className={style.globServiceCardTitle}>UX/UI Excellence</h4>
							<p className={style.globalServiceCardDesc}>Design adapté aux guidelines de chaque plateforme</p>
						</div>

						<div className={style.globServiceCard}>
							<i className={`fi fi-rr-globe-pointer ${style.globServiceIcon}`}></i>
							<h4 className={style.globServiceCardTitle}>Fonctionnalités</h4>
							<p className={style.globalServiceCardDesc}>Push notifications, géolocalisation, paiements in-app</p>
						</div>
					</div>

					<div className={style.globServiceCtaBlock}>
						<a href="/contact?type=mobile" className={style.ctaGlobService}>Discuter de mon projet mobile</a>
					</div>
				</section>

				<section className={style.globServiceBlock} id="zones-intervention">
					<div className={style.globServiceHeader}>
						<strong className={style.globServiceCategory}>Localisation géographique</strong>
						<h2 className={style.globServiceTitle}>Limoges & distanciel partout en France</h2>
						<p className={style.globServiceDescription}>
							Basé à Limoges, j’interviens sur site en Haute-Vienne et j’accompagne à distance des clients partout en France
							avec des points hebdomadaires et des livraisons continues.
						</p>
					</div>

					<div className={style.globServiceWrapper}>
						<div className={style.globServiceCard}>
							<i className={`fi fi-rr-globe-pointer ${style.globServiceIcon}`} aria-hidden="true"></i>
							<h3 className={style.globServiceCardTitle}>Agglomération</h3>
							<p className={style.globalServiceCardDesc}>Limoges, Panazol, Isle, Couzeix, Feytiat, Le Palais-sur-Vienne</p>
						</div>

						<div className={style.globServiceCard}>
							<i className={`fi fi-rr-globe-pointer ${style.globServiceIcon}`} aria-hidden="true"></i>
							<h3 className={style.globServiceCardTitle}>Haute-Vienne</h3>
							<p className={style.globalServiceCardDesc}>Saint-Junien, Aixe-sur-Vienne, Condat-sur-Vienne, Boisseuil, Rilhac-Rancon</p>
						</div>

						<div className={style.globServiceCard}>
							<i className={`fi fi-rr-globe-pointer ${style.globServiceIcon}`} aria-hidden="true"></i>
							<h3 className={style.globServiceCardTitle}>France entière</h3>
							<p className={style.globalServiceCardDesc}>
								Collaboration en visio, outils partagés, démos régulières. Livraison et support à distance.
							</p>
						</div>
					</div>

					<div className={style.globServiceCtaBlock}>
						<a href="/contact" className={style.ctaGlobService}>Me contacter</a>
					</div>
				</section>

				<div className={style.faqBlock}>
					{homeFaq.map((item, i) => (
						<details key={`_${i}`} className={style.faqItem}>
							<summary className={style.faqSummary}>{item.question}</summary>
							<div className={style.faqAnswer}>{item.answer}</div>
						</details>
					))}
				</div>

				<section className={style.globServiceBlock}>
					<div className={style.globServiceHeader}>
						<strong className={style.globServiceCategory}>Contact</strong>
						<h3 className={style.globServiceTitle}>Concrétisons votre projet ensemble</h3>
						<p className={style.globServiceDescription}>Vous avez un projet en tête ? Parlons-en ! Je vous accompagne de l&#39;idée à la mise en ligne avec un suivi personnalisé.</p>
					</div>

					<div className={style.formContainer}>
						<ContactZoneComponent title={"On parle de votre projet ?"} description={'Discutons de votre projet sans attendre : site web, application mobile ou refonte, je vous apporte des solutions adaptées à vos objectifs. Remplissez le formulaire de contact et je reviendrai rapidement vers vous pour échanger sur vos besoins.'} />
					</div>
				</section>
			</BodyWrapperComponent>
		</>
	)
}