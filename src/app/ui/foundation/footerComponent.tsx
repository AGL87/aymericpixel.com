import {ReactNode} from "react";
import Link from "next/link";
import style from './footerComponent.module.css';
import Image from "next/image";

export default function FooterComponent(): ReactNode {
	return (
		<footer className={style.footerBlock}>
			<div className={style.footerLinksContainer}>
				<div className={style.footerCorporationWrapper}>
					<div className={style.footerCorporationBlock}>
						<Image className={style.footerLogo} src={"/assets/images/logo.svg"} alt={"Aymeric Pxiel - Développeur Web & Mobile : logo d'entreprise"} width={45} height={45} />

						<strong className={style.footerCorporationName}>Aymeric Pixel</strong>
					</div>

					<p className={style.footerCorporationText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolores fugiat veniam qui exerci imperdiet eleifend volutpat possim adipisici invidunt amet. Nihil lorem wisi nostrud nisl sea, dolor tation eleifend mazim mollit voluptate consetetur iriure laboris sadipscing cum facilisis gubergren elit rebum deserunt. Molestie volutpat tempor nobis ullamco autem blandit aliqua incidunt luptatum proident mazim invidunt facilisis. Voluptate eleifend vel praesent no eu enim gubergren. Vulputate veniam aliquyam. Elit enim elit. Nulla mazim dolor.
					</p>

					<div className={style.corporationLinks}>
						<Link href={'mailto:contact@aymericpixel.com'} aria-description={"Contact par email"}><i className="fi fi-rr-envelope"></i></Link>
						<Link href={'https://linkedin.com/in/aymeric-leger-achard'} target={"_blank"} aria-description={"Accès à la page LinkedIn"}><i className="fi fi-brands-linkedin"></i></Link>
					</div>
				</div>
				<div className={style.footerLinksWrapper}>
					<ul className={style.footerLinksList}>
						<li>Services</li>
						<li><Link href={""}>Développement web</Link></li>
						<li><Link href={""}>Développement mobile</Link></li>
						<li><Link href={""}>Gestion de projet</Link></li>
						<li><Link href={""}>Tarifs</Link></li>
					</ul>

					<ul className={style.footerLinksList}>
						<li>Liens utiles</li>
						<li><Link href={"/"}>Accueil</Link></li>
						<li><Link href={"/projects"}>Réalisatons</Link></li>
						<li><Link href={"/process"}>Processus</Link></li>
						<li><Link href={"/contact"}>Contact</Link></li>
					</ul>

					<ul className={style.footerLinksList}>
						<li>Informations légales</li>
						<li><Link href={"/legal/usage"}>Conditions générales d&#39;utilisation</Link></li>
						<li><Link href={"/legal/seller"}>Conditions générales de vente</Link></li>
						<li><Link href={"/legal/legal"}>Mentions légales</Link></li>
						<li><Link href={"/legal/privacy"}>Politique de confidentialité</Link></li>
					</ul>
				</div>
			</div>
			<div className={style.copyrightBlock}>
				Copyright © {new Date().getFullYear()} Aymeric Leger Achard. Tous droits réservés.
			</div>
		</footer>
	)
}