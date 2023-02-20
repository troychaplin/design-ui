import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-actions",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-links",
		{
			name: "@storybook/addon-docs",
			options: {
				configureJSX: true,
				babelOptions: {},
				transcludeMarkdown: true,
			},
		},
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
