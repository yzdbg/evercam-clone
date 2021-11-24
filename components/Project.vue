<template>
  <div>
    <div class="bg-gray-100 flex flex-row pb-3">
      <div class="text-2xl m-5 mb-0 font-bold">{{ project.name }}</div>
      <div class="flex-grow border-b-2"></div>
      <div class="flex items-center">  
                        <chevron-down-icon
        @click="expanded = !expanded"
        :class="{ open: expanded }"
        class="m-3 transition-all ease-in-out duration-200"
        size="1.5x"
      ></chevron-down-icon>
      </div>
    </div>
    <div class="flex scroll flex-wrap w-full" v-show="!expanded">
      <nuxt-link
        class="relative single flex justify-center content-center items-center"
        v-for="camera in project.cameras"
        :key="camera.id"
        :to="`/projects/${project.id}/${camera.id}`"
      >
        <div class="absolute bottom-0 left-0 mx-2 mb-1">
          <div class="flex items-center content-center">
            <div class="text-md text-white">{{ camera.name }}</div>
            <span
              class="rounded ml-2 px-1 text-sm bg-opacity-75"
              :class="
                camera.status == 'online'
                  ? 'bg-green-200 text-green-700'
                  : 'bg-red-200 text-red-700'
              "
              >{{ camera.status }}</span
            >
          </div>
        </div>
        <img
          :src="`https://media.evercam.io/v2/cameras/${camera.id}/thumbnail?authorization=${token}`"
          :alt="camera.name"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from "vue-feather-icons";

import { mapGetters } from "vuex";
export default {
          data() {
    return {
      expanded: false,
    };
  },
  props: ["project"],
          components: {
            ChevronDownIcon
        },
  computed: {
    ...mapGetters({
      token: "access/GET_TOKEN",
    }),
  },
};
</script>

<style scoped>
.single {
  max-height: 60vh;
  width: 50%;
  background-color: black;
}
</style>