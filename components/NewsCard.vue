<template>
  <div class="flex flex-col bg-transparent rounded-lg shadow-md overflow-hidden">
    <img :src="image" alt="news image" class="w-full sm:w-72 h-auto sm:h-44 object-cover" />
    <div class="pt-2 px-4 sm:px-0">
      <div class="bg-white bg-opacity-10 text-xs uppercase rounded inline-block px-1 py-1 self-start mb-3" style="color: #18EBFE;">
        {{ tag }}
      </div>

      <h2 class="w-full sm:w-72 text-white text-lg mb-2">{{ title }}</h2>
      <p class="w-full sm:w-72 text-white text-xs">{{ description }}</p>
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