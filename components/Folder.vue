<template>
  <div>
    <div class="bg-white rounded w-80 mx-auto my-6 rounded-2xl shadow-lg">
      <div class="rounded-2xl overflow-hidden">
        <img
          class="h-48"
          v-if="type == 'camera'"
          :src="`https://media.evercam.io/v2/cameras/${content.id}/thumbnail?authorization=${token}`"
          :alt="content.name"
        />
      </div>
      <div class="flex flex-row justify-between items-center p-3">
        <div>
          <div class="my-2">{{ content.name }}</div>
          <div class="flex flex-row">
            <div
              class="my-2 status"
              :class="content.is_online ? 'green' : 'red'"
            ></div>
            <span class="text-gray-400 pt-1 mx-3">{{ content.status }}</span>
          </div>
        </div>
        <more-vertical-icon
          size="1.5x"
          class="custom-class"
        ></more-vertical-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { MoreVerticalIcon } from "vue-feather-icons";

export default {
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