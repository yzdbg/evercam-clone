<template>
  <div>
    <div class="bg-white rounded w-80 mx-auto my-6 rounded-2xl shadow-lg">
      <div class="rounded-2xl overflow-hidden">
                              <NuxtLink

            :to="`/projects/${content.project.id}/${content.id}`"
          >
                  <img
          class="h-48"
          v-if="type == 'camera'"
          :src="`https://media.evercam.io/v2/cameras/${content.id}/thumbnail?authorization=${token}`"
          :alt="content.name"
        />
          </NuxtLink>

      </div>
      <div class="flex flex-row justify-between items-center p-3">
        <div>
                                        <NuxtLink

            :to="`/projects/${content.project.id}/${content.id}`"
          >
         <div class="my-2">{{ content.name }}</div>
          </NuxtLink>
 
          <div class="flex flex-row">
            <div
              class="my-2 status"
              :class="content.is_online ? 'green' : 'red'"
            ></div>
            <span class="text-gray-400 pt-1 mx-3">{{ content.status }}</span>
          </div>
        </div>


<div class="relative inline-block text-left">
        <more-vertical-icon
          @click="openMenu"
          size="1.5x"
          class="cursor-pointer"
        ></more-vertical-icon>
<drop-down-menu :visible="open"></drop-down-menu>
</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { MoreVerticalIcon } from "vue-feather-icons";

export default {
  data(){
    return{
      open: false,
    }
  },
  methods:{
    openMenu(){
      this.open = !this.open
    }
  },
  components: {
    MoreVerticalIcon,
  },
  mounted() {},
  computed: {
    ...mapGetters({
      token: "access/GET_TOKEN",
    }),
  },
  props: ["type", "title", "content"],
};
</script>

<style scoped>
.status {
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
.green {
  background-color: #71f0bd;
}
.red {
  background-color: #ff4545;
}
</style>