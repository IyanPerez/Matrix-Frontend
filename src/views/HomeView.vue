<script setup>
import { reactive, toRefs, onBeforeMount, onMounted, ref , computed } from 'vue';
import axios from 'axios';
import Card from '../components/Card.vue';
import SearchBar from '../components/SearchBar.vue';
import BeersService from '../services/BeersService.js';

const state = reactive({
  beers: [],
  searchQuery: '',
});

const { beers, searchQuery } = toRefs(state);  

const beersService = new BeersService();

onBeforeMount(async () => {
  await beersService.fetchAllBeers();
  state.beers = beersService.getBeers();
});

const filteredBeers = computed(() => {
  if (!searchQuery.value) return beers.value
  return beers.value.filter(beer => 
    beer['name'].toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

</script>

<template>
  <div class="main_container"> 
    <header class="header">
      <h1 class="header__title">Beers4Me</h1>
      <SearchBar class="header_searchbar" v-model="searchQuery"/>
      <a href="https://punkapi.com/" target="_blank" class="header__button"></a>
    </header>
      <div class="wrapper">
          <Card v-for="beer in filteredBeers" :beer="beer" :key="beer.id"></Card>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/Reset.scss";

  .main_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8%;
    width: 100%;
  }
  
  .header {
    position: fixed; top: 0; left: 0;
    width: 100%;
    height: 15%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4%;
    z-index: 110;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding-inline:2% ;
  
    &__title {
      font-size: 2rem;
      font-family: 'Kaushan Script', cursive;
      color: rgb(237, 158, 55);
      

    }
    &__button {
      height: 7vh;
      width: 4%;
      background-color: antiquewhite;
      color: #000000;
      border: solid 0.03rem;
      padding: 0.5rem 0.5rem;
      border-radius: 5px;
      text-decoration: none;
      background-image: url("../../public/PunkAPI-logoB&W.svg");
      background-size: contain;
		  background-position: center;
		  background-repeat: no-repeat;
      
      
      &:hover {
        background-color: burlywood;
        color: white;
      }
    }
  }
  .wrapper {
    margin-left: 8%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2%;
  }
</style>