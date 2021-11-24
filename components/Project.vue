<template>
  <div>
                  <div class="bg-gray-100 flex flex-row pb-3">
          <div class="text-2xl m-5 mb-0 font-bold">{{ project.name }}</div>
          <div class="flex-grow border-b-2"></div>
        </div>
    <div class="flex scroll flex-wrap w-full ">

      <nuxt-link class="single flex justify-center content-center items-center" v-for="camera in project.cameras" :key="camera.id" :to="`/projects/${project.id}/${camera.id}`">

          <img 
          :src="`https://media.evercam.io/v2/cameras/${camera.id}/thumbnail?authorization=${token}`"
          :alt="camera.name"
        />

       </nuxt-link>
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

.single{
  max-height: 60vh;
  width: 50%;
  background-color: black;
}

</style>