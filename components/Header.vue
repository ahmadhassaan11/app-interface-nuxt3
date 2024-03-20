<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center bg-transparent py-3 text-white font-bold">
      <div>NETSOL</div>
      <div class="relative"> 
        <button @click="toggleDropdown" class="mt-4 text-white font-bold py-2 px-4 rounded-full transition duration-300" style="background: radial-gradient(163.75% 163.75% at 23.45% 140%, #0025CE 0%, rgba(9, 93, 230, 0.53) 100%);">
          Regions
        </button>
        <div v-if="isDropdownVisible" class="absolute mt-1 w-full bg-white bg-opacity-10 text-white font-thin rounded-lg shadow-lg">
          <ul>
            <li v-for="region in regions" :key="region.code" @click="selectRegion(region)" class="block py-2 px-4 hover:text-cyan-300 underline">
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