
export type FaqItem = { question: string; answer: string };

export const echoFaq: FaqItem[] = [
    {
        question: 'Combien de temps prend la création d\'un site Echo ?',
        answer: '72 heures après validation de la maquette graphique. Le délai comprend la conception, le développement et les tests.'
    },
    {
        question: 'Puis-je modifier mon site après sa livraison ?',
        answer: 'Oui, le forfait inclut la maintenance pendant 1 an. Des modifications mineures peuvent être apportées. Pour des changements majeurs, un devis supplémentaire peut être nécessaire.'
    },
    {
        question: 'Qu\'en est-il après la première année d\'hébergement ?',
        answer: 'L\'hébergement et la maintenance se renouvellent à 469€/an. Vous pouvez continuer avec moi ou migrer votre site ailleurs.'
    },
    {
        question: 'Combien d\'allers-retours sont inclus pour la conception ?',
        answer: '2 allers-retours maximum. Cela signifie que vous pouvez demander des modifications jusqu\'à 2 fois avant la validation finale.'
    },
    {
        question: 'Le site est-il responsive et mobile-friendly ?',
        answer: 'Absolument. Tous les sites Echo sont développés avec une approche mobile-first et s\'adaptent parfaitement à tous les appareils.'
    },
    {
        question: 'Quelles pages sont incluses dans Echo ?',
        answer: 'Echo inclut une page d\'accueil, des mentions légales, une page de politique de confidentialité et un formulaire de contact. Vous pouvez ajouter des pages supplémentaires selon vos besoins.'
    },
    {
        question: 'Le site est-il optimisé pour le SEO ?',
        answer: 'Oui, tous les sites Echo sont optimisés pour le SEO avec les meilleures pratiques : balises meta, structure sémantique, sitemap, robots.txt et performance optimisée.'
    },
    {
        question: 'Puis-je avoir un domaine personnalisé ?',
        answer: 'Oui, vous pouvez utiliser votre propre domaine ou en acheter un. Je m\'occupe de la configuration complète pour vous.'
    }
];

export default function EchoFaqJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: echoFaq.map(it => ({
            "@type": "Question",
            name: it.question,
            acceptedAnswer: { "@type": "Answer", text: it.answer }
        }))
    };
    return (
        <script
            id={'__echoFaq__'}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
