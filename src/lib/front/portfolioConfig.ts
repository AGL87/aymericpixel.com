export interface PortfolioCardProps {
	isOnline?: boolean;
	type: 'WEB_DEV' | 'MOBILE_APP';
	title: string;
	description: string;
	technologies: string[];
	target?: string;
	imageUrl: string;
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
	},
	{
		isOnline: true,
		title: 'My Balances',
		target: 'https://my-balances.com',
		technologies: [
			'PHP',
			'Symfony',
			'MySQL',
			'Administration',
			'API'
		],
		description: 'API reliée à l\'application My Balances, pour retrouver un équilibre et son bien être.',
		type: 'WEB_DEV',
		imageUrl: '/assets/images/portfolio/my-balances.webp',
	},
]

export const PORTFOLIO_MOBILE_CARDS: PortfolioCardProps[] = [
	{
		isOnline: true,
		title: 'My Balances',
		target: 'https://my-balances.com',
		technologies: [
			'Flutter',
			'Firebase',
			'API',
			'Achats In-app',
		],
		description: 'Application de bien être, contenant podcasts et articles pour reprendre de bonne habitudes.',
		type: 'MOBILE_APP',
		imageUrl: '/assets/images/portfolio/my-balances.webp',
	},
]