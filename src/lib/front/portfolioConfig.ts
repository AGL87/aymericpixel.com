export interface PortfolioCardProps {
	isOnline?: boolean;
	type: 'WEB_DEV' | 'MOBILE_APP';
	title: string;
	description: string;
	technologies: string[];
	target?: string;
	target2?: string;
	imageUrl: string;
	imageAlt: string;
	alternanceProject?: boolean;
}

export const PORTFOLIO_WEB_CARDS: PortfolioCardProps[] = [
	{
		isOnline: false,
		title: 'Vivez-Local',
		technologies: [
			'Next.js',
			'Nest.js',
			'Tailwind',
			'SEO',
		],
		description: 'Plateforme pour vous aider à booster votre pouvoir d\'achat et profiter de réductions locales.',
		type: 'WEB_DEV',
		imageUrl: '/assets/images/portfolio/vivezlocal.svg',
		imageAlt: 'Plateforme Next.js & Nest.js pour booster le pouvoir d\'achat des utilisateurs et leur permettre de profiter de réductions locales.',
	},
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
	{
		isOnline: true,
		title: 'My Balances',
		target: 'https://my-balances.com',
		technologies: [
			'PHP',
			'Symfony',
			'MySQL',
		],
		description: 'Plateforme pour la gestion de l\'application My Balances. Dédiée au rééquilibrage de la vie des parents, cette app permet de méler vie parentale avec vie personnelle et professionnelle.',
		type: 'WEB_DEV',
		imageUrl: '/assets/images/portfolio/my-balances.webp',
		imageAlt: 'Plateforme administratrice du application mobile pour le bien-être pour les parents.',
		alternanceProject: true,
	},
]

export const PORTFOLIO_MOBILE_CARDS: PortfolioCardProps[] = [
	{
		isOnline: false,
		title: 'ZestChallenge',
		target: undefined,
		technologies: [
			'Flutter',
			'Firebase',
			'API'
		],
		description: 'Application mobile développée en 48h, conçu pour mettre un zest de piquant dans la routine. Bientôt disponible sur Google Play Store et Apple Store.',
		type: 'MOBILE_APP',
		imageUrl: '/assets/images/portfolio/zest-challenge.png',
		imageAlt: 'Application mobile Flutter, pour casser un peu le quotidien.',
	},
	{
		isOnline: true,
		title: 'My Balances',
		target: 'https://play.google.com/store/apps/details?id=com.mybalances.mybalances',
		technologies: [
			'Flutter',
			'Kotlin',
			'Swift',
			'Firebase',
			'API'
		],
		description: 'Application mobile aider les parents à rééquilibrer leur vie personnelle, professionnelle et sociale.',
		type: 'MOBILE_APP',
		imageUrl: '/assets/images/portfolio/my-balances.webp',
		imageAlt: 'Application mobile pour le bien-être pour les parents.',
		alternanceProject: true,
	},
	{
		isOnline: true,
		title: 'Prev\'en Main',
		target: 'https://play.google.com/store/apps/details?id=com.directive4.prevenmain&gl=FR',
		target2: 'https://apps.apple.com/us/app/prev-en-main/id6456945351',
		technologies: [
			'Flutter',
			'FlameEngine'
		],
		description: 'Application à destination des jeunes pour découvrir de manière ludique les risques liés aux métiers manuels, sous forme de jeux divers.',
		type: 'MOBILE_APP',
		imageUrl: '/assets/images/portfolio/prevenmain.png',
		imageAlt: 'App mobile pour découvrir à travers des jeux, les risques des métiers manuels.',
		alternanceProject: true,
	},
]