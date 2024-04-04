export function cx(...args: unknown[]) {
	let classes = "";
	for (const arg of args) {
		if (typeof arg === "string") {
			classes += `${arg} `;
		} else if (typeof arg === "object" && !Array.isArray(arg) && arg !== null) {
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

	return classes;
}
