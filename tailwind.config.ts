import type { Config } from "tailwindcss"

const config: Config = {
	theme: {
		extend: {
			width: {
				"1/4vw": "calc(100vw / 4)",
				"1/3vw": "calc(100vw / 3)",
			},
		},
	},
}
export default config
