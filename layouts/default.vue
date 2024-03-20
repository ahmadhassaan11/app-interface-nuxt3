<template>
  <div class="min-h-screen flex flex-col text-blue bg-black relative">
    <!-- Background Blur -->
    <div class="absolute inset-0 z-0" style="background-image: url('/background.jpeg'); filter: blur(18px);"></div>
    
    <!-- Blurred Blue Ellipse -->
    <svg class="absolute z-10 top-166 left-502.58" width="984.85" height="624.69" viewBox="0 0 684.85 624.69">
      <ellipse cx="342.425" cy="312.345" rx="342.425" ry="312.345" fill="#0126CE" opacity="0.4" transform="rotate(-5.93 342.425 312.345)" class="backdrop-blur" style="filter: blur(50px);"></ellipse>
    </svg>

    <!-- Content Area -->
    <div class="z-20 flex-1">
      <header>
        <slot name="header"></slot>
      </header>
      <main class="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-10 lg:px-11">
        <slot />
      </main>
    </div>
  </div>
</template>
