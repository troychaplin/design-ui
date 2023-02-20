// import CodeBrackets from "/assets/code-brackets.svg";

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
		<div className="max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg">
			<div className="px-6 py-4">
				<img src="/assets/code-brackets.svg" alt="my image" />
				<h2 className="mb-2 text-xl font-bold">{title}</h2>
				<p className="text-base text-gray-700">{description}</p>
			</div>
		</div>
	);
};
