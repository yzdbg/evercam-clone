<template>
  <div>
    <div v-for="camera in cameras" :key="camera.id">
      {{ camera.name }}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  mounted() {
    this.$store.dispatch("access/FETCH_CAMERAS");
  },
  computed: {
    ...mapGetters({
      cameras: "access/GET_CAMERAS",
      token: "access/GET_TOKEN",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>