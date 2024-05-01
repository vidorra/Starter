const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./content/**/*.{md,yml,json,yaml,toml,csv}",
		"./app.vue",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#49147b',
				},
				secondary: "#49147b",
				background: "#49147b",
			},
			fontFamily: {
				krub: "'Krub', sans-serif",
				opensans: "'Open Sans', sans-serif",
			},
		},
	},
};






