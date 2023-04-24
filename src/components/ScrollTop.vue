
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const show = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  show.value = window.scrollY >= 200;
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollStyle = computed(() => ({
  show: {
    transform: show.value ? 'translateX(0)' : 'translateX(500%)',
    transition: '0.5s ease-in-out',
    position: 'fixed',
    bottom: '0.5rem',
    right: '1.5rem',
    zIndex: 999,
  }
}));

</script>

<template>
  <div class="scroll-top" :style="scrollStyle.show">
    <button @click="scrollTop">
    </button>
  </div>
</template>

<style lang="scss" scoped>
.scroll-top button {
  background: transparent;
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  cursor: pointer;
  background-image: url("../assets/img/topArrow.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    width: 4.2rem;
    height: 4.2rem;
    transition: 0.3s ease-in-out;
  }
}

</style>