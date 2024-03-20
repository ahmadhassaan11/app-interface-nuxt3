<template>
  <div class="min-h-screen flex flex-col text-blue bg-black">
    <div class="absolute inset-0 z-0" style="background-image: url('/background.jpeg'); filter: blur(18px);"></div>
    
    <div class="z-10 flex-1">
      <header>
        <slot name="header"></slot>
      </header>
      <main class="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-10 lg:px-11">
        <slot />
      </main>
    </div>
  </div>
</template>
