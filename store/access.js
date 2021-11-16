
export const state = () => ({
  token: '',
  cameras: [],
  projects: []
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_CAMERAS(state, cams) {
    state.cameras = cams
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
}

export const getters = {
  GET_TOKEN(state) {
    return state.token;
  },
  GET_CAMERAS(state){
    return state.cameras;
  },
  GET_PROJECTS(state) {
    return state.projects
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
  },
  GROUP_CAM_PROJECTS({commit,state}){

    //some cameras have project : null
    let cams = state.cameras.map((cam) =>
      cam.project
        ? {
            project_name: cam.project.name,
            project_id: cam.project.id,
            cam_id: cam.id,
            cam_name: cam.name,
          }
        : {
            project_name: cam.name,
            project_id: cam.id,
            cam_id: cam.id,
            cam_name: cam.name,
          }
    );
    const projects = cams.reduce((groups, cam) => {
      const group = groups[cam.project_id] || {
        name: cam.project_name,
        cameras: [],
      };
      group.cameras.push({ id: cam.cam_id, name: cam.cam_name });
      groups[cam.project_id] = group;
      return groups;
    }, {});
    commit('SET_PROJECTS',projects);

  }
}