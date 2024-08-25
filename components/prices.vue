<template>
  <section class="prices bg-vlada-bordo-200 pb-10" id="program">
    <div class="container max-w-8xl mx-auto flex justify-between">
      <div v-for="(program, index) in programs" :key="index"
        :class="['text-white flex flex-col items-start w-full', program.borderClass, program.paddingClass]">
        <h2 class="text-vlada-bordo-100 text-6xl uppercase font-semibold mb-5 font-oswald text-center w-full">{{
          program.title }}</h2>
        <h3 class="text-xl font-extralight uppercase text-center text-white mb-11 w-full" v-html="program.promotion">
        </h3>
        <ul class="mb-10">
          <li v-for="(benefit, bIndex) in program.benefits" :key="bIndex"
            class="flex items-center gap-3 font-light pb-6">
            <img src="/img/ul-elipse.png" alt="ul-elipse">{{ benefit }}
          </li>
        </ul>
        <NuxtLink
          class="cursor-pointer w-full text-center text-black bg-white py-3 text-xl font-oswald px-4 font-medium rounded-full uppercase transition-colors hover:bg-vlada-bordo-100 hover:text-white">
          choose a tariff
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Prices',
  data() {
    return {
      programs: [
        {
          title: 'yoga',
          promotion: 'For the purchase of 10<br> workouts, 3 as a gift',
          benefits: [
            'Improving physical health',
            'Reducing stress and anxiety',
            'Increased concentration and mental clarity',
            'Improving sleep quality',
            'Strengthening discipline and self-discipline',
            'Improvement of respiratory functions',
          ],
          borderClass: '',
          paddingClass: 'pr-10',
        },
        {
          title: 'cardio',
          promotion: 'For the purchase of 10<br> workouts, 5 as a gift',
          benefits: [
            'Improvement of the cardiovascular system',
            'Burning calories',
            'Improving physical endurance',
            'Mood boost',
            'Improving overall health',
            'Increase muscle strength and endurance',
          ],
          borderClass: 'border-x-2 border-vlada-bordo-100',
          paddingClass: 'px-10',
        },
        {
          title: 'strength',
          promotion: 'For the purchase of 10<br> workouts, 10 as a gift',
          benefits: [
            'Increase in muscle mass',
            'Acceleration of metabolism',
            'Strengthening bones',
            'Improved posture',
            'Reducing the risk of injury',
            'Increased stamina and strength',
          ],
          borderClass: '',
          paddingClass: 'pl-10',
        },
      ],
    };
  },
});
</script>
