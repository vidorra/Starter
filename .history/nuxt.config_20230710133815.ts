
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
	server: {
		port: 3000, 
	  },
	content: {
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3,
			},
		},
		highlight: {
			theme: "dracula-soft",
		},
	},
});