
export const state = () => ({
  token: '',
  cameras: [],
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_CAMERAS(state, cams) {
    state.cameras = cams
  },
}

export const getters = {
  GET_TOKEN(state) {
    return state.token;
  },
  GET_CAMERAS(state){
    return state.cameras;
  },
}

export const actions = {
  async FETCH_CAMERAS({commit,state}){
    if(state.cameras.length){
      return
    }
    try {
      const response = await this.$axios.$get(
        "https://media.evercam.io/v2/cameras",
         );
      commit('SET_CAMERAS',response.cameras);
    } 
    catch (e) {
      console.log(e);
    }  
    finally{
    }
    
  },
  async SIGN_IN({commit},info) {
    try{
      const response = await this.$axios
      .$post("https://media.evercam.io/v2/auth/login",{
          username: info.email,
          password: info.password,
        },
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
        }
      })
      commit('SET_TOKEN', response.token)
      console.log(response.token)
      this.$axios.setToken(response.token , "Bearer")
      this.$router.push("/cameras")
    }
    catch(e){
      console.log(e)
    }
    finally{
    }
  }
}