<script setup>
import { reactive, toRefs, onMounted, ref , watch , computed } from 'vue';
import axios from 'axios';
import Card from '../components/Card.vue';
import SearchBar from '../components/SearchBar.vue';


const state = reactive({
  beers: [],
  searchQuery: '',
});

const { beers, searchQuery } = toRefs(state);  

onMounted(async () => {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80');
    state.beers = response.data;
  } catch (error) {
    console.error(error); 
  }
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
      <h1 class="header__title">Beers 4 Me</h1>
      <SearchBar class="header_searchbar" v-model="searchQuery"/>
      <a href="https://punkapi.com/" target="_blank" class="header__button">Punk API</a>
    </header>
      <div class="wrapper">
        <Card v-for="beer in filteredBeers" :beer="beer"></Card>
      </div>
  </div>
</template>

<style lang="scss" scoped>
  .main_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
  }

  .header {
    position: fixed; top: 0; left: 0;
    width: 100%;
    height: 12vh;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 110;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
    &__title {
      font-size: 2rem;
      margin: 0;
    }
  
    &__button {
      background-color: aqua;
      color: #000000;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      text-decoration: none;
  
      &:hover {
        background-color: teal;
        color: white;
      }
    }
  }
  .wrapper {
    margin-left: 6rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    
  }
</style>