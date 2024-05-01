<template>
	<div class="min-h-screen">
		<Nav />
		<main>
			
					<template
						v-for="(b, i) in serviceNav[0].children"
						:key="`serviceNavItem-${b._path}-${i}`"
					>
						<div>
           
                                <NuxtLink  class="text-lg font-semibold primary" :to="b._path" >
                                    {{ b.title }}
                                </NuxtLink>
                         
							<!-- Loop over files inside the content dir -->
							<ul
								v-if="b.children"
								class="grid grid-cols-1 lg:grid-cols-3 gap-5"
							>
                            
								<template
									v-for="(child, k) in b.children"
									:key="`childNav-${child._path}-${k}-${i}`"
								>
									<li
										class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all "
									>
                                    <div class="px-7 py-5 rounded-lg border-2">
										<NuxtLink :to="`service${child._path}`">
											{{ child.title }}
										</NuxtLink>
                                        </div>  
									</li> 
								</template> 
							</ul> 
						</div>
					</template> 
				</div>
			</section>
		</main>
	</div>
</template>


<script setup>
	const { data: serviceNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("service"));
	});
	useHead({
		title: "Blogs",
	});
</script>





<!-- <template>
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
  </script> -->