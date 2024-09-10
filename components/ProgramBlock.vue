<template>
  <section class="bg-vlada-bordo-200 text-white relative pt-16 pb-44">
    <div class="flex justify-between items-center container max-w-8xl mx-auto relative" :class="mainBlockClass">
      <!-- Линии -->
      <div class="container max-w-8xl mx-auto absolute h-full" data-aos="fade-in" data-aos-once="true">
        <div style="height: 2px;" class="w-[109%] right-0 bg-vlada-bordo-100 absolute top-[-80px]" :class="topLineTop">
        </div>
        <div style="height: 2px;" class="w-[109%] left-0 bg-vlada-bordo-100 absolute top-[-80px]"
          :class="topLineBottom">
        </div>

        <div style="width: 2px;" class="h-[125%] bottom-0 bg-vlada-bordo-100 absolute right-[-80px]"
          :class="rightLineTop">
        </div>
        <div style="width: 2px;" class="h-[125%] top-0 bg-vlada-bordo-100 absolute right-[-80px]"
          :class="rightLineBottom">
        </div>

        <div style="height: 2px;" class="w-[109%] right-0 bg-vlada-bordo-100 absolute bottom-[-80px]"
          :class="bottomLineTop">
        </div>
        <div style="height: 2px;" class="w-[109%] left-0 bg-vlada-bordo-100 absolute bottom-[-80px]"
          :class="bottomLineBottom">
        </div>


        <div style="width: 2px;" class="h-[125%] bg-vlada-bordo-100 absolute bottom-0 left-[-80px]"
          :class="leftLineTop"></div>
        <div style="width: 2px;" class="h-[125%] bg-vlada-bordo-100 absolute top-0 left-[-80px]"
          :class="leftLineBottom">
        </div>
      </div>

      <!-- Текстовая часть -->
      <div :class="textContainerClass">
        <h2 data-aos="fade-up" data-aos-once="true" class="text-vlada-bordo-100 text-6xl uppercase font-semibold mb-5 font-oswald">{{ title
          }}</h2>
        <p class="text-lg pb-8" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">{{ description }}</p>
        <div data-aos="fade-up" data-aos-delay="150" data-aos-once="true">
          <NuxtLink href="#purchase" class="cta-button">more detailed</NuxtLink>
        </div>
      </div>

      <!-- Изображения -->
      <div :class="imageContainerClass" style="min-height: 489px;">
        <div class="relative pointer-events-none select-none">
          <img data-aos="fade-in" data-aos-once="true" :src="imageSrc1" :alt="title" class="w-full h-auto"
            :class="imageClass1">
          <img data-aos="fade-up" data-aos-once="true" :src="imageSrc2" :alt="title" class="absolute"
            :class="imageClass2">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProgramBlock',
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    imageSrc1: {
      type: String,
      required: false
    },
    imageSrc2: {
      type: String,
      required: false
    },
    mainBlockClass: {
      type: String,
      required: false
    },
    textContainerClass: {
      type: String,
      required: false
    },
    imageContainerClass: {
      type: String,
      required: false
    },
    topLineTop: {
      type: String,
      required: false
    },
    rightLineTop: {
      type: String,
      required: false
    },
    bottomLineTop: {
      type: String,
      required: false
    },
    leftLineTop: {
      type: String,
      required: false
    },
    topLineBottom: {
      type: String,
      required: false
    },
    rightLineBottom: {
      type: String,
      required: false
    },
    bottomLineBottom: {
      type: String,
      required: false
    },
    leftLineBottom: {
      type: String,
      required: false
    },
    imageClass1: {
      type: String,
      required: false
    },
    imageClass2: {
      type: String,
      required: false
    },
  },
});
</script>

<style scoped>
.cta-button {
  @apply text-black font-oswald text-xl bg-white w-auto py-2 px-6 font-medium rounded-full uppercase transition-colors hover:bg-vlada-bordo-100 hover:text-white;
}
</style>
