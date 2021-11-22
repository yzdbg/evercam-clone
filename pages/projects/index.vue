<template>
  <div class="bg-gray-100 w-full h-screen w-full overflow-scroll scroll ">
    <div v-for="project in projects" :key="project.name">
      <div>
        <div class="flex flex-row">
          <div class="text-2xl m-5 mb-0 font-bold">{{ project.name }}</div>
          <div class="flex-grow border-b-2"></div>
        </div>

        <div class="flex content-center flex-wrap justify-around scroll">
          <NuxtLink
            v-for="camera in project.cameras"
            :key="camera.id"
            :to="`/cameras/${camera.id}`"
          >
            <folder class="mx-3" type="camera" :content="camera"></folder>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  async mounted() {
    await this.$store.dispatch("access/FETCH_CAMERAS");
    this.$store.dispatch("access/GROUP_CAM_PROJECTS");
  },
  computed: {
    ...mapGetters({
      cameras: "access/GET_CAMERAS",
      token: "access/GET_TOKEN",
      projects: "access/GET_PROJECTS",
    }),
  },
};
</script>
