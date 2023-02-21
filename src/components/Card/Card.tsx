import styles from "./Card.styles";

export interface CardProps {
	/**
	 * What is the title for this card?
	 */
	title: string;
	/**
	 * Add an excerpt for the card
	 */
	description: string;
}

export const Card = ({ title, description }: CardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.spacing}>
				<h2 className={styles.header}>{title}</h2>
				<p className={styles.excerpt}>{description}</p>
			</div>
		</div>
	);
};
