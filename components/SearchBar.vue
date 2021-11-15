<template>
     <div class="flex flex-row items-center justify-center content-center w-full mb-5 bg-gray-700 focus:bg-gray-600 rounded-lg">
        <search-icon size="1.5x" class="ml-3 text-gray-500"></search-icon>
        <input class="bg-transparent text-gray-300 focus:text-gray-200 w-full h-11 pl-3  text-md focus:outline-none"
           name="search" placeholder="Search cameras">
      </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'
    export default {
          components: {
    SearchIcon
  }
        
    }
</script>
