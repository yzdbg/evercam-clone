export default async ({ store, app, $axios, redirect }) => {
    const token = store.getters["access/GET_TOKEN"]
    if(!token && $nuxt.$route.path != "/") {
        console.log("no token, redirecting", token)

        setTimeout(() => redirect("/"))
    }
    if(token){
        $axios.setToken(token , "Bearer")
    }
    
}