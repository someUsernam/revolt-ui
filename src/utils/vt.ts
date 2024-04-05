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
};

export function vt(base: ClassValue, config: Config = {}) {
	return (props: Props) => {
		let classes = "";
		if (base) {
			classes += `${cx(base)} `;
		}

		if (config.variants && props.variant && config.variants[props.variant]) {
			classes += `${config.variants[props.variant]} `;
		}

		if (config.sizes && props.size && config.sizes[props.size]) {
			classes += `${config.sizes[props.size]} `;
		}

		if (config.states) {
			for (const state in config.states) {
				if (props[state]) {
					classes += `${config.states[state]} `;
				}
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
//   const classes = button({ variant: 'primary', size: 'lg'})
//   return <button className={classes}>Click me</button>
// }
