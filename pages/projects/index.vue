<template>
  <div class=" w-full h-screen w-full overflow-scroll scroll">
    
    <div v-for="project in projects" :key="project.name">
        <div>
            <h3>{{project.name}}</h3>
            <folder v-for="camera in project.cameras" :key="camera.id" type="camera" :content="camera"></folder>
        </div>
        
    </div>
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