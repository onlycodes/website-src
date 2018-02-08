import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
	  path: '/',
	  name: 'root',
	  component: Main
	},
    {
      path: '/:folder/:filename',
      name: 'Main',
      component: Main
    }
  ]
})
