<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const reviews = [
  {
    name: 'Vahe Sargsyan',
    text: 'The coach is a true professional who knows how to motivate and adjust exercises to the level of each participant. The atmosphere in the hall is energizing, you always want to give your best here. After a few sessions, I felt an improvement in physical fitness and increased endurance. I recommend it to anyone who wants to achieve results and get real pleasure from training!"'
  },
  {
    name: 'Olga Andreevna',
    text: 'Doing these sports workouts makes me feel fitter and more energetic, its a great way to keep fit and improve my health. Training helps me relax and relieve stress after a day at work, improves my mood and makes me more positive'
  },
  {
    name: 'Zhanna Evgenievna',
    text: 'Thanks to regular training, I began to notice improvements in my physical fitness and noticeably improved my athletic skills.By doing sports, I learned to manage my time more effectively, gained more discipline and self-control.'
  },
  {
    name: 'Irina Vladimirovna',
    text: 'Sports have become an integral part of my life thanks to training, they stimulate self-development and the achievement of new sports goals. The coaches are very helpful. We have adjusted the regime and nutrition'
  },
  {
    name: 'Irina Vladimirovna',
    text: 'Sports have become an integral part of my life thanks to training, they stimulate self-development and the achievement of new sports goals. The coaches are very helpful. We have adjusted the regime and nutrition'
  },
  {
    name: 'Irina Vladimirovna',
    text: 'Sports have become an integral part of my life thanks to training, they stimulate self-development and the achievement of new sports goals. The coaches are very helpful. We have adjusted the regime and nutrition'
  },
];
</script>

<template>
  <section class="bg-vlada-bordo-200 reviews pb-32">
    <div class="container max-w-8xl mx-auto py-10">
      <Swiper :slides-per-view="1" :space-between="30" :loop="true" :pagination="false" :navigation="false"
        class="mySwiper">
        <SwiperSlide v-for="(review, index) in reviews" :key="index">
          <div class="text-white pb-8 border-b-2 border-vlada-bordo-100">
            <h3 class="text-xl font-semibold mb-4">{{ review.name }}</h3>
            <p class="text-base">{{ review.text }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
}

.swiper-pagination-bullet-active {
  background-color: red;
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
}
</style>
