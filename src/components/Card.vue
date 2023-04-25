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
			<p class="card__content__date">First brewed in:</p>
			<p class="underline-font"> --- {{ beer['first_brewed'] }} --- </p>
			<p class="card__content__abv">
				Alc. <p class="bold-font"> {{ beer['abv'] }}% </p> vol.
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
	
	&__wrapper {
		position: relative;
		width: 70%;
		height: 100%;
		z-index: 100;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		background-color: antiquewhite;
		border-radius: 1rem;
		border: solid 0.12rem;
		box-shadow: 0 2rem 1.5rem rgba(0, 0, 0, 0.2);
		transition: 1s;
		transition-delay: 0.15s;
	}
	
	&__link {
		position: relative;
		left: 0.5rem;
		top: -4rem;
		width: 3.1rem;
		z-index: 90;
		color: wheat;
		padding: 0.5rem 0.5rem 1.7rem 0.5rem;
		border: solid 0.13rem;
		border-radius: 0 0 0.5rem 0.5rem;
		background-color: brown;
		background-image: url("../assets/img/downArrow.png");
		background-repeat: no-repeat;
		background-size: 1.8rem;
		background-position-y: 2rem;
		background-position-x: 1.2rem;
		transition: ease-out 0.4s;
		.router-link {
			cursor: pointer;
			text-decoration: none;
			color: inherit;
			font-family: 'Kaushan Script', cursive;
		}
		
	}
	&:hover &__link {
		top: -2.3rem;
		transition-delay: 0.6s;
		&:hover {
			top: -0.6rem;
			background-color: crimson;
			transition-delay: 0s;
		}
	}

	&__content {
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		top: 1rem;
		width: 7rem;
		height: 16rem;
		z-index: 90;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-inline: 0.5rem;
		border: solid 0.1rem;
		border-radius: 0 1rem 1rem 0;
		background-color: antiquewhite;
		font-family: 'Voltaire', cursive;
		transition: ease-out 0.6s;
		transition-delay: 0.3s;
		
		&__title {
			padding-top: 10%;
			font-size: 1rem;
			font-weight: 900;
			font-family: 'Kaushan Script', cursive;
		}

		&__abv {
			padding-bottom: 10%;
			display: flex;
		}

		.bold-font {
			font-weight: 600;
		}

		.underline-font {
			text-decoration: underline;
		}

		p {
			margin: 0;
		}
	}

	&:hover &__content {
		left: 70%;
		box-shadow: -0.2rem 1.5rem 1.5rem rgba(0, 0, 0, 0.2);
		background-color: burlywood;
	}

}
</style>