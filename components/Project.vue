<template>
  <div>
    <div class="relative flex flex-row  scroll" :class="project.cameras.length > 1 ? 'carousel' : 'single justify-center'">

<span class="absolute top-0 right-0 px-4 py-2  text-center rounded-bl-md text-indigo-900  bg-indigo-200 bg-opacity-50 backdrop-filter backdrop-blur-sm">
    {{project.name}}
</span>

        <img v-for="camera in project.cameras" :key="camera.id"
          class=""
          :src="`https://media.evercam.io/v2/cameras/${camera.id}/thumbnail?authorization=${token}`"
          :alt="camera.name"
        />
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["project"],
  computed: {
    ...mapGetters({
      token: "access/GET_TOKEN",
    }),
  },
};
</script>

<style scoped>
.carousel{
  height: 66vh;
  width: 100%;
  overflow-x: scroll;
}

.single{
  height: 50vh;
  width: 100%;
  background-color: black;
}

</style>