import {LegalUsageText} from "@/aymericpixel/lib/front/legalUsageConfig";

/****** SETTINGS FOR LEGAL MENTIONS ******/

export const LEGAL_MENTIONS_TEXT: LegalUsageText = {
	title: "Mentions légales",
	lastEditionDate: "10/09/2025",
	preamble: 'Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour ' +
		'la confiance en l\'économie numérique, il est précisé aux utilisateurs du site Aymeric Pixel' +
		' l\'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.',
	items: [
		{
			title: "Edition du site",
			texts: [
				'Le présent site, accessible à l’URL www.aymericpixel.com (le « Site »), est édité par : <br/><br/> Aymeric Leger Achard, résidant ' +
				'11 Bis Rue des Palmiers, 87100 Limoges, de nationalité Française (France), né(e) le 04/08/2001, ' +
				'inscrite au R.C.S. de LIMOGES sous le numéro 990 714 636,\n'
			],
		},
		{
			title: "Hébergement",
      texts: [
        'Le Site est hébergé par la société PulseHeberg, situé 9, Boulevard de Strasbourg, <br/>83000 Toulon, (contact téléphonique ou email : +33422141360).\n'
      ],
		},
		{
			title: 'Directeur de la publication',
			texts: [
				'Le Directeur de la publication du Site est Aymeric Leger Achard.\n'
			]
		},
		{
			title: 'Nous contacter',
			texts: [
				'Par téléphone : +33612683095\n',
				'Par email : contact@aymericpixel.com\n',
				'Par courrier : 11 Bis Rue des Palmiers, 87100 Limoges\n'
			]
		}
	],
};

/****** END SETTINGS FOR LEGAL MENTIONS ******/

/****** SETTINGS FOR LEGAL SELLER ******/

