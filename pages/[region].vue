<template>
    <div>
      <h1 class="text-white">Region: {{ region }}</h1>
    </div>
  </template>
  
  <script setup>
  const route = useRoute();
  const region = route.params.region;
  </script>
  