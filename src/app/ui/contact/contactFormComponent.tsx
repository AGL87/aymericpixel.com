import {ReactNode} from "react";
import UiSelectComponent from "@/aymericpixel/app/ui/form/uiSelectComponent";
import style from './contactFormComponent.module.css';

export default function ContactFormComponent() : ReactNode {
	return (
		<form className={style.formContent}>
			<div className={style.formHeader}>
				<h3 className={style.formTitle}>Formulaire de contact</h3>
			</div>

			<div className={style.formLine}>
				<div className={style.formColumn}>
					<label htmlFor="firstname">Prénom *</label>
					<input type="text" id="firstname" name={"firstname"} className={style.field} required />
				</div>
				<div className={style.formColumn}>
					<label htmlFor="lastname">Nom *</label>
					<input type="text" id="lastname" name={"lastname"} className={style.field} required />
				</div>
			</div>

			<div className={style.formLine}>
				<div className={style.formColumn}>
					<label htmlFor="_devType">Type de projet *</label>
					<UiSelectComponent name={"devType"} id={"devType"} options={[{
						label: 'Développement web',
						value: '__web_dev__'
					}, {
						label: 'Développement mobile',
            value: '__mobile_dev__'
					}]} />
				</div>
			</div>

			<div className={style.formLine}>
				<div className={style.formColumn}>
					<label htmlFor="subject">Sujet *</label>
					<input type="text" id="subject" name={"subject"} className={style.field} required />
				</div>
			</div>

			<div className={style.formLine}>
				<div className={style.formColumn}>
					<label htmlFor="project">Description du projet *</label>
					<textarea name="project" id="project" cols={30} rows={10} className={style.field}></textarea>
				</div>
			</div>

			<div className={style.formLine}>
				<button type={'submit'} className={style.submitButton}>
					<i className="fi fi-bs-paper-plane"></i>

					Soumettre ma demande
				</button>
			</div>
		</form>
	)
}