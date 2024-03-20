<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-cyan-300 uppercase">{{ region }}</h1>
    <h1 class="text-white">Region is Selected</h1>
  </div>
</template>
  
  <script setup>
  const route = useRoute();
  const region = route.params.region;
  </script>
  