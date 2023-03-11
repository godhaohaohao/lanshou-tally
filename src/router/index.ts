import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:"/money",
    name: 'money',
  },
  {
    path:"/money",
    component:()=>import("@/views/Money.vue"),
  },
  {
    path:"/labels",
    component:()=>import("@/views/Labels.vue")
  },
  {
    path:"/labels/edit/:id",
    component:() => import("@/views/EditLabel.vue")
  },
  {
    path:"/statistics",
    component:()=>import("@/views/Statistics.vue")
  },
  {
    path:"/:pathMatch(.*)",
    component:() => import("@/components/NotFound.vue"),
    meta: {
      visible:true
    }
  }
  
]

const router = new VueRouter({
  routes
})

export default router
