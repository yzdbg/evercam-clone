<template>
  <div class="h-screen overflow-y-scroll scroll">
    <project v-for="project in projects" :key="project.name" :project="project"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  mounted() {
    this.$store.dispatch("access/FETCH_CAMERAS");
    this.$store.dispatch("access/GROUP_CAM_PROJECTS");
    console.log(this.projects)
  },
  computed: {
    ...mapGetters({
      cameras: "access/GET_CAMERAS",
      token: "access/GET_TOKEN",
      projects : "access/GET_PROJECTS"
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>