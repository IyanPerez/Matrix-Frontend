<script setup>

const props = defineProps({
	beer: Object,
});

</script>

<template>
	<div class="card">
		<div class="card__wrapper" :style="{ 'background-image': `url(${beer['image_url']})` }"></div>
		<div class="card__content">
				<p class="card__content__title">{{ beer['name'] }} </p>
				<p class="card__content__tagline">"{{ beer['tagline'] }}" </p>
				<p class="card__content__date">First brewed in:
				<p class="font-underline"> --- {{ beer['first_brewed'] }} --- </p>
			</p>
			<p class="card__content__abv">Alc.
				<p class="bold-font"> {{ beer['abv'] }}</p> %vol.
			</p>
		</div>
	</div>
<!-- 	<button>
		<router-link style="text-decoration: none; color: inherit;" :to="{ name: 'beerDetails', params: { id: beer.id } }">
		more
		</router-link>
	</button> -->
</template>

<style lang="scss" scoped>
.card {
	position: relative;
	width: 12rem;
	height: 18rem;
	margin: 2rem 4.5rem 1rem 1rem;

	&:hover &__content {
		left: 65%;
		box-shadow: -0.2rem 1.5rem 1.5rem rgba(0, 0, 0, 0.2);


	}

	&:hover &__wrapper {
		right: 5%;
	}


	&__wrapper {
		position: relative;
		z-index: 100;
		width: 70%;
		height: 100%;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		background-color: antiquewhite;
		border-radius: 1rem;
		border: solid 0.12rem;
		box-shadow: 0 2rem 1.5rem rgba(0, 0, 0, 0.2);

	}

	&__content {
		transition: ease-out 0.6s;
		transition-delay: 0.2s;
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		top: 1rem;
		width: 7rem;
		height: 16rem;
		z-index: 90;
		overflow: hidden;
		background-color: burlywood;
		padding-inline: 0.5rem;
		border-radius: 0 1rem 1rem 0;
		border: solid 0.1rem;
		font-family: 'Voltaire', cursive;
		display: flex;
		justify-content: space-between;
		flex-direction: column;

		&__title {
			font-size: 1rem;
			font-weight: 900;
			font-family: 'Kaushan Script', cursive;
			padding-top: 10%;

		}

		&__date {}

		&__abv {
			padding-bottom: 10%;
			display: flex;

		}

		p {
			margin: 0;
		}

		.bold-font {
			font-weight: 600;

		}

		.font-underline {
			text-decoration: underline;
		}
	}
}</style>