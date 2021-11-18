<template>
  <div>
    <div class="bg-white rounded w-96 mx-auto rounded-2xl shadow-lg">
<div class="rounded-lg overflow-hidden">
          <img
          class=""
          v-if="type == 'camera'"
          :src="`https://media.evercam.io/v2/cameras/${content.id}/thumbnail?authorization=${token}`"
          :alt="content.name"
        />
</div>
      <div class=" p-3">

        <div class="grid grid-cols-3 gap-4 mt-2">
          <div class="h-8 bg-gray-200 rounded"></div>
          <div class="h-8 bg-gray-200 rounded"></div>
          <div class="h-8 bg-gray-200 rounded"></div>
          <div class="h-8 col-span-2 bg-gray-200 rounded"></div>
          <div class="h-8 bg-gray-200 rounded"></div>
          <div class=""></div>
          <div class="col-span-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

computed:{
      ...mapGetters({
      token: "access/GET_TOKEN",
    }),
},
    props: ["type", "title", "content"]
};
</script>

<style lang="scss" scoped>
</style>