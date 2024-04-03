import "../src/tailwind.css";

import { withThemeByDataAttribute } from "@storybook/addon-themes";

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
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
		dataAttribute: "data-theme",
	}),
];

export default preview;
