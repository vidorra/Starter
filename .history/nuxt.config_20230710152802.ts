
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
	server: {
		host: 'localhost',
		port: 3000
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
		server: {
			port: 3000, // default: 3000
		}
	}, 
});