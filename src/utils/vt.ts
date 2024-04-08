import { cx } from "./cx";

type ClassValue =
	| string
	| boolean
	| Record<string, boolean>
	| Array<string>
	| undefined;

type Config<
	V extends Record<string, string>,
	S extends Record<string, string>,
	T extends Record<string, string>,
> = {
	variants?: V;
	sizes?: S;
	states?: T;
};

type Props = {
	variant?: string;
	size?: string;
	[key: string]: boolean | string | undefined;
};

type OmitUndefined<T> = {
	[P in keyof T]: NonNullable<T[P]>;
};

export function vt<
	V extends Record<string, string>,
	S extends Record<string, string>,
	T extends Record<string, string>,
>(
	base: ClassValue,
	config: Config<V, S, T>,
): (props: OmitUndefined<Props>) => string {
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
