<template>
	<div class="min-h-screen">
		<Nav />
		<main>
	
			<section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14">
				<p
					class="text-center uppercase font-medium tracking-wider mb-10 text-gray-500 mb-5"
				>
					Articles test
				</p>
				<div>
					<template
						v-for="(b, i) in serviceNav[0].children"
						:key="`serviceNavItem-${b._path}-${i}`"
					>
						<div>
           
                                <h2 class="text-lg font-semibold text-indigo-600">
                                    {{ b.title }}
                                </h2>
                        
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
										<NuxtLink :to="`${child._path}`">
											{{ child.title }}
										</NuxtLink>
                                        </div>
									</li>
								</template>
							</ul>
							<ul v-else class="list-disc list-inside mt-4 pl-2 space-y-3">
								<li
									class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
								>
									<NuxtLink :to="`/service${b._path}`"> Get Started </NuxtLink>
								</li>
							</ul>
						</div>
					</template>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>
	const { data: articleNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("service"));
	});
	useHead({
		title: "Content Article",
	});
</script>