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
      px-4
      py-3
      mb-3
      transition-colors
      
      duration-200
      text-gray-600
      
      rounded-lg
    "
  >
<div class="      flex
      justify-start
      items-center">
      <grid-icon v-if="title == 'Dashboard'" size="1.5x"></grid-icon>
    <folder-minus-icon v-if="title == 'Project board'" size="1.5x"></folder-minus-icon>

    <span class="ml-5 text-md font-normal">
      {{ title }}
    </span>
</div>
    <chevron-down-icon
      :class="{ open: expanded }"
      class="transition-all ease-in-out duration-200"
      v-if="children"
      size="1.5x"
    ></chevron-down-icon>
  </div>

    <div class="transition-all ease-in-out duration-200 ml-3 border-l-2 border-gray-600"  v-show="expanded">
      <div
        v-for="child in children"
        :key="child.name"
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
          {{ child.name }}
        </span>
      </div>
    </div></div>
</template>

<script>
import { ChevronDownIcon } from "vue-feather-icons";
import { FolderMinusIcon } from 'vue-feather-icons'
import { GridIcon } from 'vue-feather-icons'

export default {
  data() {
    return {
      expanded: false,
    };
  },
  props: ["children", "title"],
  components: {
    ChevronDownIcon,
    FolderMinusIcon,
    GridIcon
  },
  methods: {
    expand() {
      this.expanded = !this.expanded;
      console.log(this.children);
    },
  },
};
</script>

<style scoped>
.open {
  transform: rotate(180deg);
}
</style>