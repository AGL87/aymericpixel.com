import {ReactNode} from "react";
import HeaderComponent from "@/aymericpixel/app/ui/foundation/heacerComponent";
import BodyWrapperComponent from "@/aymericpixel/app/ui/foundation/bodyWrapperComponent";
import {PORTFOLIO_MOBILE_CARDS, PORTFOLIO_WEB_CARDS} from "@/aymericpixel/lib/front/portfolioConfig";
import PortfolioCardComponent from "@/aymericpixel/app/ui/portfolio/portfolioCardComponent";
import style from './style.module.css';

export default function PortfolioPageUI() : ReactNode {
	return (
		<>
			<HeaderComponent title={'Portfolio'} subTitle={'Découvrez les projets web et mobile sur lesquels j\'ai travaillé'} />

			<BodyWrapperComponent>
				<div className={style.cardsWrapper}>
					<section className={style.cardsBlockWrapper}>
						<div className={style.cardsBlockTitleBlock}>
							<h2 className={style.cardsTitle}>Développement Web</h2>
							<p className={style.cardsDescription}>Sites web, applications web et solutions e-commerce</p>
						</div>

						<div className={style.cardsContainer}>
							{PORTFOLIO_WEB_CARDS.map((card, index) => (
								<PortfolioCardComponent key={`portfolio_web_${index}`} props={card} />
							))}
							{PORTFOLIO_WEB_CARDS.length === 0 && (
								<p className={style.emptyCardsMessage}>Devenez le premier client à être affiché ici !</p>
							)}
						</div>
					</section>

					<section className={style.cardsBlockWrapper}>
						<div className={style.cardsBlockTitleBlock}>
							<h2 className={style.cardsTitle}>Développement Mobile</h2>
							<p className={style.cardsDescription}>Applications mobiles iOS et Android développées avec Flutter</p>
						</div>

						<div className={style.cardsContainer}>
							{PORTFOLIO_MOBILE_CARDS.map((card, index) => (
								<PortfolioCardComponent key={`portfolio_web_${index}`} props={card} />
							))}
							{PORTFOLIO_MOBILE_CARDS.length === 0 && (
								<p className={style.emptyCardsMessage}>Devenez le premier client à être affiché ici !</p>
							)}
						</div>
					</section>
				</div>
			</BodyWrapperComponent>

			<section className={style.ctaBlock}>
				<strong className={style.ctaTitle}>Votre projet mérite une solution sur-mesure</strong>
				<p className={style.ctaDescription}>Discutons ensemble de vos besoins et créons quelque chose d&#39;exceptionnel</p>

				<a href="/contact" className={style.ctaButton}>Démarrer mon projet</a>
			</section>

			<section className={style.legalSection}>
				<p className={style.legalText}>
					* Les projets réalisés en alternance ont été supervisés par l&#39;entreprise pour laquelle je travaillais durant mes études.
					<br/>
					Les propriétés intellectuelles reviennent à qui de droit.
					<br />
					Chaque projet mentionné, issu de l&#39;alternance, est en ligne et accessible publiquement.
					<br />
					Chaque projet est mentionné sur la base de l&#39;autorisation écrite des commanditaires.
				</p>
			</section>
		</>
	);
}