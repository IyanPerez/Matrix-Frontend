<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const beer = ref(null);

const props=defineProps({
  id: Number,
})

onMounted(async () => {
  const response = await axios.get(`https://api.punkapi.com/v2/beers?ids/${props.id}`);
  beer.value = response.data[0];
});

</script>

<template>
  <div>
    <h1>prueba</h1>
    {{ beer }}
  </div>
</template>



<!-- <template>
  <div>
    <h1>{{ beer.name }}</h1>
    <h1>prueba</h1>
    <p v-if="beer.tagline">{{ beer.tagline }}</p>
    <img :src="beer.image_url" :alt="beer.name" />
    <p v-if="beer.description">{{ beer.description }}</p>
  </div>
</template> -->
