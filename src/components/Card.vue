<script setup>
	const props = defineProps({
		beer: Object,
	});

</script>

<template>
	<div class="card">
<!-- 		<img
			class="card__img"
			:src="beer['image']"
		/> -->
		<p class="card__title">{{ beer['name'] }}</p>

	</div>
</template>

<style lang="scss">

</style>