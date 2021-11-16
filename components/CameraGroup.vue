<template>
<div> 
     <div
    @click="expand"
    :class="expanded ? 'dark:text-white dark:bg-indigo-600' : 'dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'"
    class="
      hover:text-gray-800 hover:bg-gray-100
      flex
      justify-between
      items-center
      p-2
      mb-3
      transition-colors
      
      duration-200
      text-gray-600
      
      rounded-lg
    "
  >
    <span class="mx-4 text-md font-normal">
      {{ groupName }}
    </span>
    <chevron-down-icon
      :class="{ open: expanded }"
      class="transition-all ease-in-out duration-200"
      v-if="group"
      size="1.5x"
    ></chevron-down-icon>
  </div>

    <div class="transition-all ease-in-out duration-200"  v-show="expanded">
      <div
        v-for="camera in group"
        :key="camera"
        class="
          hover:text-gray-800 hover:bg-gray-100
          flex
          justify-between
          items-center
          p-2
          mb-3
          ml-3
          transition-colors
          dark:hover:text-white dark:hover:bg-gray-600
          duration-200
          text-gray-600
          dark:text-gray-400
          rounded-lg
        "
      >
        <span class="mx-4 text-sm font-normal">
          {{ camera }}
        </span>
      </div>
    </div></div>
</template>

<script>
import { ChevronUpIcon, ChevronDownIcon } from "vue-feather-icons";
export default {
  data() {
    return {
      expanded: false,
    };
  },
  props: ["group", "groupName"],
  components: {
    ChevronDownIcon,
    ChevronUpIcon,
  },
  methods: {
    expand() {
      this.expanded = !this.expanded;
      console.log(this.group);
    },
  },
};
</script>

<style scoped>
.open {
  transform: rotate(180deg);
}
</style>