// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { esbuild } from 'esbuild-wasm/dist/browser'

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
	  build: {
		// Add the esbuild plugin
		plugins: [
		  {
			name: 'esbuild',
			setup(build) {
			  // Add your esbuild configuration here
			}
		  }
		]
	  }
	},
  });
  