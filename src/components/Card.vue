<script setup>

const props = defineProps({
	beer: Object,
});

</script>

<template>
	<div class="card">
		<div class="card__wrapper" :style="{ 'background-image': `url(${beer['image_url']})` }"></div>

		<div class="card__link">
			<router-link class="router-link" :to="{ name: 'beerDetails', params: { id: beer.id } }">
				Details
			</router-link>



		</div>

		<div class="card__content">
			<p class="card__content__title">{{ beer['name'] }} </p>
			<p class="card__content__tagline">"{{ beer['tagline'] }}" </p>
			<p class="card__content__date">First brewed in:
			<p class="font-underline"> --- {{ beer['first_brewed'] }} --- </p>
			</p>
			<p class="card__content__abv">Alc.
			<p class="bold-font"> {{ beer['abv'] }}</p>
			<p class="bold-font">%</p> vol.
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {

	position: relative;
	width: 12rem;
	height: 18rem;
	margin: 5rem 4.5rem 2rem 1rem;
	
	&:hover &__content {
		left: 70%;
		box-shadow: -0.2rem 1.5rem 1.5rem rgba(0, 0, 0, 0.2);
		background-color: burlywood;
	}

	&:hover &__link {
		top: -2.3rem;
		transition-delay: 0.6s;
		
		&:hover {
			top: -0.6rem;
			transition-delay: 0s;
			background-color: crimson;
		}
	}

	&__link {
		transition: ease-out 0.4s;
		position: relative;
		left: 0.5rem;
		top: -4rem;
		width: 3.1rem;
		z-index: 90;
		overflow: hidden;
		background-color: brown;
		color: wheat;
		padding: 0.5rem 0.5rem 1.7rem 0.5rem;
		border-radius: 0 0 0.5rem 0.5rem;
		border: solid 0.13rem;
		background-image: url("../assets/img/downArrow.png");
		background-size: 1.8rem;
		background-position-y: 2rem;
		background-position-x: 1.2rem;
		background-repeat: no-repeat;

	}

	.router-link {
		cursor: pointer;
		text-decoration: none;
		color: inherit;
		font-family: 'Kaushan Script', cursive;

	}


	&__wrapper {
		position: relative;
		transition-delay: 0.15s;
		transition: 1s;
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
		transition-delay: 0.3s;
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		top: 1rem;
		width: 7rem;
		height: 16rem;
		z-index: 90;
		overflow: hidden;
		background-color: antiquewhite;
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

		&__abv {
			padding-bottom: 10%;
			display: flex;

		}

		.bold-font {
			font-weight: 600;

		}

		.font-underline {
			text-decoration: underline;
		}

		p {
			margin: 0;
		}
	}
}
</style>