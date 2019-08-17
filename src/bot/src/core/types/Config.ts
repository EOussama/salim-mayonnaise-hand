/**
 * The type definition of a configuration object
 */
export type Config = {
	channels: {
		general: string,
		salim: string,
	},
	meta: {
		name: string,
		version: string,
	},
	prefix: string,
};
