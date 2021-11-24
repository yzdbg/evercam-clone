<template>
  <div class="h-screen w-full overflow-y-scroll scroll bg-gray-100">
    <project v-for="project in projects" :key="project.name" :project="project"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  mounted() {
    this.$store.dispatch("access/FETCH_CAMERAS");
    this.$store.dispatch("access/GROUP_CAM_PROJECTS");
    console.log(this.token)
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