type CardProps = {
	title: string;
	description: string;
};

export const Card = ({ title, description }: CardProps) => {
	return (
		<div className="max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg">
			<div className="px-6 py-4">
				<h2 className="mb-2 text-xl font-bold">{title}</h2>
				<p className="text-base text-gray-700">{description}</p>
			</div>
		</div>
	);
};
