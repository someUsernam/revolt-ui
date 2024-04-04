export function isObject(value): value is Record<PropertyKey, unknown> {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
