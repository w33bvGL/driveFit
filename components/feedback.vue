<template>
  <section class="feedback bg-vlada-bordo-100 py-20">
    <div class="container max-w-8xl mx-auto flex justify-between items-center">
      <div data-aos="fade-left">
        <h2 class="text-white text-6xl uppercase leading-snug font-oswald">We are waiting<br> for you</h2>
      </div>
      <form action="" method="post">
        <div data-aos="fade-in" class="w-[400px]"> <input type="text"
            class="text-white w-full placeholder-white py-2 outline-none bg-transparent text-lg"
            placeholder="Your name">
          <hr class="border-t-2 text-white">
        </div>
        <div data-aos="fade-in" class="mt-8 w-[400px]"> <input type="number"
            class="text-white w-full placeholder-white py-2 outline-none bg-transparent text-lg"
            placeholder="Your number">
          <hr class="border-t-2 text-white">
        </div>
        <div class="relative">
          <img src="/img/feedbackarrow.png" alt="feedbackarrow" data-aos="fade-left" data-aos-delay="50"
            class="absolute top-[-10px] right-[-30px]">
          <div data-aos="fade-up">
            <button
              class="mt-8 w-full font-oswald text-2xl text-black bg-white py-3 px-9 font-medium rounded-full uppercase transition-colors hover:bg-vlada-bordo-300 hover:text-white">sign
              up</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>