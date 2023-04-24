<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const beer = ref([]);

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
});

onMounted(async () => {
  const response = await axios.get(
    `https://api.punkapi.com/v2/beers/${props.id}`
  );
  beer.value = response.data[0];
});

</script>

<template>
  <div>
    <h1>Vista de detalle de {{ beer["name"] }}</h1>
    <p>Beer desciption {{ beer["description"] }}</p>
    <!-- {{ beer }} -->
  </div>
</template>


