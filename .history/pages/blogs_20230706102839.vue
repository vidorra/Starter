<template>
	<div class="min-h-screen">
		<Nav />
		<main>
            <section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14">
            <h1>service Posts</h1>
            <ul>
                <li v-for="service of services" :key="service.slug">
                <NuxtLink :to="{ name: 'service-slug', params: { slug: service.slug } }">
                    <img :src="service.img" />
                    <div>
                    <h2>MOI {{ service.title }}</h2>
                    <p>by {{ service.author.name }}</p>
                    <p>{{ service.description }}</p>
                    </div>
                </NuxtLink>
                </li>
            </ul> 
        </section>
        </main> 
    </div>        
  </template>

<script>
    export default {
      async asyncData({ $content, params }) {
        const services = await $content('services')
          .only(['title', 'description', 'img', 'slug', 'author'])
          .fetch()
  
        return {
          services
        }
      }
    }
  </script>