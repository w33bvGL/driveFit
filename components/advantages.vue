<template>
  <section class="advantages bg-black">
    <div class="container mx-auto max-w-8xl py-12 flex gap-10 justify-between">
      <div v-for="(advantage, index) in advantages" :key="index" class="text-white flex flex-col items-start">
        <NuxtImg :format="advantage.format" :loading="advantage.loading" :src="advantage.src" :alt="advantage.alt"
          class="mb-3 h-20 pointer-events-none select-none"></NuxtImg>
        <h3 class="text-xl font-medium uppercase text-left text-white mb-3">
          {{ advantage.title }}
        </h3>
        <p class="font-light text-white text-sm" v-html="advantage.description"></p>
        <hr class="w-2/3 border-vlada-bordo-100 border-2 rounded-sm mt-7">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      advantages: [
        {
          format: "webp",
          loading: "lazy",
          src: "/img/advantages-1.png",
          alt: "Our professional trainers will help you to adjust your drinking regime and nutrition",
          title: "Drinking regime",
          description: "Our professional trainers will help you to<br> adjust your drinking regime and nutrition",
        },
        {
          format: "webp",
          loading: "lazy",
          src: "/img/advantages-2.png",
          alt: "Our professional trainers will help you to adjust your drinking regime and nutrition",
          title: "Quality",
          description: "We have a million good reviews, which<br> speaks about the quality of training",
        },
        {
          format: "webp",
          loading: "lazy",
          src: "/img/advantages-3.png",
          alt: "Our professional trainers will help you to adjust your drinking regime and nutrition",
          title: "Victory",
          description: "With us, you will feel like a winner and<br> improve your body",
        },
        {
          format: "webp",
          loading: "lazy",
          src: "/img/advantages-4.png",
          alt: "Our professional trainers will help you to adjust your drinking regime and nutrition",
          title: "Training",
          description: "Our trainers will select individual training<br> sessions for you",
        },
      ],
    };
  },
})
</script>
