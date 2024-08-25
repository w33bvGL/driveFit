<template>
  <header class="w-full sticky top-0 bg-black z-10">
    <div class="container max-w-8xl mx-auto flex justify-between py-3 shadow-2xl">
      <div class="flex items-center">
        <img class="pointer-events-none select-none" src="/img/logo.png" alt="Drive">
      </div>
      <nav class="flex gap-5 uppercase text-white items-center font-sans text-sm font-light">
        <a href="#programs" class="hover:text-vlada-bordo-100 transition-colors font-semibold">Programs</a>
        <a href="#testimonials" class="hover:text-vlada-bordo-100 transition-colors font-semibold">Testimonials</a>
        <a href="#contact" class="hover:text-vlada-bordo-100 transition-colors font-semibold">Contact</a>
        <a href="#programs"
          class="py-2 px-3 border-2 rounded-full transition-colors hover:border-vlada-bordo-100 font-semibold hover:text-vlada-bordo-100">Sign
          in for members</a>

      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'primaryHeader',
};
</script>