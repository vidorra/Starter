<template>
	<div class="min-h-screen">
		<Nav />
		<main>
			
            <section class="lg:px-[15%] px-[5%] py-20 bg-default grid grid-cols-1 align-center lg:grid-cols-2 gap-5">
				<div class="container-banner">
                    <h1
					class="lg:text-5xl text-2xl font-notosans text-primary leading-normal font-semibold text-left"
				>
					Check Out all services
				</h1>
                <h5>information</h5> 
                </div>
                <img class="rounded-lg" src="assets/img/betslip.png" /> 

				
			</section>
             <section class="lg:px-[15%] px-[5%] lg:pt-20 lg:pb-20 ">
				<p
					class="text-center uppercase font-medium tracking-wider mb-10 text-gray-500 mb-5"
				> 
				services
				</p>
				<div>
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
		title: "Content Service",
	});
</script>