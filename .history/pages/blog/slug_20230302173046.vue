
<template>
    <article>
        <h1>{{ service.title }}</h1>
    <p>{{ service.description }}</p>
    <img :src="service.img" :alt="service.alt" />
    <p>service last updated: {{ formatDate(service.updatedAt) }}</p>

    <nuxt-content :document="service" />
    </article>
  </template>

<script>
    export default {
      async asyncData({ $content, params }) {
        const service = await $content('services', params.slug).fetch()
  
        return { service }
      }
    }
  </script>