<template>
  <div class="flex justify-center">
    <img :src="src" >
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      src: "",
      interval: null,
      freq: 1000,
      rand: Date.now()
    };
  },
  computed:{
  ...mapGetters({token: "access/GET_TOKEN"})
  },
  mounted(){
      console.log("cam : ", this.cam)
      this.loadImage(`https://media.evercam.io/v2/cameras/${this.exid}/live/snapshot?authorization=${this.token}&rnd=${this.rand}`)
      this.interval = setInterval(() => {
          console.log("freq : ", this.frequency)
        this.rand = Date.now()
        this.loadImage(`https://media.evercam.io/v2/cameras/${this.exid}/live/snapshot?authorization=${this.token}&rnd=${this.rand}`)
      },60000/this.frequency || this.freq );
    
  },

  methods:{
    loadImage(url){
        console.log("fetching now");
      const img = document.createElement('img')
      img.onload = ()=>{
        this.src = url
        img.remove
      }
      img.src = url
    }
  },

  props: ["exid", "frequency", "cam"],
  destroyed() {
    clearInterval(this.interval)
  },
};
</script>

<style lang="scss" scoped>
</style>