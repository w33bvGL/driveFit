<template>
  <section class="team bg-vlada-bordo-200 pb-10">
    <div class="container mx-auto max-w-8xl">
      <h2 class="text-vlada-bordo-100 text-5xl uppercase font-bold pb-5 pt-32 text-center">Our team</h2>
      <h3 class="text-lg pb-8 font-extralight text-white text-center">
        Our coaches are just incredible professionals! Each workout is a boost of energy, motivation, and a great mood.
        An<br>individual approach to everyone, attention to detail, and a sincere desire to help achieve their goals —
        that's what<br>makes them unique.
      </h3>
      <div class="w-full">
        <div class="w-full flex justify-between">
          <div v-for="(trainer, index) in trainers" :key="index" class="relative group">
            <div class="relative overflow-hidden rounded-full">
              <img :src="trainer.image" :alt="trainer.name" class="group-hover:scale-110 transition-transform">
              <div class="border-vlada-bordo-100 absolute top-0 w-full h-full border-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              </div>
            </div>
            <p class="text-center uppercase text-xl mt-3 text-vlada-bordo-100 group-hover:font-semibold transition-all">{{ trainer.name }}</p>
            <p class="text-center font-extralight text-white">{{ trainer.profession }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Team',
  data() {
    return {
      trainers: [
        { name: 'Kevin Smith', profession: 'Universal trainer', image: '/img/trainer-1.png' },
        { name: 'FRED DEVIS', profession: 'Strength Training Coach', image: '/img/trainer-2.png' },
        { name: 'SUSAN BROWN', profession: 'Yoga Coach', image: '/img/trainer-3.png' },
        { name: 'SANDRA MILLER', profession: 'Cardio Coach', image: '/img/trainer-4.png' },
      ],
    };
  },
});
</script>
