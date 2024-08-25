<template>
  <ProgramBlock title="YOGA PROGRAM"
    description="Yoga helps to improve physical health, strengthen muscles and flexibility, improve coordination and balance. It also helps to improve mental health, reduces stress, improves mood, and helps to focus and relax."
    imageSrc1="/img/programm-1-1.png" imageSrc2="/img/programm-1-2.png" textContainerClass="w-1/2 relative"
    imageContainerClass="w-1/2 flex justify-end" imageClass1="pr-12 pt-20" imageClass2="top-0 right-0 w-2/4.5 h-auto"
    topLineTop="hidden" topLineBottom="hidden" rightLineTop="hidden" rightLineBottom="hidden" leftLineTop="hidden"
    bottomLineBottom="hidden" />

  <ProgramBlock title="CARDIO PROGRAM" mainBlockClass="flex-row-reverse"
    description="Cardio helps strengthen the heart and improve blood circulation, which helps reduce the risk of cardiovascular disease. Cardio exercises help burn calories and reduce body fat, which helps to reduce weight and keep it normal."
    imageSrc1="/img/programm-2-1.png" imageSrc2="/img/programm-2-2.png" textContainerClass="w-1/2 relative"
    imageContainerClass="w-1/2 flex justify-start" imageClass1="pl-12 pt-20" imageClass2="top-0 left-0 w-2/4.5 h-auto"
    leftLineTop="hidden" leftLineBottom="hidden" />

  <ProgramBlock title="STRENGTH TRAINING"
    description="Strength training helps to increase muscle mass by improving physical strength and endurance. Muscles consume more energy even at rest, which helps to burn calories more efficiently and reduce fat mass. Strength training accelerates metabolism, which contributes to faster calorie burning."
    imageSrc1="/img/programm-3-1.png" imageSrc2="/img/programm-3-2.png" textContainerClass="w-1/2 relative"
    imageContainerClass="w-1/2 flex justify-end" imageClass1="pr-12 pb-20" imageClass2="bottom-0 right-0 w-2/4.5 h-auto"
    rightLineTop="hidden" rightLineBottom="hidden" bottomLineTop="hidden" bottomLineBottom="hidden" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Programs',
});
</script>
