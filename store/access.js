
export const state = () => ({
  token: ''
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

export const getters = {
  GET_TOKEN(state) {
    return state.token;
  },
}

export const actions = {
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