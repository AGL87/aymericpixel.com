import {LegalSection, LegalUsageItem, LegalUsageText} from "@/aymericpixel/lib/front/legalUsageConfig";

export default function LegalBody({settings}: Readonly<{
	settings: LegalUsageText
}>) {
	return (
		<>
			<div className="legal-page-header">
				<h1 className="legal-page-title">{settings.title}</h1>

				<h2 className="legal-page-last-edition-date">Dernière mise à jour : {settings.lastEditionDate}</h2>
			</div>

			{settings.preamble && (
				<div className="legal-page-preamble">
          <p className="legal-page-preamble-content">{settings.preamble}</p>
        </div>
			)}

			<div className="legal-page-main">
				{settings.items.map((item, index) => {
					const isSection = 'items' in item;

					if (isSection) {
						const section = item as LegalSection;
						return (
							<div key={index} className="legal-page-section">
								<h2 className="legal-page-section-title">{index + 1}) {section.title}</h2>
								{section.items.map((subItem, subIndex) => (
									<div key={`${index}-${subIndex}`} className="legal-page-item">
										<h3 className="legal-page-item-title">{index+1}.{subIndex + 1}. {subItem.title}</h3>

										{subItem.texts.map((text, textIndex) => (
											<div
												className="legal-page-item-content"
												key={`_${index}-${subIndex}-${textIndex}`}
											>
												{`${index + 1}.${subIndex + 1}.${textIndex + 1} - `}
												{text.split('<br/>').map((part, i) => (
													<span key={i}>
      {part}
														{i < text.split('<br/>').length - 1 && <br />}
    </span>
												))}
											</div>
										))}
									</div>
								))}
							</div>
						);
					} else {
						const usageItem = item as LegalUsageItem;
						return (
							<div key={index} className="legal-page-item">
								<h3 className="legal-page-item-title">{index + 1}) {usageItem.title}</h3>
								{usageItem.texts.map((text, textIndex) => (
									<div
										className="legal-page-item-content"
										key={`_${index}-${textIndex}`}
									>
										{text.split('<br/>').map((part, i) => (
											<span key={i}>{part}
												{i < text.split('<br/>').length - 1 && <br />}
                      </span>
										))}
									</div>
								))}
							</div>
						);
					}
				})}
			</div>
		</>
	)
}