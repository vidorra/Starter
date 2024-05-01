<template>
    <div class="min-h-screen">
        <Nav />
        <main>
            <section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14">
                <img class="rounded-lg mb-10" src="assets/img/valuebetting.jpg" />

				<div class="grid lg:grid-cols-2 gap-10">
					<div>
						<h1 class="text-4xl font-bold mb-5">This is the title of the article</h1>
						
						<h2 class="text-3xl font-semibold mb-4">Sub-title</h2>
						<p class="mb-4">
							This is a paragraph which explains a particular detail of the article. It has been mentioned in the sub-title above.
						</p>

						<img class="rounded-lg mb-4" src="assets/img/details1.jpg" />

						<h2 class="text-3xl font-semibold mb-4">Another Sub-title</h2>
						<p class="mb-4">
							Another paragraph in the article which explains a different point. This is mentioned in the sub-title just above.
						</p>

						<img class="rounded-lg mb-4" src="assets/img/details2.jpg" />
					</div>
					<!-- Aside -->
					
					<div class="space-y-4">
						<h2 class="text-2xl font-semibold">Latest Blogs</h2>

						<div
							v-for="(blog, index) in flatBlogs.slice(0, 5)"
							:key="`blog-${index}`"
							class="border-b py-2"
						>
							<NuxtLink :to="`${blog._path}`" class="text-xl text-blue-600 hover:underline">
							{{ blog.title }}
							</NuxtLink>
						</div>
					</div> 	

				</div>	

				
			</section>
		</main>
	</div> 
</template>

<script setup>
import { computed } from 'vue';

const { data: serviceNav } = await useAsyncData("navigation", async () => {
  const navData = await fetchContentNavigation(queryContent("blogs"));
  return navData;
});

const flatBlogs = computed(() => {
  if (serviceNav[0]) { // add this to check if serviceNav[0] is defined
    return serviceNav[0].children.flatMap(b => b.children);
  }
  return []; // fallback to an empty array if serviceNav[0] is not defined
});
useHead({
  title: "Blogs",
});
</script>