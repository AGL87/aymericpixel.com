
import { ReactNode } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import BodyWrapperComponent from "@/aymericpixel/app/ui/foundation/bodyWrapperComponent";

// Gradients aléatoires pour les cartes
const cardGradients = [
    "linear-gradient(135deg, rgba(0, 135, 103, 0.06), rgba(41, 168, 161, 0.04))",
    "linear-gradient(135deg, rgba(41, 168, 161, 0.06), rgba(0, 135, 103, 0.04))",
    "linear-gradient(120deg, rgba(0, 135, 103, 0.05), rgba(41, 168, 161, 0.06))",
    "linear-gradient(150deg, rgba(41, 168, 161, 0.05), rgba(0, 135, 103, 0.05))",
    "linear-gradient(110deg, rgba(0, 135, 103, 0.04), rgba(41, 168, 161, 0.05))",
];

const getRandomGradient = (index: number): string => {
    return cardGradients[index % cardGradients.length];
};

// Images temporaires de picsum.photos
const solutionImages = [
    { url: "https://picsum.photos/400/300?random=1", alt: "Echo Solution" },
    { url: "https://picsum.photos/400/300?random=2", alt: "Développement Web" },
    { url: "https://picsum.photos/400/300?random=3", alt: "Développement Mobile" },
    { url: "https://picsum.photos/400/300?random=4", alt: "Maintenance" },
    { url: "https://picsum.photos/400/300?random=5", alt: "Consulting" },
];

export default function SolutionsPageUI(): ReactNode {
    return (
        <BodyWrapperComponent>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Mes Solutions</h1>
                    <p className={styles.heroSubtitle}>
                        Des solutions adaptées à chaque projet, du site vitrine rapide au développement sur-mesure.
                    </p>
                </div>
            </section>

            {/* Solutions Grid - Apple Style */}
            <section className={styles.solutionsContainer}>
                {/* Echo Solution */}
                <div className={styles.solutionRow}>
                    <div 
                        className={styles.solutionItem}
                        style={{ background: getRandomGradient(0) }}
                    >
                        <div className={styles.solutionContent}>
                            <h2 className={styles.solutionName}>Echo</h2>
                            <p className={styles.solutionTagline}>
                                Site vitrine clé en main en 72h
                            </p>
                            <div className={styles.solutionCtas}>
                                <Link href="/solutions/echo" className={styles.ctaLink}>
                                    En savoir plus
                                    <i className="fi fi-rr-arrow-right"></i>
                                </Link>
                                <Link href="/contact?type=echo" className={styles.ctaLinkSecondary}>
                                    Commander
                                    <i className="fi fi-rr-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.solutionImage}>
                            <Image
                                src={solutionImages[0].url}
                                alt={solutionImages[0].alt}
                                width={400}
                                height={300}
                                className={styles.solutionImageContent}
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Web Development & Mobile Development Row */}
                <div className={styles.solutionRow}>
                    {/* Web Development */}
                    <div 
                        className={styles.solutionItem}
                        style={{ background: getRandomGradient(1) }}
                    >
                        <div className={styles.solutionContent}>
                            <h2 className={styles.solutionName}>Développement Web</h2>
                            <p className={styles.solutionTagline}>
                                Sites sur-mesure et performants
                            </p>
                            <div className={styles.solutionCtas}>
                                <Link href="/contact?type=web" className={styles.ctaLink}>
                                    Demander un devis
                                    <i className="fi fi-rr-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.solutionImage}>
                            <Image
                                src={solutionImages[1].url}
                                alt={solutionImages[1].alt}
                                width={400}
                                height={300}
                                className={styles.solutionImageContent}
                            />
                        </div>
                    </div>

                    {/* Mobile Development */}
                    <div 
                        className={styles.solutionItem}
                        style={{ background: getRandomGradient(2) }}
                    >
                        <div className={styles.solutionContent}>
                            <h2 className={styles.solutionName}>Développement Mobile</h2>
                            <p className={styles.solutionTagline}>
                                Applications iOS et Android
                            </p>
                            <div className={styles.solutionCtas}>
                                <Link href="/contact?type=mobile" className={styles.ctaLink}>
                                    Demander un devis
                                    <i className="fi fi-rr-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.solutionImage}>
                            <Image
                                src={solutionImages[2].url}
                                alt={solutionImages[2].alt}
                                width={400}
                                height={300}
                                className={styles.solutionImageContent}
                            />
                        </div>
                    </div>
                </div>

                {/* Maintenance & Support Row */}
                <div className={styles.solutionRow}>
                    {/* Maintenance */}
                    <div 
                        className={styles.solutionItem}
                        style={{ background: getRandomGradient(3) }}
                    >
                        <div className={styles.solutionContent}>
                            <h2 className={styles.solutionName}>Maintenance</h2>
                            <p className={styles.solutionTagline}>
                                Support et mises à jour inclus
                            </p>
                            <div className={styles.solutionCtas}>
                                <Link href="/contact?type=maintenance" className={styles.ctaLink}>
                                    En savoir plus
                                    <i className="fi fi-rr-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.solutionImage}>
                            <Image
                                src={solutionImages[3].url}
                                alt={solutionImages[3].alt}
                                width={400}
                                height={300}
                                className={styles.solutionImageContent}
                            />
                        </div>
                    </div>

                    {/* Consulting */}
                    <div 
                        className={styles.solutionItem}
                        style={{ background: getRandomGradient(4) }}
                    >
                        <div className={styles.solutionContent}>
                            <h2 className={styles.solutionName}>Consulting</h2>
                            <p className={styles.solutionTagline}>
                                Audit et stratégie digitale
                            </p>
                            <div className={styles.solutionCtas}>
                                <Link href="/contact?type=consulting" className={styles.ctaLink}>
                                    Prendre rendez-vous
                                    <i className="fi fi-rr-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.solutionImage}>
                            <Image
                                src={solutionImages[4].url}
                                alt={solutionImages[4].alt}
                                width={400}
                                height={300}
                                className={styles.solutionImageContent}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final Section */}
            <section className={styles.ctaFinalSection}>
                <h2 className={styles.ctaFinalTitle}>Vous ne trouvez pas votre solution ?</h2>
                <p className={styles.ctaFinalDescription}>
                    Contactez-moi pour discuter de votre projet spécifique. Je peux créer une solution sur-mesure adaptée à vos besoins.
                </p>
                <Link href="/contact" className={styles.ctaFinalButton}>
                    Discuter de mon projet
                    <i className="fi fi-rr-arrow-right"></i>
                </Link>
            </section>
        </BodyWrapperComponent>
    );
}
