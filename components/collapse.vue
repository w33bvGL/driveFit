<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  id: string;
  type: 'primary';
  title: string;
  description: string;
  isOpen?: boolean;
}

const props = defineProps<Props>();

const isOpen = ref(props.isOpen);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="accordion w-full">
    <div class=" cursor-pointer text-white p-4 rounded-t-md flex justify-between items-center" @click="toggleAccordion">
      <h3 class="text-2xl font-semibold">{{ props.title }}</h3>
      <span class="text-3xl font-bold">
        <span v-show="isOpen">+</span>
        <span v-show="!isOpen">-</span>
      </span>
    </div>
    <transition name="accordion" mode="out-in">
      <div v-if="isOpen"
        class="p-4 border-t border-vlada-bordo-300 bg-vlada-bordo-300 bg-opacity-30 text-white font-light">
        <p class="opacity-50">{{ props.description }}</p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
