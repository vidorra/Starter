<template>
	<div>
		<Nav />
		<main>
			<article
				class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[10%]"
			>
				<ClientOnly>
					<ContentRenderer
						class="prose lg:prose-base prose-sm prose-slate blog-link pr-7 max-w-none"
						:value="service"
					>
						<template #empty>
							<p>No content found.</p>
						</template>
					</ContentRenderer>
				</ClientOnly>
			</article>
		</main>
	</div>
</template>

<script setup>
	const slug = useRoute().params.slug.toString().replace(/,/g, "/");
	const { data: service } = await useAsyncData(slug, () => {
		return queryContent(slug).findOne();
	});

	const toc = computed(() => {
		if (!service.value) return [];
		const items = service.value.excerpt?.children;
		if (!items) return [];
		const toc = [];
		const tags = ["h2", "h3", "h4", "h5", "h6"];
		items.forEach((item) => {
			if (tags.includes(item.tag)) {
				toc.push({
					id: item.props.id,
					title: item.props.id.toString().replace(/-/g, " "),
					depth: Number(item.tag.replace(/h/g, "")),
				});
			}
		});
		return toc;
	});

	useHead({
		title: `${service.value.title}`,
	});
</script>

