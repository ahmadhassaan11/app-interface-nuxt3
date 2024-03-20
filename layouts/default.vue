<template>
  <div class="h-screen text-blue px-20% DefaultLayout relative bg-black" style="height: 110vh;">
    <div class="absolute inset-0" style="background-image: url('/background.jpeg'); filter: blur(18px);"></div>
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <slot />
    </div>
  </div>
</template>
