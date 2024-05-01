<template>
	<div class="min-h-screen">
		<Nav />
		<main>
			
            <section class="lg:px-[15%] px-[5%] py-20  grid grid-cols-1 items-center lg:grid-cols-2 gap-5">
				<div class="container-banner flex flex-col items-center justify-start"> 
                    <h1 class="text-6xl font-lato leading-tight text-fontcolor font-bold text-left mb-10 ">
						Ontdek winstgevende <span class="text-secondary">sportweddenschappen</span> strategieën voor succes
				</h1>
                <h5 class="text-2xl font-normal	 leading-snug text-fontlightcolor">
					"Ontdek de kracht van data-analyse en slimme weddenschapsselectie voor stabiel succes in sportweddenschappen. Bereik duurzame winsten door waarde te vinden in de odds en strategisch te wedden."
				</h5> 
		

				<div class="w-full"> 
					<a href="/value-betting" class="bg-primary hover:bg-secondary font-semibold inline-block mt-10 rounded-md text-2xl py-4 px-8 text-white text-xl font-normal">
						Profiteer nu van Value Betting!
					</a>
				</div>

                </div>
                <img class="rounded-lg" src="assets/img/betslip.png" /> 	
			</section>

			<section class="usp lg:px-[15%] rounded-lg border-2 bg-white ">
				<span class="">track record 1.201,55% in slechts 7 maanden</span>
			</section>

             <section class="lg:px-[15%] px-[5%] lg:pt-20 lg:pb-20 ">
				<p class="text-center uppercase font-medium tracking-wider mb-2 text-gray-500 mb-5"> 
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
		title: "Blogs",
	});
</script>