import {LegalUsageText} from "@/aymericpixel/lib/front/legalUsageConfig";

export default function LegalBody({settings}: Readonly<{
	settings: LegalUsageText
}>) {
	return (
		<>
			<div className="legal-page-header">
				<h1 className="legal-page-title">{settings.title}</h1>

				<h2 className="legal-page-last-edition-date">Dernière mise à jour : {settings.lastEditionDate}</h2>
			</div>

			<div className="legal-page-main">
				{
					settings.items.map((item, index) => (
						<div key={index} className="legal-page-item">
							<h3 className="legal-page-item-title">{index+1}) {item.title}</h3>
							<div className="legal-page-item-content">{item.content}</div>
						</div>
					))
				}
			</div>
		</>
	)
}