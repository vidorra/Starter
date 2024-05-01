<template>
	<div class="min-h-screen">
		<Nav />
		<main>
			
            <section class="lg:px-[15%] px-[5%] py-20  grid grid-cols-1 items-center lg:grid-cols-2 gap-5">
				<div class="container-banner flex flex-col items-center justify-start"> 
                    <h1 class="text-6xl font-lato leading-tight text-fontcolor font-bold text-left mb-10 ">
						Ontdek winstgevende <span class="text-secondary">sportweddenschappen</span> strategieën voor succes
				</h1>
                <h5 class="text-xl font-normal	mb-10 leading-snug text-fontcolor r">
					"Ontdek de kracht van data-analyse en slimme weddenschapsselectie voor stabiel succes in sportweddenschappen. Bereik duurzame winsten door waarde te vinden in de odds en strategisch te wedden."
				</h5> 
		

				<div class="w-full"> 
					<a href="/value-betting" class="bg-primary hover:bg-secondary font-semibold inline-block mt-10 rounded-xl text-2xl py-4 px-8 text-white text-xl font-normal">
						Profiteer nu van Value Betting!
					</a>
				</div>

                </div>
                <img class="rounded-lg" src="assets/img/betslip.png" /> 	
			</section>

			<section class="usp lg:px-[15%]  ">
				<div class="  flex flex-row grid grid-cols-3 items-center lg:grid-cols-3 gap-10">
					<div class="text-fontcolor bg-white rounded-2xl	  px-4 py-6  text-xl font-semibold flex flex-col items-center">  
						<img class="w-12 mb-4" src="assets/img/chip.png" /> 	
						Bewezen resultaten
						<span class="text-primary font-normal text-base mt-2">
							Rendement van 1.201,55% in slechts 7 maanden tijd.
						</span>
					</div>
					<div class="text-fontcolor bg-white rounded-2xl	  px-4 py-6  text-xl font-semibold flex flex-col items-center">  
						<img class="w-12 mb-4" src="assets/img/chip.png" /> 	
						Gratis strategieën en tips
						<span class="text-primary font-normal text-base mt-2">
							Van een handleiding tot video links
						</span>
					</div>
					<div class="text-fontcolor bg-white rounded-2xl	  px-4 py-6  text-xl font-semibold flex flex-col items-center">  
						<img class="w-12 mb-4" src="assets/img/chip.png" /> 	
						Duurzame winstgevendheid
						<span class="text-primary font-normal text-base mt-2">
							Balans tussen risico en rendement
						</span>
					</div>

				</div>
			</section>

			<section class="lg:px-[20%] px-[5%] py-20  flex items-center ">
				<div class="container-banner grow mr-20 items-center justify-start"> 
                    <h5 class="text-primary text-2xl">
						Data gedreven
					</h5>
					<h3 class="text-4xl font-lato w-full leading-tight text-fontcolor font-bold  text-left mb-10 ">
						Wedstrijdanalyse methode <br/> voor voetbalwedstrijden
					</h3>
                <h5 class="text-xl font-normal	mb-10 leading-snug text-fontcolor">
					Ontdek onze effectieve methode voor wedstrijdanalyses. We kijken naar de laatste 8 resultaten van de betrokken teams, met speciale aandacht voor het verschil tussen uit- en thuisresultaten, de vorm van de teams en hun rangschikking op de competitietabel.
					<br/><br/>
					Door deze gestructureerde aanpak kun je trends identificeren, sterke en zwakke punten ontdekken en waardevol inzicht krijgen in de prestaties van de teams. Leer hoe je deze methode kunt toepassen om weloverwogen beslissingen te nemen en je kansen op succesvolle sportweddenschappen te vergroten.				
				</h5> 
				<a href="/wedstrijdanalyse" class="underline text-xl text-primary hover:font-semibold hover:no-underline	">
					Lees meer >
				</a>
		

                </div>
                <img class="rounded-2xl	 w-2/5" src="assets/img/home-1.jpg" /> 	
			</section>

             <section class="lg:px-[15%] px-[5%] lg:pt-20 lg:pb-20 ">
				<h5 class="text-primary text-2xl">
						Onze succesverhalen en ervaringen
					</h5>
					<h3 class="text-4xl font-lato w-full leading-tight text-fontcolor font-bold  text-left mb-10 ">
						Blogs
					</h3>
				<div>  
					<template
						v-for="(b, i) in serviceNav[0].children"
						:key="`serviceNavItem-${b._path}-${i}`"
					>
						<div>
           
							<NuxtLink :to="`/${b._path}`" class="text-lg mb-4 font-semibold primary">
								{{ b.title }}
							</NuxtLink>

							<ul v-if="b.children" class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8 mt-2">
							<template v-for="(child, k) in b.children" :key="`childNav-${child._path}-${k}-${i}`">
							<li class="list-item bg-background rounded-xl text-default text-fontcolor font-semibold hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all">
								<div class="px-7 py-5 rounded-lg">
								<NuxtLink :to="`${child._path}`">
									<img :src="getChildImage(child)" class="mb-4" alt="Blog Image" />
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
    return fetchContentNavigation(queryContent("blogs"));
  });
  
  useHead({
    title: "Blogs",
  });

  const getChildImage = (child) => {
  console.log('Front Matter:', child.frontMatter);
  
  if (child.frontMatter && child.frontMatter.image) {
    // Assuming the image path is relative to the current component
    // Adjust the path according to your project structure if needed
    return require(`../assets${child.frontMatter.image}`);
  }

  // Default image URL if no image is specified
  return require('../assets/img/default-image-1.jpg');
};

</script>