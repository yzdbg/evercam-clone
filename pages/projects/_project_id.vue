<template>
    <div class="overflow-y-scroll scroll h-screen ">
              <div class="flex flex-row">
          <div class="text-2xl m-5 mb-0 font-bold">{{ project.name }}</div>
          <div class="flex-grow border-b-2"></div>
        </div>
      <div class="flex content-center justify-around flex-wrap ">
          <NuxtLink
            v-for="camera in project.cameras"
            :key="camera.id"
            :to="`/cameras/${camera.id}`"
          >
            <folder class="mx-3" type="camera" :content="camera"></folder>
          </NuxtLink>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapGetters({
      token: "access/GET_TOKEN",
    }),
    project() {
      return this.$store.getters["access/GET_PROJECT_BY_ID"](this.id);
    },
  },
  async asyncData({ params }) {
    return {
      id: params.project_id,
    };
  },
};
</script>

<style scoped>
</style>