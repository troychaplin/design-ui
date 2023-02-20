import "../src/index.css";
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: {
		default: "white",
		values: [
			{
				name: "white",
				value: "#ffffff",
			},
			{
				name: "light grey",
				value: "#f2f2f2",
			},
			{
				name: "dark grey",
				value: "#333333",
			},
			{
				name: "black",
				value: "#000000",
			},
		],
	},
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
