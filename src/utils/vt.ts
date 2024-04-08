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
