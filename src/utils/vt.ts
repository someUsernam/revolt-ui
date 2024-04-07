import { cx } from "./cx";

type ClassValue =
	| string
	| boolean
	| Record<string, boolean>
	| Array<string>
	| undefined;

type Config = {
	variants?: Record<string, string>;
	sizes?: Record<string, string>;
	states?: Record<string, string>;
};

type Props = {
	variant?: string;
	size?: string;
	[key: string]: boolean | string | undefined;
};

export function vt(base: ClassValue, config: Config = {}) {
	return ({ variant, size, ...states }: Props) => {
		let classes = "";
		if (base) {
			classes += `${cx(base)} `;
		}

		if (config.variants && variant && config.variants[variant]) {
			classes += `${config.variants[variant]} `;
		}

		if (config.sizes && size && config.sizes[size]) {
			classes += `${config.sizes[size]} `;
		}

		for (const state in states) {
			if (config.states && states[state] && config.states[state]) {
				classes += `${config.states[state]} `;
			}
		}

		return classes.trim();
	};
}

// Usage:
// const button = vt('font-bold p-3',{
//   variants: {
//     primary: 'bg-blue-500 text-white',
//     secondary: 'bg-gray-300 text-gray-800',
//   },
//   sizes: {
//     sm: 'text-sm',
//     md: 'text-md',
//     lg: 'text-lg',
//   },
//   states: {
//     hover: 'hover:bg-blue-600',
//     active: 'active:bg-blue-700',
//     focus: 'focus:ring-2 focus:ring-blue-500',
//     disabled: 'opacity-50 shadow-none',
//   },
// } )

// const Button = (props) => {
//   const classes = button({ variant: 'primary', size: 'lg', disabled: true, hover: true, focus: true, active: true, isButton: true})
//   return <button className={classes}>Click me</button>
// }
