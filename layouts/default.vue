<template>
  <div class="flex h-screen">
    <div class="row-span-12">
      <div class="dark relative bg-gray-900">
        <div class="flex flex-col sm:flex-row sm:justify-around">
          <div class="w-72 h-screen">
            <div class="flex items-center justify-start mx-6 mt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 128 128"
                width="26"
                height="26"
                aria-labelledby="box"
                role="presentation"
                class="svg-icon company-logo"
                size="26"
              >
                <g fill="#3c3c3c">
                  <path
                    id="path187"
                    d="M 0.368,72.075 14.895,27.680 c 0,0 0,-3.079 4.528,-3.804 4.528,-0.724 28.259,-3.985 28.259,-3.985 0,0 4.528,-0.543 7.427,0.724 2.898,1.268 8.514,5.615 8.514,5.615 z"
                    style="fill: rgb(199, 18, 44)"
                  ></path>
                  <path
                    id="path189"
                    d="M 15.439,85.105 19.535,62.945 2.034,74.598 Z"
                    style="fill: rgb(0, 0, 0)"
                  ></path>
                  <path
                    id="path191"
                    d="M 32.454,52.721 56.922,127.131 17.794,99.053 c 0,0 -1.268,-2.354 -0.543,-5.977 0.724,-3.622 4.709,-27.896 4.709,-27.896 0,0 1.261,-5.415 4.162,-7.689 2.901,-2.274 6.330,-4.767 6.330,-4.767 z"
                    style="fill: rgb(199, 18, 44)"
                  ></path>
                  <path
                    id="path193"
                    d="M 59.639,126.407 73.588,116.444 53.661,106.480 Z"
                    style="fill: rgb(0, 0, 0)"
                  ></path>
                  <path
                    id="path195"
                    d="m 48.008,90.741 2.392,6.863 c 0,0 1.992,4.709 5.796,6.883 3.804,2.173 25.904,13.586 25.904,13.586 0,0 2.717,2.717 7.427,-0.543 4.709,-3.260 36.954,-26.810 36.954,-26.810 z"
                    style="fill: rgb(199, 18, 44)"
                  ></path>
                  <path
                    id="path197"
                    d="m 105.675,86.889 15.967,-15.973 4.659,16.000 z"
                    style="fill: rgb(0, 0, 0)"
                  ></path>
                  <path
                    id="path199"
                    d="m 88.759,87.085 24.138,-73.896 13.405,40.577 c 0,0 3.584,5.609 -1.037,9.854 -4.622,4.244 -21.243,20.216 -21.243,20.216 0,0 -4.542,3.589 -10.875,3.425 -6.333,-0.164 -4.386,-0.177 -4.386,-0.177 z"
                    style="fill: rgb(199, 18, 44)"
                  ></path>
                  <path
                    id="path201"
                    d="M 110.200,11.772 103.283,31.562 93.321,11.739 Z"
                    style="fill: rgb(0, 0, 0)"
                  ></path>
                  <path
                    id="path205"
                    d="m 98.352,47.766 2.113,-6.788 c 0,0 1.409,-4.931 -1.344,-10.375 C 96.366,25.157 86.567,4.663 86.567,4.663 c 0,0 -0.576,-2.946 -5.123,-3.010 -4.547,-0.064 -46.414,-0.007 -46.414,-0.007 z"
                    style="fill: rgb(199, 18, 44)"
                  ></path>
                  <path
                    id="path207"
                    d="M 49.933,16.575 33.031,3.780 27.255,20.046 Z"
                    style="fill: rgb(0, 0, 0)"
                  ></path>
                </g>
              </svg>
              <span
                class="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold"
              >
                Evercam
              </span>
            </div>
            <!-- <search-bar class="mt-10 mx-6"/> -->

            <nav class="mt-10 pr-2 pl-2 h-3/5 scroll overflow-y-scroll">
              <NuxtLink to="/projects"
                ><list-item
                  title="Project board"
                  :children="projects"
                ></list-item
              ></NuxtLink>
              <NuxtLink to="/cameras"
                ><list-item title="Dashboard" :children="cameras"></list-item
              ></NuxtLink>
              <!-- <span class="text-gray-600 ml-10 mt-9 ">Projects</span> -->
            </nav>
            <div @click="signout" class="absolute bottom-0 my-10">
              <log-out-icon size="1.5x" class="custom-class"></log-out-icon>
              <span class="mx-4 font-medium"> Sign out </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import CameraGroup from "~/components/ListItem.vue";
import SearchBar from "~/components/SearchBar.vue";
import { LogOutIcon } from "vue-feather-icons";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "default",
  components: { CameraGroup, SearchBar, LogOutIcon },
  computed: {
    ...mapGetters({
      cameras: "access/GET_CAMERAS",
      token: "access/GET_TOKEN",
      projects: "access/GET_PROJECTS",
    }),
  },
  methods: {
    ...mapActions({
      signout: "access/SIGN_OUT",
    }),
  },
};
</script>

<style>
.scroll::-webkit-scrollbar {
  width: 7px;
}

.scroll::-webkit-scrollbar-track {
  background: rgba(17, 24, 39, 1);
}

.scroll::-webkit-scrollbar-thumb {
  background: rgb(103, 117, 139);
  border-radius: 7px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(119, 127, 139);
}

.no-scroll::-webkit-scrollbar {
  width: 0px;
}
</style>