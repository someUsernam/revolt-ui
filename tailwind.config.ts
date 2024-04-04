import { Config } from "tailwindcss";

export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./stories/**/*.{js,jsx,ts,tsx}",
		"./.storybook/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: ["selector", '[data-mode="dark"]'],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;
