<template>
    <div>
        <Snapshot :exid="id" :frequency="frequency" :cam="camera"/> 
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      id: "",
    };
  },
  computed: {
    ...mapGetters({
      token: "access/GET_TOKEN",
    }),
    camera() {
      return this.$store.getters["access/GET_CAMERA_BY_ID"](this.id);
    },
    frequency(){
      if(!(!!this.camera.cloud_recordings)){
        return 30
      }
      return this.camera.cloud_recordings.frequency
    }
  },
  async asyncData({ params }) {
    return {
      id: params.camera_exid,
    };
  },
};
</script>

<style scoped>
</style>