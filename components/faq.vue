<template>
  <section class="w-full bg-vlada-bordo-200 text-white relative pb-10 ">
    <div class="container max-w-8xl mx-auto relative">
      <div>
        <h2 data-aos="fade-up" class="text-vlada-bordo-100 text-5xl uppercase font-bold pb-5 pt-32">Frequently Asked<br>
          Questions
        </h2>
      </div>
      <Collapse data-aos="fade-in" :is-open="true" id="01" type="primary" title="How often should I train?"
        description="The optimal amount of training is 4-5 per week. Of course, you can train more often, if your body allows it. But it is worth remembering that rest should not be neglected, high-quality recovery is the key to effective training. For beginners, 3 workouts per week will be enough." />
      <Collapse data-aos="fade-in" id="02" type="primary" title="Will I be able to lose weight without a diet?"
        description="It’s possible to lose weight without dieting but probably not without making changes to your diet. This answer may seem mysterious, but listen to me. You may find that you have more options than you think. Research shows that following a weight loss diet often backfires. In fact, this is due to further weight gain and obesity" />
      <Collapse data-aos="fade-in" id="03" type="primary" title="How long does it take to train to achieve a result?"
        description="To see actual, sustained muscle and strength gains, beginners should expect to wait roughly six to eight weeks, while more experienced weight lifters may take upwards of 12 weeks after starting a new program. It’s important to note, however, that muscle growth is highly variable depending on the individual." />
      <Collapse data-aos="fade-in" id="04" type="primary" title="How much work experience do your coaches have?"
        description="Our coaches have at least 3 years of experience. Each of them is an expert in their field and will be happy to help you adjust your lifestyle and achieve what you want. Many people who have passed through us are very happy with their result and grateful to the coaches" />
      <Collapse data-aos="fade-in" id="05" type="primary" title="How long has your company been operating?"
        description="Our company has been operating for 5 years. Over these five years, we have helped a lot of people, even those with the biggest problems and ambitions. We are very happy that we can bring joy to people with our work, just as it brings us joy." />
    </div>
  </section>
</template>
<script lang="ts">
</script>