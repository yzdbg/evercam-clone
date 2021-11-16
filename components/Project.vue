<template>
    <div>
            <div v-for="camera in project.cameras" :key="camera.id" class="m-0 p-0">
      <img :src="`https://media.evercam.io/v2/cameras/${camera.id}/thumbnail?authorization=${token}`" :alt="camera.name">
    </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        props: ["project"],
          computed: {
    ...mapGetters({
      token: "access/GET_TOKEN",
    }),
  },
    }
</script>

<style lang="scss" scoped>

</style>