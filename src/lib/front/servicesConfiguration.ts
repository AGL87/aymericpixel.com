interface ServiceData {
	title: string;
	price: number;
	extra?: string;
}

interface ServiceConfiguration {
	mobileDevelopment: ServiceData[];
	webDevelopment: ServiceData[];
}

export const ServicesConfiguration : ServiceConfiguration = {
	webDevelopment: [
		{
			title: 'Gestion de projet',
			price: 250,
			extra: 'Phase de gestion de projet : rédaction du cahier des charges, du MVP, documentation préliminaire au développement (schéma base de données, diagramme fonctionnel), encadrement du périmètre.'
		},
		{
			title: 'Maquette graphique',
			price: 180,
			extra: 'Réalisation d\'une maquette Figma.'
		},
		{
			title: '1 journée de développement',
			price: 500,
		},
		{
			title: 'SEO',
			price: 99.99,
			extra: 'SEO naturel pour site internet : syntaxe de code pour aider à référencer le site. N\'inclut pas le SEO payant ou la configuration d\'outils de référencement tiers.'
		},
		{
			title: 'Déploiement en production',
			price: 250,
			extra: 'Mise en production de la plateforme développée sur l\'infrastructure du client ou commandée par le client dans le cadre du service d\'hébergement.'
		},
		{
			title: 'Maintenance (1 mois)',
			price: 275,
			extra: 'Correction de dysfonctionnement majeurs concernant du code pour un projet web.'
		},
	],
	mobileDevelopment: [
		{
			title: 'Gestion de projet',
			price: 250,
			extra: 'Phase de gestion de projet : rédaction du cahier des charges, du MVP, documentation préliminaire au développement (schéma base de données, diagramme fonctionnel), encadrement du périmètre. Définition des plateformes mobiles cibles.'
		},
		{
			title: '1 journée de développement',
			price: 550,
		},
		{
			title: 'Intégration de notifications push',
			price: 375,
			extra: 'Mise en place et intégration de la plateforme Firebase Cloud Messaging pour la réception de notifications mobiles.'
		},
		{
			title: 'Intégration d\'achats in-app',
			price: 375,
			extra: 'Intégration des API pour les achats in-app. Tarif par store (Apple Store / Google Store).'
		},
		{
			title: '1 mois de maintenance',
			price: 300,
			extra: 'Correction de dysfonctionnement majeurs concernant le code ou les mises à jour OS pour un projet mobile.'
		},
		{
			title: '1 an de distribution',
			price: 300,
			extra: 'Disponibilité de l\'application sur Apple Store et Google Play pendant 1 an, renouvelable.'
		},
	]
}