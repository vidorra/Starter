export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
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
	build: {
	  // Enable esbuild
	  esbuild: true,
	},
  });
  