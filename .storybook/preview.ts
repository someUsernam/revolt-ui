import "../src/tailwind.css";

import { Preview } from "@storybook/react";

import { withThemeByDataAttribute } from "@storybook/addon-themes";

// /** @type { import('@storybook/react').Preview } */
const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		layout: "centered",
	},
};

export const decorators = [
	withThemeByDataAttribute({
		themes: {
			// nameOfTheme: 'dataAttributeForTheme',
			light: "",
			dark: "dark",
		},
		defaultTheme: "light",
		attributeName: "data-mode",
	}),
];

export default preview;
