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
					DEFAULT: '#FF7A00',
				},
				secondary: "#00FCBE",
				background: "#FAF5EC",
				fontcolor: "#003326",
				fontlightcolor: "#95A9A4",

			},
			fontFamily: {
				lato: "'lato', sans-serif",
			}, 
		},
	},
};


 


 
