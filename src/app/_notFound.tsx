"use client";

import Link from "next/link";
import styles from "./notFound.module.css";
import {SVGProps} from "react";

export default function NotFoundUI() {
	const goBack = () => {
		if (typeof window !== "undefined" && window.history.length > 1) window.history.back();
		else window.location.href = "/";
	};

	return (
		<div className={styles.container}>
			<div className={styles.decor}>
				<div className={styles.dotPrimary} />
				<div className={styles.dotSecondary} />
			</div>

			<div className={styles.content}>
				<div className={styles.block}>
					<div className={styles.titleWrap}>
						<h1 className={styles.title404}>404</h1>
						<div aria-hidden="true" className={styles.title404Shadow}>404</div>
					</div>

					<h2 className={styles.subtitle}>Oups ! Page introuvable</h2>

					<p className={styles.paragraph}>
						Il semblerait que cette page ait disparu dans les méandres du web.
						Retournons sur un terrain plus familier !
					</p>
				</div>

				<div className={styles.ctas}>
					<Link href="/" className={styles.btnPrimary} aria-label="Retour à l’accueil">
						<HomeIcon className={styles.icon} />
						Retour à l’accueil
					</Link>

					<button type="button" onClick={goBack} className={styles.btnSecondary}>
						<ArrowLeftIcon className={styles.icon} />
						Page précédente
					</button>
				</div>
			</div>
		</div>
	);
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M3 10.5L12 4l9 6.5" />
			<path d="M5 10v10h14V10" />
			<path d="M9 20v-6h6v6" />
		</svg>
	);
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M12 19l-7-7 7-7" />
			<path d="M19 12H5" />
		</svg>
	);
}
