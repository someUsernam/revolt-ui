import { isObject } from "./isObject";

export function cx(
	...args: (
		| string
		| boolean
		| Record<string, boolean>
		| Array<string>
		| undefined
	)[]
) {
	let classes = "";
	for (const arg of args) {
		if (typeof arg === "string") {
			classes += `${arg} `;
		} else if (isObject(arg)) {
			for (const key in arg) {
				if (arg[key]) {
					classes += `${key} `;
				}
			}
		} else if (Array.isArray(arg)) {
			for (const item of arg) {
				if (typeof item === "string") {
					classes += `${item} `;
				}
			}
		}
	}

	return classes.trim();
}