export const LEGAL_SELLER_TEXT: LegalUsageText = {
	title: "Conditions générales de vente",
	lastEditionDate: "10/09/2025",
	items: [
		{
			title: 'Généralités',
			items: [
				{
					title: "Devis, commande, facturation",
					texts: [
						'Un devis détaillant le périmètre d’intervention, les prestations ainsi que les tarifs\n' +
						'est émis par le prestataire à la demande du prospect ou du client.',
						'Un devis est valable pendant 30 (trente) jours suivant son envoi par email au\n' +
						'prospect ou au client.',
						'Un devis est considéré comme accepté dès lors que le client appose sa\n' +
						'signature de manière manuscrite ou numérique.',
						'Un projet est considéré comme viable dès lors du paiement de l’acompte,\n' +
						'représentant 50% (cinquante pourcent) du montant total de la facture, sauf mention\n' +
						'contraire ou règle spécifique à une prestation. Considéré un projet viable, un projet qui\n' +
						'pourra être ultérieurement considéré comme débuté.',
						'Le paiement de l’acompte ne permet pas de considérer un projet comme débuté.\n' +
						'Seul un document d’attestation envoyé par courriel depuis l’adresse\n' +
						'contact@aymericpixel.com, permet de décréter un projet comme commencé\n' +
						'oficiellement.',
						'Les prix sont exprimés en euros, hors taxes. Le prestataire est en franchise en\n' +
						'base de TVA. La mention « TVA non applicable – art. 293 B du CGI » est portée sur les\n' +
						'devis et factures.',
						'Les modes de paiement autorisés sont : le virement bancaire et le prélèvement\n' +
						'bancaire, par l’intermédiaire de la plateforme Stripe [https://stripe.com/].',
						'Les frais correspondant à des notes de transport, hébergement, infrastructure,\n' +
						'logiciels, certificats et services tiers sont à la charge du client. Les détails sont indiqués\n' +
						'individuellement sur le devis associé.',
						'Le client est responsable du paiement d’une facture. Le client dispose de 15\n' +
						'(quinze) jours suivants la réception d’une facture pour la régler.',
						'En cas de non-paiement dans les 15 (quinze) jours suivants la réception d’une\n' +
						'facture, le prestataire se réserve le droit de suspendre toutes les prestations et servies\n' +
						'inclus dans le champ de la facture, sans avertissement.',
						'Dans le cadre où une facture est impayée pendant 14 (quatorze) jours suivant\n' +
						'sa réception, une relance par mail est envoyée au client.',
						'Le prestataire accorde la possibilité de négociations pour les délais de\n' +
						'paiement des factures, dans une limite de 60 (soixante) jours suivant réception. Les\n' +
						'délais de paiement sont indiqués sur la facture.',
						'Les services récurrents sont facturables au mois ou à l’année dans la durée de\n' +
						'365 (Trois-cent-soixante-cinq) jours. Le renouvellement de ces services peut être fait\n' +
						'manuellement par virement bancaire à l’initiative du client, ou par prélèvement bancaire\n' +
						'si le client en émet le souhait. En cas de retard de paiement, ou de dysfonctionnement\n' +
						'de la plateforme Stripe, un délai de paiement complémentaire de 15 (quinze) jours est\n' +
						'appliqué suivant la date d’anniversaire du service.',
						'Un service récurrent soumet le client à un engagement de paiement pour toute\n' +
						'sa durée. En cas de volonté de rupture de la part du client, le reste de la somme non-\n' +
						'payée reste due.',
						'Le prestataire se réserve le droit de rompre un service, récurrent ou non, s’il\n' +
						'estime que les conditions réunies ne sont pas qualifiées de sufisantes pour assurer un\n' +
						'travail en bon-et-du-forme et sécurisé. La rupture de service ou de contrat à l’initiative\n' +
						'du prestataire ne donne pas lieu au remboursement des montants payés par le client.',
						'Le prestataire s’engage, en cas d’arrêt de l’activité de l’entreprise, à mettre tous\n' +
						'les moyens en œuvre pour rediriger ses clients vers des confrères du même domaines.\n' +
						'La garantie de résultat n’est pas assurée.',
						'Le prestataire se réserve le droit de modifier les présentes conditions générales\n' +
						'de vente, à tout moment.',
						'Le prestataire s’engage à informer les clients soumis aux présentes conditions\n' +
						'générales de vente par email, d’éventuelles modifications. Les nouvelles conditions\n' +
						'remplacent les précédentes à date d’entrée en vigueur des nouvelles clauses.',
						'En cas de non-paiement dans les 15 (quinze) jours suivant la réception d’une\n' +
						'facture, des pénalités de retard seront appliquées, calculées à un taux de 1,5 fois le taux\n' +
						'd’intérêt légal en vigueur, sans qu’un rappel soit nécessaire. Ces pénalités sont dues\n' +
						'dès le premier jour de retard.',
						'Les tarifs appliqués sont calculés sur la base du nombre de jours estimés à\n' +
						'l’accomplissement d’une tâche, sur fond du taux journalier moyen (TJM). Le calcul des\n' +
						'tarifs prend également en compte la complexité de la tâche) accomplir ainsi que les\n' +
						'frais liés à sa mise en place.',
						'Le Prestataire se réserve le droit d’appliquer des ristournes selon la nature du\n' +
						'projet ou la relation avec le client (Ex : un projet de longue durée, supérieure à 15\n' +
						'(quinze) jours de développement peut se voir appliquer une réduction sur le TJM ; un\n' +
						'projet lié de près ou de loin à des associations…).',
						'Dans le cas où le client procède à un paiement anticipé, le montant est déduit\n' +
						'de sa prochaine facture. Si le client ne souhaite pas d’autres services facturés, un\n' +
						'remboursement sera appliqué à la date de fin de tous les contrats liés au client.',
						'Le Prestataire réalise des estimations de temps pour l’accomplissement des\n' +
						'tâches demandées par le client. De fait, le Prestataire assume la livraison du projet sur\n' +
						'la base du MVP, sans surcoût pour le client et en assurant la qualité optimale.',
						'Le Prestataire réalise des estimations approximatives et jugées juste au regard\n' +
						'des besoins exprimés par le client. En cas de défaut d’estimation, le client ne peut\n' +
						'prétendre à un remboursement partiel ou intégral, mais il peut prétendre à la livraison\n' +
						'du projet dès que possible.',
						'La date de livraison peut figurer sur le devis si une date de début de projet a été\n' +
						'acceptée entre le client et le Prestataire. Dans le cas contraire, la date de livraison\n' +
						'correspond à la date de début de projet décidée ultérieurement à la facturation, plus les\n' +
						'jours estimés de travail.',
						'Sauf mention contraire, un service est comptabilisé comme une journée de\n' +
						'travail basé sur le taux journalier moyen (TJM).',
						'Tout litige relatif à l’interprétation ou à l’exécution des présentes CGV sera\n' +
						'soumis en premier lieu à une tentative de médiation entre les parties.',
						'À défaut d’accord amiable, les tribunaux de Limoges seront seuls compétents,\n' +
						'nonobstant pluralité de défendeurs.'
					],
				},

				{
					title: 'Communication et confidentialité',
					texts: [
						'Le client s’engage à ne pas communiquer d’informations internes du prestataire\n' +
						'sauf si un accord dérogatoire est accepté entre les deux partis.',
						'Le prestataire s’engage à ne pas communiquer d’informations internes du\n' +
						'prestataire sauf si un accord dérogatoire est accepté entre les deux partis. Cette clause\n' +
						'n’est pas applicable en cas de besoin commercial du prestataire ou pour la bonne\n' +
						'conduite des prestations envers le client.',
						'Le client s’engage à rester en contact par courriel avec le prestataire. Le courriel\n' +
						'est le seul moyen de communication permettant la transmission de documents, de\n' +
						'demandes client, et d’informations.',
						'Le prestataire peut être joint par téléphone. La garantie de réponse n’est pas\n' +
						'assurée. Le téléphone ne constitue pas un moyen légitime de faire passer des\n' +
						'informations notamment importantes ou des documents.',
						'Un client, sollicité par mail, qui ne répond pas pendant 5 (cinq) jours et qui n’a\n' +
						'pas fait savoir une indisponibilité, peut se voir suspendre ses services associés au projet\n' +
						'dont le mail fait état.',
						'En cas de décision suspensoir de services liés à un manquement dans les\n' +
						'obligations de communication par le client, les montants non-payés restent dus.',
						'Des conditions spécifiques à chaque catégorie de prestation, ou prestation elle-\n' +
						'même, peuvent modifier le caractère suspensoir d’un manque de communication de la\n' +
						'part du client.',

					]
				},
			],
		},
		{
			title: "Hébergement",
			items: [
				{
					title: 'Infrastructure physique',
					texts: [
						'Le prestataire s’engage à la souscription de l’infrastructure indiquée sur la\n' +
						'facture dans un délai de 72 (soixante-douze) heures suivants le règlement de la facture.',
						' En cas d’indisponibilité de l’infrastructure physique, notamment par rupture de\n' +
						'stocks, le prestataire s’engage à en informer immédiatement le client et à trouver une\n' +
						'solution d’infrastructure équivalente ou capable d’accepter le projet sans répercussion\n' +
						'sur les activités du client.',
						'Le client ne peut se soustraire à l’infrastructure minimal d’un serveur de\n' +
						'production et d’un serveur de sauvegarde.',
						'Le prestataire s’engage à commander au maximum, et dans les capacités de\n' +
						'stocks de l’hébergeur, des infrastructures localisées en France.',
						'Le prestataire s’engage à fournir au client les informations concernant\n' +
						'l’hébergeur ainsi que la localisation des infrastructures si la demande en est faite.',
						'Le prestataire héberge par défaut sur des VPS. Le client peut faire la demande\n' +
						'pour être hébergé sur un serveur qui lui est dédié. Le prestataire se réserve le droit de\n' +
						'moduler le prix facturé au client, pour absorber les frais d’infrastructure\n' +
						'complémentaires.',
						'Le prestataire se réserve le droit d’interdire l’accès aux systèmes\n' +
						'd’administration des serveurs d’hébergement à toute personne extérieure à son entité\n' +
						'propre. Est donc bloqué pour toute personne extérieure au prestataire, les accès SSH,\n' +
						'les accès à l’interface web d’administration, l’accès à toute information de connexion.'
					]
				},
				{
					title: 'Installations logicielles',
					texts: [
						'Le prestataire s’engage à l’installation d’outils permettant la surveillance des\n' +
						'serveurs, en termes de sécurité ; activité ; consommation CPU.',
						'Le prestataire s’engage à mettre à jour au moins une fois par mois les outils de\n' +
						'sécurité, système d’exploitation et logiciels majeurs présents sur le serveur, via une\n' +
						'opération transparente aux yeux du client et des utilisateurs.',
						'Le prestataire se réserve le droit d’héberger plusieurs projets d’un même client,\n' +
						'ou les projets de clients multiples sur un même serveur tant que les services hébergés\n' +
						'restent accessibles et fonctionnels.',
					]
				},
				{
					title: 'Adaptation tarifaire',
					texts: [
						'Le prestataire se réserve le droit de modifier les tarifs appliqués dans le cadre\n' +
						'des services d’hébergement, sans nécessité de prévenir le client.',
						'Les modifications de tarifs sont appliqués sur la facture émise à date\n' +
						'd’anniversaire du service d’hébergement.',
					]
				},
				{
					title: 'Suppression de l’hébergement',
					texts: [
						'Le prestataire se réserve le droit de suspendre ou résilier le service\n' +
						'd’hébergement en cas de manquements de la part du client, définis dans la clause\n' +
						'2.4.2.',
						'Est défini comme manquement de la part du client : manque de communication\n' +
						'ou rupture de celle-ci ; accès non-autorisé à un moyen d’administration du service\n' +
						'd’hébergement (administration web, accès SSH, ou piratage) ; hébergement de la même\n' +
						'plateforme par un prestataire tier ; surconsommation excessive des ressources mises à\n' +
						'disposition par le serveur.',
						'Établit que la liste de la clause 2.4.2 n’est pas exhaustive, et est à l’appréciation\n' +
						'du prestataire des motifs non-mentionnés, mais justifiés.',
						'Le client est engagé à payer le service d’hébergement qu’il a souscrit. Ainsi si le\n' +
						'projet fait suite à un projet de développement web ou mobile, le client dispose de 15\n' +
						'(quinze) jours pour payer le montant de la facture sous réserve de coupe voire\n' +
						'suppression de la prestation d’hébergement.',
						'Le client est engagé à payer le service d’hébergement qu’il a souscrit. Ainsi si le\n' +
						'projet d’hébergement ne fait pas suite à un projet de développement ou est une\n' +
						'reconduction d’un service d’hébergement, le client dispose de 5 (cinq) jours pour payer\n' +
						'le montant due. Le prestataire se réserve auquel cas le droit de suspendre ou supprimer\n' +
						'l’hébergement.',
						'Avant suppression d’un service d’hébergement pour cause de non-paiement, le\n' +
						'prestataire s’engage à appliquer une période de 5 (cinq) jours de suspension provisoire\n' +
						'de service.',
						'Durant une suspension provisoire de service, le client en défaut de paiement\n' +
						'peut régler le montant due de la facture et lever automatiquement la suspension ' +
						'provisoire ; ou peut demander l’extraction des données stockées en base de données.\n' +
						'Les sauvegardes ne sont pas incluses dans l’extraction.',
						'En cas de non-paiement suivant la suspension provisoire, le prestataire se\n' +
						'réserve le droit de supprimer le service d’hébergement, incluant la plateforme\n' +
						'hébergée, les données en base de données, les sauvegardes. La suppression est\n' +
						'définitive.',
						'Le prestataire se réserve le droit de supprimer immédiatement le service\n' +
						'd’hébergement, incluant la plateforme hébergée, les données en base de données, les\n' +
						'sauvegardes, en cas de manquement grave de la part du client. La suppression est\n' +
						'définitive et sans avertissement.',
						'Le client peut demander la résiliation d’un service d’hébergement à tout\n' +
						'moment. Le service étant un engagement sur la durée indiquée, le client est sommé de\n' +
						'régler le montant due et indiquée sur la facture.',
					]
				},
				{
					title: 'Nom de domaine',
					texts: [
						'La souscription à un service d’hébergement permet au client de commander un\n' +
						'nom de domaine pour une durée d’un an, ou de transférer un nom de domaine existant\n' +
						'chez l’hébergeur choisi par le prestataire.',
						'Le client a la possibilité de ne pas transférer un nom de domaine vers l’hébergeur\n' +
						'choisi par le prestataire. Dans ce cas le client s’engage à fournir toutes les informations\n' +
						'nécessaires au prestataire pour administrer les configurations du nom de domaine.',
						'Les noms de domaines éligibles pour être commandés sans surplus dans le\n' +
						'service d’hébergement sont : .fr ; .com ; .eu ; .net ; .org.',
						'La commande d’un nom de domaine non-éligible par la clause 2.5.3 ou la\n' +
						'commande de noms de domaine multiples peuvent entrainer une hausse du tarif\n' +
						'appliqué à la prestation.',
						'Le prestataire s’engage, dans la mesure de ses pouvoir d’administration, à\n' +
						'configurer le nom de domaine pour qu’il soit fonctionnel et amène à bonne destination.',
					]
				},
			]
		},
		{
			title: 'Maintenance',
			items: [
				{
					title: 'Périmètre d’intervention',
					texts: [
						'La maintenance est complémentaire au service d’hébergement, et ne peut s’y\n' +
						'soustraire.',
						' La maintenance inclut l’analyse des informations récupérées auprès des\n' +
						'logiciels de surveillance et de sécurité et l’application de contre-mesures en cas de\n' +
						'défaut.',
						'La maintenance inclut également l’installation des mises à jour mineures et de\n' +
						'sécurité dans la version majeure courante des outils exploités par un projet de\n' +
						'développement.',
						'La maintenance n’inclut pas d’opération de développement sur le projet client,\n' +
						'sauf accord contraire, sauf en cas de défaillance bloquante ou critique.',
					]
				},
				{
					title: 'Arrêt de la maintenance',
					texts: [
						'L’arrêt de la prestation d’hébergement couplé au service de maintenance\n' +
						'entraine sans avertissement son arrêt également.'
					]
				}
			]
		},
		{
			title: 'Développement',
			items: [
				{
					title: 'Processus de développement',
					texts: [
						'Le développement est compté par journée. Selon les cas, le prestataire se\n' +
						'réserve le droit d’appliquer le tarif réduit associé au prix total, s’il en existe un, dans le\n' +
						'cas de projets de longue durée.',
						'Le développement est précédé d’une phase de gestion de projet, sauf pour les\n' +
						'développements de très faible durée qui peuvent en être exemptés si les informations\n' +
						'fournies par le client sont sufisantes pour compléter le projet sans encombre.',
						'La gestion de projet inclus la rédaction d’un cahier des charges sur la base des\n' +
						'informations fournies par le client ; un MVP (Minimal Viable Product) basé sur le cahier\n' +
						'des charges ; une documentation de base de données ; un espace sur l’outil JIRA dont\n' +
						'l’accès n’est pas nécessairement fourni au client sauf s’il en fait la demande explicite.',
						'Le MVP est le document qui fait foi concernant le produit à livrer à date\n' +
						'd’échéance.',
						'Le client s’engage à être présent tout au long du cycle de développement, et à\n' +
						'pouvoir être contacté facilement pour son projet.',
						'Le prestataire s’engage à livrer un produit conforme au MVP établi et validé avec\n' +
						'le client.',
						'Le client s’engage à signer la recette de développement, en conséquence le\n' +
						'document attestant de la bonne réalisation du projet.',
					]
				},
				{
					title: 'Propriété intellectuelle',
					texts: [
						'Le code du projet est la propriété intellectuelle du prestataire, tant que la recette\n' +
						'de projet n’a pas été signée.',
						'Dès lors que le client a signé la recette de développement, le code source ainsi\n' +
						'que toutes les ressources média liés à son projet sont transférés à sa propre propriété\n' +
						'intellectuelle.',
						'Sont exemptés du transfert de propriété intellectuelle tous les outils utilisés en\n' +
						'interne au prestataire : applications, programmes, frameworks, codes sources\n' +
						'réemployés à plusieurs projets.',
						'Dès lors que le client possède la propriété intellectuelle sur son projet, celui-ci\n' +
						'est responsable des dommages causés à sa structure : code, contenu, configurations.'
					]
				},
				{
					title: 'Mise en production',
					texts: [
						'La mise en production constitue un service à part, et facturé en conséquence.',
						'La mise en production est à la charge du prestataire, sur l’infrastructure désignée\n' +
						'par le client.',
						'L’infrastructure d’hébergement peut être lié au service d’hébergement proposé\n' +
						'par le prestataire, ou par un tiers.',
						'Dans le cas d’une mise en production chez un tiers, le prestataire n’est pas\n' +
						'responsable en cas de dysfonctionnement, perte de données, incapacité à réaliser la\n' +
						'prestation.',
						'Dans le cas d’une mise en production chez un tiers, il est de la responsabilité du\n' +
						'client de veiller à ce que les configurations de l’infrastructure respectent les besoins du\n' +
						'projet. Il est également à la charge du client de demander les spécificités techniques.',
						'Dans le cas d’une mise en production chez un tiers, il est de la responsabilité du\n' +
						'client de veiller à ce qu’aucun tiers n’interfère avec le travail du prestataire.',
						'Dans le cas d’une mise en production chez un tiers, le prestataire n’est pas\n' +
						'responsable en cas de dommages ou dysfonctionnements du projet liés à une action\n' +
						'd’un tiers.'
					]
				},
				{
					title: 'Arrêt du développement',
					texts: [
						'La livraison est comptabilisé dans l’acompte facturé. En cas de défaut de\n' +
						'paiement, le prestataire se réserve le droit de repousser ou annuler la livraison.',
						'Le développement peut être suspendu ou annulé si le client ne respecte pas son\n' +
						'engagement à être joignable facilement.',
						'Le développement peut être suspendu ou annulé si le client ne fournit pas les\n' +
						'contenus à insérer dans le projet, si cette charge n’a pas été demandée au devis.'
					]
				}
			]
		},
	],
};

/****** END SETTINGS FOR LEGAL SELLER ******/