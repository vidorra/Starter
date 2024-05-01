// https://v3.nuxtjs.org/api/configuration/nuxt.config
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
	  extend(config, { isDev, isClient }) {
		// Add a loader for .node files
		config.module.rules.push({
		  test: /\.node$/,
		  use: 'node-loader',
		});
	  },
	},
  });
  