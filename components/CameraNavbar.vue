<template>
  <div>
    <nav class="p-2 bg-gray-100 text-gray-600 rounded w-full">
      <div class="flex content-center items-center">

                <NuxtLink to="/projects">
        <div>Projects</div></NuxtLink>
        <chevron-right-icon size="1x" class="mx-3"></chevron-right-icon>
        <NuxtLink :to="`/projects/${project.id}`">
          <div>
            {{ project.name }}
          </div></NuxtLink>

        <chevron-right-icon size="1x" class="mx-3"></chevron-right-icon>
        <div>
          {{ camera.name }}
        </div>
      </div>
      <div class="flex items-center content-center">
        <div class="text-2xl">{{ camera.name }}</div>
        <span
          class="rounded ml-2 px-1 bg-opacity-75"
          :class="
            camera.status == 'online'
              ? 'bg-green-200 text-green-500'
              : 'bg-red-200 text-red-500'
          "
          >{{ camera.status }}</span
        >
      </div>
    </nav>
  </div>
</template>

<script>
import { ChevronRightIcon } from "vue-feather-icons";

export default {
  computed: {
    camera() {
      return this.$store.getters["access/GET_CAMERA_BY_ID"](
        this.$route.params.camera_exid
      );
    },
    project() {
      return this.$store.getters["access/GET_PROJECT_BY_ID"](
        this.$route.params.project_id
      );
    },
  },
  mounted() {
    console.log(this.$route);
  },
  components: {
    ChevronRightIcon,
  },
};
</script>

<style scoped>
.green {
  background-color: #71f0bd;
}
.red {
  background-color: #ff4545;
}
</style>