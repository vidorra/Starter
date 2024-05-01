<template>
	<header class="flex items-center justify-between  px-[5%] lg:px-[15%]">
		<NuxtLink to="/" class="font-bold text-fontcolor flex items-center text-xl lg:text-3xl">
			<img width="80" class="mr-6 my-6" src="../assets/img/logo.svg" /> 
			Wedden met winst
		</NuxtLink>
		<nav class="flex items-center space-x-7 text-fontcolor">
			<template v-for="(n, i) in links" :key="`navLink-${i}`">
				<NuxtLink
					:to="n.link"
					class="inline-block nav-link hover:text-primary group"
				>
					<div class="flex items-center space-x-2">

						<span class="font-normal text-xl"> {{ n.name }}</span>
					</div>
					<div
						class="h-0.5 w-4/5 bg-primary mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all"
					></div>
				</NuxtLink>
			</template>
		</nav>
	</header>
</template>
<script setup>
	const links = [
	{
			name: "Home",
			link: "/", 
		},	
        {
                name: "Value Betting",
                link: "/value-betting",
		},
		{
                name: "Wedstrijdanalyses",
                link: "/wedstrijdanalyses",
		},
		
		{
                name: "Sportsbook",
                link: "/overzicht-sport-betsites ",
		},
		{
                name: "Blogs",
                link: "/Blogs",
		},
	
	];
    const { data: serviceNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("service"));
	});
	useHead({
		title: "Content service",
	});
</script>

