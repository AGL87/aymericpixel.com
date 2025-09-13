import {ReactNode} from "react";
import styles from './processBlockComponent.module.css';

export interface ProcessBlockProps {
	identifier: number;
	title: string;
	description: string;
	listOfItems: string[];
}

export default function ProcessBlockComponent({props}: Readonly<{
	props: ProcessBlockProps;
}>) : ReactNode {
	return (
		<div className={styles.processLine}>
			<div className={styles.infoBlock}>
				<strong className={styles.identifier}>{props.identifier}</strong>
			</div>
			<div className={styles.processContent}>
				<h3 className={styles.processTitle}>{props.title}</h3>
				<p className={styles.processDescription}>{props.description}</p>

				<ul className={styles.processList}>
          {props.listOfItems.map((item, index) => (
            <li key={`_${index}`} className={styles.processListItem}><i className={`fi fi-rs-check-circle ${styles.listIcon}`}></i> {item}</li>
          ))}
        </ul>
			</div>
		</div>
	)
}