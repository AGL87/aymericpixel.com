import {ReactNode} from "react";
import style from './headerComponent.module.css';

export default function HeaderComponent({title, subTitle, children}: Readonly<{
	title?: string;
	subTitle?: string;
	children?: ReactNode;
}>) : ReactNode {
	return (
		<header className={style.headerBlock}>
			{children ? children : (
				<>
					{title && <h1 className={style.headerTitle}>{title}</h1>}
					{subTitle && <h2 className={style.headerSubtitle}>{subTitle}</h2>}
				</>
			)}
		</header>
	)
}