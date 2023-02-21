import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-actions",
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
		{
			name: "@storybook/addon-essentials",
			options: {
				outline: false,
				toolbars: false,
			},
		},
	],
	staticDirs: ["../public"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
