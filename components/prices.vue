<template>
  <section class="prices bg-vlada-bordo-200 pb-10" id="program">
    <div class="container max-w-8xl mx-auto flex justify-between">
      <div class="text-white flex flex-col items-start w-full pr-10">
        <h2 class="text-vlada-bordo-100 text-5xl uppercase font-bold mb-5 mt-10">yoga</h2>
        <h3 class="text-xl font-extralight uppercase text-left text-white mb-11">For the purchase of 10<br> workouts, 3 as a
          gift</h3>
        <ul class="mb-10">
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Improving
            physical health</li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Reducing
            stress and anxiety</li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Increased
            concentration and mental clarity</li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Improving
            sleep quality</li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png"
              alt="ul-elipse">Strengthening discipline and self-discipline</li>
          <li class="flex items-center gap-3 font-light"><img src="/img/ul-elipse.png" alt="ul-elipse">Improvement of
            respiratory functions</li>
        </ul>
        <NuxtLink
          class="cursor-pointer w-full text-center text-black bg-white py-3 px-4 font-medium rounded-full uppercase transition-colors hover:bg-vlada-bordo-100 hover:text-white">
          choose a tariff</NuxtLink>
      </div>
      <div class="text-white flex flex-col items-start px-10 border-x-2 border-vlada-bordo-100 w-full">
        <h2 class="text-vlada-bordo-100 text-5xl uppercase font-bold mb-5 mt-10">cardio</h2>
        <h3 class="text-xl font-extralight uppercase text-left text-white mb-11">For the purchase of 10<br> workouts, 5 as a
          gift</h3>
        <ul class="mb-10">
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Improvement
            of the cardiovascular system
          </li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Burning
            calories
          </li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Improving
            physical endurance
          </li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Mood boost
          </li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Improving
            overall health
          </li>
          <li class="flex items-center gap-3 font-light"><img src="/img/ul-elipse.png" alt="ul-elipse">IIncrease muscle
            strength and endurance</li>
        </ul>
        <NuxtLink
          class="cursor-pointer w-full text-center text-black bg-white py-3 px-4 font-medium rounded-full uppercase transition-colors hover:bg-vlada-bordo-100 hover:text-white">
          choose a tariff</NuxtLink>
      </div>
      <div class="text-white flex flex-col items-start w-full pl-10">
        <h2 class="text-vlada-bordo-100 text-5xl uppercase font-bold mb-5 mt-10">strength</h2>
        <h3 class="text-xl font-extralight uppercase text-left text-white mb-11">For the purchase of 10<br> workouts, 10 as a
          gift</h3>
        <ul class="mb-10">
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Increase in
            muscle mass</li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Acceleration
            of metabolism</li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png"
              alt="ul-elipse">Strengthening bones
          </li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Improved
            posture
          </li>
          <li class="flex items-center gap-3 font-light pb-4"><img src="/img/ul-elipse.png" alt="ul-elipse">Reducing the
            risk of injury</li>
          <li class="flex items-center gap-3 font-light"><img src="/img/ul-elipse.png" alt="ul-elipse">Increased stamina
            and strength</li>
        </ul>
        <NuxtLink
          class="cursor-pointer w-full text-center text-black bg-white py-3 px-4 font-medium rounded-full uppercase transition-colors hover:bg-vlada-bordo-100 hover:text-white">
          choose a tariff</NuxtLink>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'prices',
})
</script>
