import {ReactNode} from "react";
import HeaderComponent from "@/aymericpixel/app/ui/foundation/heacerComponent";
import ProcessBlockComponent, {ProcessBlockProps} from "@/aymericpixel/app/ui/process/processBlockComponent";
import styles from './style.module.css';

const processBlocks: ProcessBlockProps[] = [
	{
		identifier: 1,
    title: "Encadrement du projet",
    description: "Rédaction du cahier des charges et du MVP. Mise au point de la structure schématique du projet.",
    listOfItems: [
			"Analyse des besoins et objectifs",
	    "Définition du MVP (Minimum Viable Product)",
	    "Architecture technique et fonctionnelle",
	    "Planning et estimation des délais",
	    "Identification des risques et contraintes",
    ]
	},
	{
		identifier: 2,
		title: "Maquettage et visuels",
		description: "Création des maquettes et design de l'interface utilisateur.",
		listOfItems: [
			"Adaptation responsive design (PC, tablette, mobile)",
			"Maquettes Figma",
			"Maquettes haute fidélité"
		]
	},
	{
		identifier: 3,
		title: "Développement par itération",
		description: "Développement avec la méthode agile, avec livraisons régulières et feedback continu.",
		listOfItems: [
			"Sprints de développement",
			"Livraisons régulières des nouvelles fonctionnalités",
			"Tests continus",
			"Feedbacks et ajustements",
			"Documentation technique"
		]
	},
	{
		identifier: 4,
		title: "Recette et mise en production",
		description: "Validation finale validée avec le client et mise en production pour usage.",
		listOfItems: [
			"Recette client",
			"Déploiement en production",
			"Formation rapide utilisateur",
			"Documentation finale",
			"Support post-livraison"
		]
	}
]

export default function ProcessPageUI() : ReactNode {
	return (
		<>
			<HeaderComponent title={"Mon processus de développement"} subTitle={"Une méthode éprouvée pour garantir le succès de votre projet"} />

			<div className={styles.wrapper}>
				{processBlocks.map((block) => (
					<ProcessBlockComponent key={`_${block.identifier}`} props={block} />
				))}
			</div>
		</>
	);
}