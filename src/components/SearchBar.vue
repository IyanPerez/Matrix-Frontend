<script setup>
  import { defineProps, defineEmits, ref, watch } from "vue";

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
      <input v-model="searchQuery" type="text" placeholder="Filter beers..."/>  
</template>