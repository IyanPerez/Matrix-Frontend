<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  queryValue: String,
});

const emit = defineEmits(["update:queryValue"]);

const searchQuery = ref(props.queryValue);

watch(searchQuery, newValue => {
  emit("update:queryValue", newValue);
});

</script>

<template>
  <input v-model="searchQuery" type="text" placeholder="&#128269 Filter beers...">
</template>

<style scoped>
input {
  width: 40%;
  height: 3rem;
  padding: 0.5rem;
  border: outset 0.1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  transition: 0.2s;
}

input::placeholder {
  font-family: 'Voltaire', sans-serif;
  font-size: 1.1rem;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 1);
  font-family: 'Voltaire', sans-serif;
  height: 3.3rem;
  width: 45%;
}
</style>