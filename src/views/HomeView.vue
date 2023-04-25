<script setup>
import { reactive, toRefs, onBeforeMount, computed } from 'vue';
import Card from '../components/Card.vue';
import SearchBar from '../components/SearchBar.vue';
import BeersService from '../services/BeersService.js';
import ScrollTop from '../components/ScrollTop.vue';
import Footer from '../components/Footer.vue';

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

  else return beers.value.filter(beer =>
    beer['name'].toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

</script>

<template>
  <div class="main_container">

    <header class="header">
      <h1 class="header__title">Beers4Me</h1>
      <SearchBar class="header_searchbar" v-model="searchQuery" />
      <a href="https://punkapi.com/" target="_blank" class="header__button"></a>
    </header>

    <div class="wrapper">
      <Card v-for="beer in filteredBeers" :beer="beer" :key="beer.id"></Card>
    </div>

  </div>
  <ScrollTop /> <Footer />
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  z-index: 110;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4%;
  padding-inline: 2%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &__title {
    font-size: 2rem;
    font-family: 'Kaushan Script', cursive;
    color: rgb(237, 158, 55);


  }

  &__button {
    height: 3rem;
    width: 4%;
    background-color: antiquewhite;
    color: #000000;
    border: solid 0.03rem;
    padding: 0.5rem 0.5rem;
    border-radius: 5px;
    text-decoration: none;
    background-image: url("../PunkAPI-logoB&W.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.5s;


    &:hover {
      background-color: burlywood;
      height: 3.5rem;
      border: none;
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