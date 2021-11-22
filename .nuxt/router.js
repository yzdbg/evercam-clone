import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dc62582e = () => interopDefault(import('../pages/cameras/index.vue' /* webpackChunkName: "pages/cameras/index" */))
const _08634296 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _d11b06f4 = () => interopDefault(import('../pages/projects/_project_id/index.vue' /* webpackChunkName: "pages/projects/_project_id/index" */))
const _60c1feb6 = () => interopDefault(import('../pages/projects/_project_id/_camera_exid.vue' /* webpackChunkName: "pages/projects/_project_id/_camera_exid" */))
const _3e44426c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cameras",
    component: _dc62582e,
    name: "cameras"
  }, {
    path: "/projects",
    component: _08634296,
    name: "projects"
  }, {
    path: "/projects/:project_id",
    component: _d11b06f4,
    name: "projects-project_id"
  }, {
    path: "/projects/:project_id/:camera_exid",
    component: _60c1feb6,
    name: "projects-project_id-camera_exid"
  }, {
    path: "/",
    component: _3e44426c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
