export interface PortfolioCardProps {
	isOnline?: boolean;
	type: 'WEB_DEV' | 'MOBILE_APP';
	title: string;
	description: string;
	technologies: string[];
	target?: string;
	imageUrl: string;
	imageAlt: string;
	alternanceProject?: boolean;
}

export const PORTFOLIO_WEB_CARDS: PortfolioCardProps[] = [
	{
		isOnline: true,
		title: 'Edons',
		target: 'https://e-dons.fr',
		technologies: [
			'PHP',
			'Symfony',
			'MySQL',
			'SEO',
		],
		description: 'Plateforme de collecte de dons pour développer le mécénat et aider le financement d\'associations.',
		type: 'WEB_DEV',
		imageUrl: '/assets/images/portfolio/e-dons.webp',
		imageAlt: 'Projet Edons, dans le but de la collecte de dons pour contribuer au mécénat. Développé en Symfony.',
		alternanceProject: true,
	},
]

export const PORTFOLIO_MOBILE_CARDS: PortfolioCardProps[] = [
]