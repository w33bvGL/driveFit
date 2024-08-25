<template>
  <section class="advantages bg-black">
    <div class="container mx-auto max-w-8xl py-12 flex gap-10 justify-between">
      <div v-for="(advantage, index) in advantages" :key="index" class="text-white flex flex-col items-start">
        <img :src="advantage.src" :alt="advantage.alt" class="mb-3 h-20 pointer-events-none select-none"></img>
        <h3 class="font-oswald text-2xl font-semibold uppercase text-left text-white mb-1">
          {{ advantage.title }}
        </h3>
        <p class="text-white text-lg" v-html="advantage.description"></p>
        <hr class="w-full border-vlada-bordo-100 border-1 rounded-sm mt-2">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'advantages',
  data() {
    return {
      advantages: [
        {
          format: "webp",
          loading: "lazy",
          src: "/img/advantages-1.png",
          alt: "We will adjust your diet drinking regime and sleep",
          title: "Drinking regime",
          description: "We will adjust your diet<br> drinking regime and sleep",
        },
        {
          format: "webp",
          loading: "lazy",
          src: "/img/advantages-2.png",
          alt: "We have a million good reviews and the results",
          title: "Quality",
          description: "We have a million good<br> reviews and the results",
        },
        {
          format: "webp",
          loading: "lazy",
          src: "/img/advantages-3.png",
          alt: "We have a million good reviews and the results",
          title: "Victory",
          description: "We have a million good<br> reviews and the results",
        },
        {
          format: "webp",
          loading: "lazy",
          src: "/img/advantages-4.png",
          alt: "Our trainers will select training sessions for you",
          title: "Training",
          description: "Our trainers will select<br> training sessions for you",
        },
      ],
    };
  },
})
</script>
