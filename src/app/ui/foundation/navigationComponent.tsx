"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./navigationComponent.module.css";

export default function NavigationComponent(): ReactNode {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<nav className={style.navigationBlock}>
			<div className={style.navigationSubcontainer}>
				<Link href="/">
					<Image
						className={style.menuLogo}
						src="/assets/images/logo.webp"
						alt="Aymeric Pxiel - Développeur Web & Mobile : logo d'entreprise"
						width={75}
						height={75}
					/>
				</Link>
			</div>

			<div className={`${style.navigationSubcontainer} ${style.desktopOnly}`}>
				<ul className={style.mainNavigationContainer}>
					<li>
						<Link href="/" className={style.menuLink}>Accueil</Link>
					</li>
					<li>
						<Link href="/portfolio" className={style.menuLink}>Portfolio</Link>
					</li>
					<li>
						<Link href="/process" className={style.menuLink}>Processus</Link>
					</li>
					<li>
						<Link href="/contact" className={style.menuLink}>Contact</Link>
					</li>
				</ul>
			</div>

			<div className={style.navigationSubcontainer}>
				<Link href="/contact" className={`${style.menuCta} ${style.desktopOnly}`}>Demander un devis</Link>

				<button
					type="button"
					className={`${style.burgerButton} ${style.mobileOnly}`}
					aria-label="Ouvrir le menu"
					aria-expanded={open}
					aria-controls="mobileMenu"
					data-open={open ? "true" : "false"}
					onClick={() => setOpen(v => !v)}
				>
					<i className={'fi fi-br-menu-burger'}></i>
				</button>
			</div>

			<div
				className={`${style.backdrop} ${open ? style.open : ""}`}
				onClick={() => setOpen(false)}
			/>
			<div
				id="mobileMenu"
				className={`${style.mobileMenu} ${open ? style.open : ""}`}
			>
				<ul className={style.mobileNavList}>
					<li>
						<Link href="/" className={style.mobileNavLink} onClick={() => setOpen(false)}>Accueil</Link>
					</li>
					<li>
						<Link href="/projects" className={style.mobileNavLink} onClick={() => setOpen(false)}>Réalisations</Link>
					</li>
					<li>
						<Link href="/process" className={style.mobileNavLink} onClick={() => setOpen(false)}>Processus</Link>
					</li>
					<li>
						<Link href="/contact" className={style.mobileNavLink} onClick={() => setOpen(false)}>Contact</Link>
					</li>
				</ul>
				<Link href="/contact" className={style.menuCta} onClick={() => setOpen(false)}>
					Demander un devis
				</Link>
			</div>
		</nav>
	);
}
