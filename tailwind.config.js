/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./stories/**/*.{js,jsx,ts,tsx}",
		"./.storybook/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: ['[data-mode="dark"]'],
	theme: {
		extend: {},
	},
	plugins: [],
};