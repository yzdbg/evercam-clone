<template>
  <div class="bg-gray-100 w-full h-screen w-full overflow-scroll scroll ">
    <div v-for="project in projects" :key="project.name">
      <project-list :project="project"></project-list>
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
