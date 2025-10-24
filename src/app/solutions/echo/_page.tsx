
import { ReactNode } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import ContactFormComponent from "@/aymericpixel/app/ui/contact/contactFormComponent";
import { echoFaq } from "@/aymericpixel/lib/front/echoFaqConfig";
import EchoFaqJsonLd from "@/aymericpixel/lib/front/echoFaqConfig";

export default function EchoPageUI(): ReactNode {
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
			<EchoFaqJsonLd />

			{/* Hero Section */}
			<section className={styles.heroSection}>
				<div className={styles.heroContent}>
					<h1 className={styles.heroTitle}>
						Echo
					</h1>
					<p className={styles.heroSubtitle}>
						Votre site vitrine clé en main en 72h
					</p>
					<p className={styles.heroDescription}>
						La solution idéale pour les startups et TPE/PME qui veulent tester un marché rapidement avec un site professionnel et performant.
					</p>
				</div>

				{/* Price Card */}
				<div className={styles.priceCard}>
					<div className={styles.priceCardContent}>
						<p className={styles.priceLabel}>Coût unique</p>
						<p className={styles.priceAmount}>750€</p>
						<p className={styles.priceCurrency}>TTC</p>
						<p className={styles.priceNote}>
							Livraison en 72h* après validation de l&#39;édition graphique
						</p>
						<Link className={styles.priceButton} href={"#__contact"}>
							Commander mon site
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className={styles.featuresSection}>
				<div className={styles.featuresSectionContainer}>
					<h2 className={styles.featuresTitle}>
						Ce qui est inclus
					</h2>
					<div className={styles.featuresGrid}>
						{/* Feature 1 */}
						<div className={styles.featureCard}>
							<h3 className={styles.featureCardTitle}>
								📄 Site vitrine complet
							</h3>
							<ul className={styles.featureCardList}>
								<li className={styles.featureCardListItem}>✓ Page d&#39;accueil</li>
								<li className={styles.featureCardListItem}>✓ Mentions légales</li>
								<li className={styles.featureCardListItem}>✓ Formulaire de contact</li>
							</ul>
						</div>

						{/* Feature 2 */}
						<div className={styles.featureCard}>
							<h3 className={styles.featureCardTitle}>
								🔥Droits intégrals sur votre site
							</h3>
							<p className={styles.featureCardDescription}>
								Une fois livrée, le site est à vous. Vous êtes libre de deviser des modifications pour le rendre encore plus complet.
								<br/>
								Vous voulez gérer l&#39;hébergement ? Pas de souci, sur simple demande, je vous transfère le code et la documentation
								nécessaire pour faire fonctionner votre site sur un serveur Nginx ou Apache.
							</p>
						</div>

						{/* Feature 3 */}
						<div className={styles.featureCard}>
							<h3 className={styles.featureCardTitle}>
								🎨 Conception graphique
							</h3>
							<p className={styles.featureCardDescription}>
								Maquette Figma professionnelle avec 2 allers-retours maximum pour les ajustements.
							</p>
						</div>

						{/* Feature 4 */}
						<div className={styles.featureCard}>
							<h3 className={styles.featureCardTitle}>
								🔍 SEO optimisé
							</h3>
							<p className={styles.featureCardDescription}>
								Référencement naturel intégré pour une meilleure visibilité sur les moteurs de recherche.
							</p>
						</div>

						{/* Feature 5 */}
						<div className={styles.featureCard}>
							<h3 className={styles.featureCardTitle}>
								🌐 Hébergement inclus
							</h3>
							<p className={styles.featureCardDescription}>
								Votre site est hébergé et maintenu pendant 1 an pour 469€ TTC.
							</p>
						</div>

						{/* Feature 6 */}
						<div className={styles.featureCard}>
							<h3 className={styles.featureCardTitle}>
								⚡ Livraison rapide
							</h3>
							<p className={styles.featureCardDescription}>
								72h de délai après validation de la conception graphique.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Comparison Section */}
			<section className={styles.comparisonSection}>
				<div className={styles.comparisonContainer}>
					<h2 className={styles.comparisonTitle}>
						Moins cher que les agences. Tout aussi performant.
					</h2>
					<p className={styles.comparisonSubtitle}>
						Bénéficiez d&#39;une qualité professionnelle sans les frais généraux des grandes agences.
					</p>
					<div className={styles.comparisonGrid}>
						<div className={styles.comparisonCard}>
							<h3 className={styles.comparisonCardTitle}>Agences traditionnelles</h3>
							<ul className={styles.comparisonCardList}>
								<li className={styles.comparisonCardListItem}>❌ 3 000€ à 8 000€ minimum</li>
								<li className={styles.comparisonCardListItem}>❌ 4 à 8 semaines de délai</li>
								<li className={styles.comparisonCardListItem}>❌ Frais généraux élevés</li>
								<li className={styles.comparisonCardListItem}>✓ Équipe dédiée</li>
								<li className={styles.comparisonCardListItem}>✓ Support complet</li>
							</ul>
						</div>
						<div className={`${styles.comparisonCard} ${styles.comparisonCardHighlight}`}>
							<div className={styles.comparisonBadge}>Meilleur choix</div>
							<h3 className={styles.comparisonCardTitle}>Echo - Aymeric Pixel</h3>
							<div className={styles.comparisonCardCost}>
								<span className={styles.comparisonCardCostLabel}>Coût initial</span>
								<span className={styles.comparisonCardCostAmount}>750€ TTC</span>
							</div>
							<div className={styles.comparisonCardCost}>
								<span className={styles.comparisonCardCostLabel}>Hébergement + maintenance/an</span>
								<span className={styles.comparisonCardCostAmount}>469€ TTC /an</span>
							</div>
							<ul className={styles.comparisonCardList}>
								<li className={styles.comparisonCardListItem}>✓ 72h de livraison</li>
								<li className={styles.comparisonCardListItem}>✓ Pas de surcoûts cachés</li>
								<li className={styles.comparisonCardListItem}>✓ Qualité professionnelle</li>
								<li className={styles.comparisonCardListItem}>✓ Maintenance 1 an incluse</li>
								<li className={styles.comparisonCardListItem}>✓ Serveur haute performance</li>
							</ul>
							<Link className={styles.comparisonButton} href={"#__contact"}>
								Commencer maintenant
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* For Whom Section */}
			<section className={styles.forWhomSection}>
				<div className={styles.forWhomContainer}>
					<h2 className={styles.forWhomTitle}>
						Pour qui ?
					</h2>
					<div className={styles.forWhomGrid}>
						<div className={styles.forWhomCard}>
							<h3 className={styles.forWhomCardTitle}>
								Startups
							</h3>
							<p className={styles.forWhomCardDescription}>
								Validez votre concept rapidement avec un site professionnel sans investissement lourd. Testez votre marché et itérez en fonction des retours.
							</p>
						</div>
						<div className={styles.forWhomCard}>
							<h3 className={styles.forWhomCardTitle}>
								TPE / PME
							</h3>
							<p className={styles.forWhomCardDescription}>
								Établissez votre présence en ligne professionnellement. Gagnez en crédibilité auprès de vos clients avec un site moderne et performant.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className={styles.ctaSection}>
				<div className={styles.ctaContainer}>
					<h2 className={styles.ctaTitle}>
						Prêt à lancer votre site ?
					</h2>
					<p className={styles.ctaDescription}>
						Contactez-moi pour discuter de votre projet Echo et obtenir un devis personnalisé.
					</p>
					<Link className={styles.ctaButton} href={"#__contact"}>
						Je me lance
					</Link>
				</div>
			</section>

			{/* FAQ Section */}
			<section className={styles.faqSection}>
				<div className={styles.faqContainer}>
					<h2 className={styles.faqTitle}>
						Questions fréquentes
					</h2>
					<div className={styles.faqList}>
						{echoFaq.map((item, i) => (
							<details key={`_echo_faq_${i}`} className={styles.faqItem}>
								<summary className={styles.faqSummary}>
									{item.question}
									<span className={styles.faqToggle}>▼</span>
								</summary>
								<p className={styles.faqAnswer}>
									{item.answer}
								</p>
							</details>
						))}
					</div>
				</div>
			</section>

			<div className={styles.FormContent} id={"__contact"}>
				<ContactFormComponent preValue={"__product_echo__"} />
			</div>
		</div>
	);
}
