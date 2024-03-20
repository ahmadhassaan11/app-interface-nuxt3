<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col sm:flex-row justify-between items-center bg-transparent py-3 text-white font-bold">
      <div class="text-lg">NETSOL</div>
      <div class="relative mt-4 sm:mt-0"> 
        <button @click="toggleDropdown" class="text-white font-extralight py-2 px-4 rounded-full transition duration-300" style="background: radial-gradient(circle, #0025CE 0%, rgba(9, 93, 230, 0.53) 100%);">
          Regions
        </button>
        <div v-if="isDropdownVisible" class="absolute top-full mt-2 w-full bg-white bg-opacity-10 text-white font-thin rounded-lg shadow-lg">
          <ul>
            <li v-for="region in regions" :key="region.code" @click="selectRegion(region)" class="block py-2 px-4 hover:text-cyan-300 underline cursor-pointer">
              {{ region.name }}
            </li>
          </ul>
        </div>
        
      </div>
    </div>
    <div class="border-b border-gray-800"></div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isDropdownVisible = ref(false);
const regions = [
  { name: 'USA', code: 'en-us' },
  { name: 'UK', code: 'en-uk' },
  { name: 'China', code: 'en-cn' },
  { name: 'Pakistan', code: 'en-pk' },
];
const router = useRouter();

function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}

function selectRegion(region) {
  isDropdownVisible.value = false;
  router.push(`/${region.code}`);
}
</script>