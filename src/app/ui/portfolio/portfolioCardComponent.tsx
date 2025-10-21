import {ReactNode} from "react";
import {PortfolioCardProps} from "@/aymericpixel/lib/front/portfolioConfig";
import style from './portfolioCardComponent.module.css';
import Image from "next/image";

export default function PortfolioCardComponent({props}: Readonly<{
	props: PortfolioCardProps;
}>) : ReactNode {
	return (
		<div className={style.card}>
			<div className={style.cardHeader}>
				<span className={style.cardHeaderItem}>{props.isOnline ? 'En ligne' : 'En développement'}</span>
				<span className={style.cardHeaderItem}>{props.type === 'WEB_DEV' ? <i className={`${style.headerIcon} fi fi-rr-globe`}></i> :
					<i className={`${style.headerIcon} fi fi-rr-mobile-notch`}></i>}</span>
				<Image src={props.imageUrl} width={120} height={120} className={style.cardImage} alt={props.imageAlt} />
			</div>

			<div className={style.cardContent}>
				<h3 className={style.cardTitle}>{props.title}</h3>
				<p className={style.cardDescription}>{props.description}</p>
				<div className={style.techList}>
					{props.technologies.map((tech, index) => (
						<strong key={`_${index}`} className={style.tech}>{tech}</strong>
					))}
				</div>
				{props.target &&
            <div className={`${style.targetContainer} ${props.target2 ? style.targetContainer2 : ''}`}>
                <a href={props.target} target="_blank" className={style.target}>
	                {props.target2 ? 'App Android' : 'Voir le projet'}
                </a>

		            {props.target2 && (
									  <a href={props.target2} target="_blank" className={style.target}>
                      App iOS
                    </a>
		            )}
            </div>
				}
			</div>
		</div>
	)
}