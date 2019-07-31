import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Nav from '@/components/Nav/index'
import BodyBox from '@/components/BodyBox/index'
import BodyLeft from '@/components/BodyLeft/index'
import BodyRight from '@/components/BodyRight/index'
import Bottom from '@/components/Bottom/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
              name: 'Home',
              components: {
                  Nav: Nav,
                  BodyBox: BodyBox,
                  BodyLeft: BodyLeft,
                  BodyRight: BodyRight,
                  Bottom: Bottom
              }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
