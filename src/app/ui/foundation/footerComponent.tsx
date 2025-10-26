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
						<Image className={style.footerLogo} src={"/assets/images/logo.webp"} alt={"Logo du développeur Aymeric Leger Achard"} width={45} height={45} />

						<strong className={style.footerCorporationName}>Aymeric Pixel</strong>
					</div>

					<p className={style.footerCorporationText}>
						Développeur freelance spécialisé en développement web et mobile. Solutions sur-mesure avec une approche moderne et performante pour mener à bien vos projets.
					</p>

					<div className={style.corporationLinks}>
						<Link href={'mailto:contact@aymericpixel.com'} aria-label={"Me contacter par email à contact@aymericpixel.com"}><i className="fi fi-rr-envelope"></i></Link>
						<Link href={'tel:+33612683095'} target={"_blank"} aria-label={"Appel téléphonique"}><i className="fi fi-rr-circle-phone"></i></Link>
						<Link href={'https://linkedin.com/in/aymeric-leger-achard'} target={"_blank"} aria-label={"Accès à la page LinkedIn"}><i className="fi fi-brands-linkedin"></i></Link>
						<Link href={'https://www.instagram.com/aymericpixel?igsh=cjlpMmFtZ2lnZW00&utm_source=qr'} target={"_blank"} aria-label={"Accès à la page Instagram"}><i className="fi fi-brands-instagram"></i></Link>
						<Link href={'https://www.facebook.com/profile.php?id=61583017550921'} target={"_blank"} aria-label={"Accès à la page Facebook"}><i className="fi fi-brands-facebook"></i></Link>
						<Link href={'https://www.tiktok.com/@aymeric.pixel?_t=ZN-90rnXQCyrG2&_r=1'} target={"_blank"} aria-label={"Accès au compte Tiktok"}><i className="fi fi-brands-tik-tok"></i></Link>
						<Link href={'https://x.com/aymericpixeloff'} target={"_blank"} aria-label={"Accès au compte X"}><i className="fi fi-brands-twitter"></i></Link>
					</div>
				</div>
				<div className={style.footerLinksWrapper}>
					<ul className={style.footerLinksList}>
						<li>Liens utiles</li>
						<li><Link href={"/"}>Accueil</Link></li>
						<li><Link href={"/portfolio"}>Réalisations</Link></li>
						<li><Link href={"/process"}>Processus</Link></li>
						<li><Link href={"/contact"}>Contact</Link></li>
					</ul>

					<ul className={style.footerLinksList}>
						<li>Mes solutions</li>
						<li><Link href={"/solutions/echo"}>Echo</Link></li>
					</ul>

					<ul className={style.footerLinksList}>
						<li>Informations légales</li>
						<li><Link href={"/legal/seller"}>Conditions générales de vente</Link></li>
						<li><Link href={"/legal/legal"}>Mentions légales</Link></li>
					</ul>
				</div>
			</div>
			<div className={style.copyrightBlock}>
				Copyright © {new Date().getFullYear()} Aymeric Leger Achard. Tous droits réservés.
			</div>
		</footer>
	)
}