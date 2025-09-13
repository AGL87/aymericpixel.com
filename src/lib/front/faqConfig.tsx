export type FaqItem = { question: string; answer: string };

export const homeFaq: FaqItem[] = [
	{
		question: 'Combien de temps dure un projet ?',
		answer: 'Tout dépend des besoins de votre projet. Cependant je fonctionne en méthode agile (sauf exception), avec des livraisons tous les 15 jours.'
	},
	{
		question: 'Quelles sont les technologies utilisées pour développer mes applications web ?',
		answer: 'Pour le développement web, j\'utilise le plus régulièrement Node.js via Next.js pour l\'interface utilisateur et Nest.js pour la logique du backend. ' +
			'Selon les besoins il peut arriver que qu\'un framework PHP comme Symfony ou Laravel soit utilisé.'
	},
	{
		question: 'Pour les applications mobiles, quelles sont les technologies utilisées ?',
		answer: 'Personnellement j\'utilise Flutter car c\'est un framework open-source et multiplateform (iOS et Android). Pour les notifications, j\'utilise Firebase. Et pour ' +
			'les achats in-app, c\'est directement avec les intégrations de chaque plateforme (Apple Store ou Google Play).'
	},
	{
		question: 'Comment se passe le suivi de projet ?',
		answer: 'Un projet, avant d\'être du développement, c\'est un encadrement des besoins et la rédaction du cahier des charges ainsi que du MVP en accord avec la vision du client. ' +
			'Ensuite seulement je passe au design et au développement. Tous les 15 jours (moins pour les petits projets), il y a un test et une livraison en production, accessible au client pour validation. ' +
			'On check ensemble si tout convient, et on continue le développement jusqu\'à la fin. Ensemble on réalise la recette finale pour voir si tout est conforme, et le projet est terminé. ' +
			'Besoin d\'un hébergement et d\'une maintenance ? Pas de soucis, je suis là pour vous aider.'
	},
	{
		question: 'Où interviens-tu ?',
		answer: 'Je suis localisé à Limoges. Mais peut impoorte où vous être en France, je suis là pour votre projet grâce à un développement transparent ' +
			'et des réunion en remote régulières.'
	},
	{
		question: 'Est-ce que tu te déplaces ?',
		answer: 'Ça dépend de la distance. Mais en dehors de Limoges ça peut être compliqué. Mais ne vous inquiétez pas ! Je m\'occupe d\'organiser les RDV en remote si besoin.'
	}
];

export default function FaqJsonLd() {
	const data = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: homeFaq.map(it => ({
			"@type": "Question",
			name: it.question,
			acceptedAnswer: { "@type": "Answer", text: it.answer }
		}))
	};
	return (
		<script
			id={'__homeFaq__'}
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}