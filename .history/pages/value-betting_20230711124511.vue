<template>
    <div class="min-h-screen">
        <Nav />
        <main>
            <section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14">
                <img class="rounded-lg mb-10" src="assets/img/valuebetting.jpg" />

				<div class="grid lg:grid-cols-2 gap-10">
					<div class="auto-cols-max">
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
					 
					<div class="space-y-4 auto-cols-min	">
						<h2 class="text-2xl font-semibold">Latest Blogs</h2>

						<ul class="grid grid-cols-1 gap-5 mb-8 mt-2">
							<template v-for="(blog, i) in flatBlogs.slice(0, 5)">
								<li class="list-item bg-background rounded-xl text-default text-fontcolor font-semibold hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all">
									<div class="px-7 py-5 rounded-lg">
										<NuxtLink :to="`${blog._path}`">
											<img :src="getImageSrc(i)" @error="useDefaultImage" class="mb-4 rounded-md mt-2" alt="Blog Image" />
											{{ blog.title }}
										</NuxtLink>
									</div>
								</li> 
							</template>
						</ul>
						
					</div> 	

				</div>	

				
			</section>
		</main>
	</div> 
</template>

<script setup>
import { computed } from 'vue';
import { onMounted } from 'vue';

let serviceNav = ref(null);

const getImageSrc = (i) => `/assets/img/Blog-${i + 1}.jpg`;

const useDefaultImage = (e) => {
    e.target.src = '/assets/img/default-image-1.jpg';
  }



onMounted(async () => {
  serviceNav.value = await useAsyncData("navigation", async () => {
    const navData = await fetchContentNavigation(queryContent("blogs"));
    return navData;
  });
  console.log("serviceNav :", serviceNav.value);
  console.log(JSON.stringify(serviceNav.value, null, 2));
});



const flatBlogs = computed(() => {
  if (serviceNav.value && serviceNav.value.data[0]) {
    return serviceNav.value.data[0].children.flatMap(b => b.children);
  }
  return []; // fallback to an empty array if serviceNav[0] is not defined
});
useHead({
  title: "Blogs",
});
</script>