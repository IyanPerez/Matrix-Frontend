<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    beer: Object,
  });

  let showText = false;
</script>

<template>
	<div class="card">
	  <div class="card__wrapper" :style="{ 'background-image': `url(${beer['image_url']})` }">
	  </div>
	  <div class="card__content">
		<p class="card__content__title">{{ beer['name'] }}</p>
		<p class="card__content__description">{{ beer['description'] }}</p>
	  </div>
	</div>
  </template>

<style lang="scss">
  .card {
	position: relative;
    width: 12rem;
    height: 18rem;
    margin: 2rem 4.5rem 1rem 1rem;
	&:hover &__content{
		left: 70%;
		box-shadow: -0.2rem 1.5rem 1.5rem rgba(0, 0, 0, 0.2);
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
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		top: 1rem;
		width: 7rem;
		height: 16rem;
		z-index: 90;
		transition: 0.4s;
		overflow:hidden ;
		background-color: burlywood;
		padding-inline: 0.5rem;
		border-radius: 0 1rem 1rem 0;
		border: solid 0.1rem;
		/* 		display: flex;
		flex-direction: column;
		justify-content: space-around; */

		&__title {
			font-size: 16px;
			font-weight: 700;
      }
	  
    }
  }
</style>