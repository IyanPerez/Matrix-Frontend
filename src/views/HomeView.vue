<script setup>
import { reactive, toRefs, onMounted, ref , watch , computed } from 'vue';
import axios from 'axios';
import SearchBar from './SearchBar.vue';
import Card from './Card.vue';

const state = reactive({
  beers: [],
  searchQuery: '',
});

const { beers, searchQuery } = toRefs(state);  

onMounted(async () => {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=50');
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
  <div> 
    <h1>Beers4Me</h1>
    <SearchBar v-model="searchQuery"/>

      <Card v-for="beer in filteredBeers" :beer="beer"></Card>

  </div>
</template>