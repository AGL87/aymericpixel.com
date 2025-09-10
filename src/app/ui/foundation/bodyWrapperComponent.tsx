import {ReactNode} from "react";
import styles from "./bodyWrapperComponent.module.css";

export default function BodyWrapperComponent({children}: Readonly<{
	children?: ReactNode;
}>) : ReactNode {
	return (
		<main className={styles.wrapper}>
			{children}
		</main>
	)
}