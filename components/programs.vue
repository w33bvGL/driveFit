<template>
  <section class="bg-vlada-bordo-200 text-white relative pt-16 pb-36">
    <div class="flex justify-between items-center container max-w-8xl mx-auto relative">
      <div class="container max-w-8xl mx-auto absolute h-full">
        <div style="width: 2px;" class="h-[125%] bg-vlada-bordo-100 absolute top-0 left-[-80px]"></div>
        <div style="height: 2px;" class="w-[109%] right-0 bg-vlada-bordo-100 absolute bottom-[-80px]"></div>
      </div>
      <div class="w-1/2 relative">
        <h2 class="text-vlada-bordo-100 text-5xl uppercase font-bold mb-5">YOGA PROGRAM</h2>
        <p class="text-lg pb-8 font-extralight">
          Yoga helps to improve physical health, strengthen muscles and flexibility,
          improve coordination and balance. It also helps to improve mental health,
          reduces stress, improves mood, and helps to focus and relax.
        </p>
        <NuxtLink href="#purchase"
          class="text-black bg-white w-auto py-3 px-4 font-medium rounded-full uppercase transition-colors hover:bg-vlada-bordo-100 hover:text-white"
          data-v-inspector="components/bestYourselfVersion.vue:15:9">more detailed</NuxtLink>
      </div>
      <div class="w-1/2 flex justify-end">
        <div class="relative pointer-events-none select-none">
          <img src="/img/programm-1-1.png" alt="Yoga Pose" class="w-full h-auto pr-12 pt-20">

          <img src="/img/programm-1-2.png" alt="Yoga Pose" class="absolute top-0 right-0 w-2/4.5 h-auto">
        </div>
      </div>
    </div>
  </section>
  <section class="bg-vlada-bordo-200 text-white relative pt-16 pb-36">
    <div class="flex justify-between items-center container max-w-8xl mx-auto relative">
      <div class="container max-w-8xl mx-auto absolute h-full">
        <div style="width: 2px;" class="h-[125%] bottom-0 bg-vlada-bordo-100 absolute right-[-80px]"></div>
        <div style="width: 2px;" class="h-[125%] top-0 bg-vlada-bordo-100 absolute right-[-80px]"></div>
        <div style="height: 2px;" class="w-[109%] left-0 bg-vlada-bordo-100 absolute top-[-80px]"></div>
        <div style="height: 2px;" class="w-[109%] -0 bg-vlada-bordo-100 absolute bottom-[-80px]"></div>
      </div>
      <div class="w-1/2 flex justify-start">
        <div class="relative pointer-events-none select-none">
          <img src="/img/programm-2-1.png" alt="Yoga Pose" class="w-full h-auto pl-12 pt-20">

          <img src="/img/programm-2-2.png" alt="Yoga Pose" class="absolute top-0 left-0 w-2/4.5 h-auto">
        </div>
      </div>
      <div class="w-1/2 relative">
        <h2 class="text-vlada-bordo-100 text-5xl uppercase font-bold mb-5">cardio program</h2>
        <p class="text-lg pb-8 font-extralight">
          Cardio helps strengthen the heart and improve blood circulation, which helps reduce the risk of cardiovascular
          disease. Cardio exercises help burn calories and reduce body fat, which helps to reduce weight and keep it
          normal.
        </p>
        <NuxtLink href="#purchase"
          class="text-black bg-white w-auto py-3 px-4 font-medium rounded-full uppercase transition-colors hover:bg-vlada-bordo-100 hover:text-white"
          data-v-inspector="components/bestYourselfVersion.vue:15:9">more detailed</NuxtLink>
      </div>
    </div>
  </section>
  <section class="bg-vlada-bordo-200 text-white relative pt-16 pb-36">
    <div class="flex justify-between items-center container max-w-8xl mx-auto relative">
      <div class="container max-w-8xl mx-auto absolute h-full">
        <div style="width: 2px;" class="h-[125%] bg-vlada-bordo-100 absolute bottom-0 left-[-80px]"></div>
        <div style="height: 2px;" class="w-[109%] right-0 bg-vlada-bordo-100 absolute top-[-80px]"></div>
      </div>
      <div class="w-1/2 relative">
        <h2 class="text-vlada-bordo-100 text-5xl uppercase font-bold mb-5">strength training</h2>
        <p class="text-lg pb-8 font-extralight">
          Strength training helps to increase muscle mass by improving physical strength and endurance. Muscles consume
          more energy even at rest, which helps to burn calories more efficiently and reduce fat mass. Strength training
          accelerates metabolism, which contributes to faster calorie burning.
        </p>
        <NuxtLink href="#purchase"
          class="text-black bg-white w-auto py-3 px-4 font-medium rounded-full uppercase transition-colors hover:bg-vlada-bordo-100 hover:text-white"
          data-v-inspector="components/bestYourselfVersion.vue:15:9">more detailed</NuxtLink>
      </div>
      <div class="w-1/2 flex justify-end">
        <div class="relative pointer-events-none select-none">
          <img src="/img/programm-3-1.png" alt="Yoga Pose" class="w-full h-auto pr-12 pb-20">

          <img src="/img/programm-3-2.png" alt="Yoga Pose" class="absolute bottom-0 right-0 w-2/4.5 h-auto">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'programs',
};
</script>
