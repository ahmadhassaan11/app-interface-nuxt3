<template>
  <div class="flex flex-col bg-transparent rounded-lg shadow-md overflow-hidden">
    <img :src="image" alt="news image" class="w-72 h-44 object-cover" />
    <div class="pt-2">
      <div class="bg-blue-900 text-white text-xs uppercase rounded inline-block px-1 py-1 self-start mb-3">
        {{ tag }}
      </div>
      <h2 class="w-72 text-white text-lg mb-2">{{ title }}</h2>
      <p class="w-72 text-white text-xs">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    image: String,
    title: String,
    tag: String,
    description: String,
  },
};
</script>