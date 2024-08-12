<template>
  <header class="w-full sticky top-0 bg-black z-10">
    <div class="container max-w-8xl mx-auto flex justify-between py-6">
      <div class="flex items-center">
        <NuxtImg format="webp" loading="lazy" src="/img/logo.png" alt="Drive"></NuxtImg>
      </div>
      <nav class="flex gap-5 uppercase text-white items-center font-sans text-sm font-medium">
        <a href="#programs" class="hover:text-vlada-bordo-100 transition-colors">Programs</a>
        <a href="#testimonials" class="hover:text-vlada-bordo-100 transition-colors">Testimonials</a>
        <a href="#contact" class="hover:text-vlada-bordo-100 transition-colors">Contact</a>
        <a href="#programs"
          class="py-2 px-3 border-2 rounded-full transition-colors hover:border-vlada-bordo-100 hover:text-vlada-bordo-100">Sign
          in for members</a>

      </nav>
    </div>
  </header>
</template>