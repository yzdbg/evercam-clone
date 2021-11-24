<template>
    <div class="bg-gray-100 overflow-y-scroll scroll w-full h-screen ">
              <div class="flex flex-row">
          <div class="text-2xl m-5 mb-0 font-bold">{{ project.name }}</div>
          <div class="flex-grow border-b-2"></div>
        </div>
      <div class="flex content-center justify-around flex-wrap ">

            <folder             v-for="camera in project.cameras"
            :key="camera.id" class="mx-3" type="camera" :content="camera"></folder>

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