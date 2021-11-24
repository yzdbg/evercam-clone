<template>
<div>
        <div class="flex flex-row">
          <div class="text-2xl m-5 mb-0 font-bold">{{ project.name }}</div>
          <div class="flex-grow border-b-2"></div>
          <div class="flex items-center">
                <chevron-down-icon
        @click="expand"
        :class="{ open: expanded }"
        class="m-3 transition-all ease-in-out duration-200"
        size="1.5x"
      ></chevron-down-icon>
          </div>

        </div>

  <transition name="fade">
        <div v-show="!expanded" class="flex content-center flex-wrap justify-around scroll transition-all ease-in-out duration-200">

            <folder             v-for="camera in project.cameras"
            :key="camera.id" class="mx-3" type="camera" :content="camera"></folder>

        </div>
  </transition>

      </div>
</template>

<script>
import { ChevronDownIcon } from "vue-feather-icons";

    export default {
          data() {
    return {
      expanded: false,
    };
  },
  methods:{
      expand(){
          this.expanded = !this.expanded
      }
  },
        props: ['project'],
        components: {
            ChevronDownIcon
        }
    }
</script>

<style scoped>
.open {
  transform: rotate(180deg);
}
.fade-enter-active, .fade-leave-active {
  transition: all .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>