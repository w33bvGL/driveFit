<template>
  <section class="w-full bg-black">
    <div class="container max-w-8xl mx-auto flex justify-between" style="min-height: 672px;">
      <div class="info flex items-start flex-col justify-center">
        <!-- <h1 class="text-white text-6xl uppercase font-medium mb-8"><span class="text-vlada-bordo-100">become</span> the
          <span class="text-vlada-bordo-100">Best</span> <br> <span class="text-vlada-bordo-100">Version</span> of
          yourself
        </h1> -->
        <h1 class="text-white text-6xl uppercase font-semibold mb-8 font-oswald" data-aos="fade-left"
          data-aos-duration="500" data-aos-once="true">become a <span
            class="text-7xl text-vlada-bordo-100 font-oswald">better</span> person <br> than <span
            class="text-7xl text-vlada-bordo-100 font-oswald">you are</span>
        </h1>
        <h3 class="text-white text-xl mb-8" data-aos="fade-left" data-aos-duration="650" data-aos-once="true">Start
          taking care of your health and fitness<br> right now with
          our workouts!</h3>
        <div class="flex items-center relative">
          <div data-aos="fade-up" data-aos-once="true">
            <a href="#purchase"
              class="font-oswald text-2xl text-black bg-white w-auto py-3 px-9 font-medium rounded-full mb-8 uppercase transition-colors hover:bg-vlada-bordo-100  hover:text-white ">join
              now</a>
          </div>
          <img data-aos="fade-left" data-aos-duration="500" data-aos-once="true" src="/img/Arrow 8.png" alt=""
            class="absolute top-[-10px] right-[-80px]">
        </div>
        <!-- <div class="flex gap-9">
          <div>
            <h3 class="font-medium text-white text-2xl mb-2">35 000+</h3>
            <h5 class="text-white text-base">People have been<br> through our training<br> programs</h5>
          </div>
          <div>
            <h3 class="font-medium text-white text-2xl mb-2">200+ reviews</h3>
            <div class=" pointer-events-none select-none">
              <img src="/img/best-yourself-version-users.png" class="h-14"
                alt="Drive fit best users in yourself version programm">
            </div>
          </div>
        </div> -->
      </div>
      <div data-aos="fade-in" data-aos-duration="500"
        class="relative pointer-events-none select-none overflow-y-hidden">
        <img class="absolute" src="/img/fit-woman-measuring-perfect-shape-beautiful-body.png"
          alt="DriveFit fit woman measuring perfect shape beatiful body">
        <img src="/img/fit-woman-measuring-perfect-shape-beautiful-body.png"
          alt="DriveFit fit woman measuring perfect shape beatiful body">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'bestYourslefVersion',
});
</script>
