<template>
  <section class="bg-vlada-bordo-200 text-white relative pt-16 pb-44">
    <div class="flex justify-between items-center container max-w-8xl mx-auto relative" :class="mainBlockClass">
      <!-- Линии -->
      <div class="container max-w-8xl mx-auto absolute h-full">
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
        <h2 class="text-vlada-bordo-100 text-6xl uppercase font-semibold mb-5 font-oswald">{{ title }}</h2>
        <p class="text-lg pb-8">{{ description }}</p>
        <NuxtLink href="#purchase" class="cta-button">more detailed</NuxtLink>
      </div>

      <!-- Изображения -->
      <div :class="imageContainerClass" style="min-height: 489px;">
        <div class="relative pointer-events-none select-none">
          <img :src="imageSrc1" :alt="title" class="w-full h-auto" :class="imageClass1">
          <img :src="imageSrc2" :alt="title" class="absolute" :class="imageClass2">
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
      default: false
    },
    textContainerClass: {
      type: String,
      default: false
    },
    imageContainerClass: {
      type: String,
      default: false
    },
    topLineTop: {
      type: String,
      default: false
    },
    rightLineTop: {
      type: String,
      default: false
    },
    bottomLineTop: {
      type: String,
      default: false
    },
    leftLineTop: {
      type: String,
      default: false
    },
    topLineBottom: {
      type: String,
      default: false
    },
    rightLineBottom: {
      type: String,
      default: false
    },
    bottomLineBottom: {
      type: String,
      default: false
    },
    leftLineBottom: {
      type: String,
      default: false
    },
    imageClass1: {
      type: String,
      default: false
    },
    imageClass2: {
      type: String,
      default: false
    },
  },
});
</script>

<style scoped>
.cta-button {
  @apply text-black font-oswald text-xl bg-white w-auto py-2 px-6 font-medium rounded-full uppercase transition-colors hover:bg-vlada-bordo-100 hover:text-white;
}
</style>
