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
    <input v-model="searchQuery" type="text" placeholder="&#128269 Filter beers...      ">
</template>

<style scoped>

input {
  width: 40%;
  height: 7vh;
  border: outset 0.1rem;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  transition: 0.2s;
}

input::placeholder {
  font-family: 'Voltaire', sans-serif;
  font-size: 1.2rem;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 1);
  font-family: 'Voltaire', sans-serif;
  font-size: 1.3rem;
  height: 8vh;
  width: 45%;
}

</style>