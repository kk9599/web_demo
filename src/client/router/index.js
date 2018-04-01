import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import auth from './auth'

Vue.use(Router)
function requireAuth(to,from,next){
    if(!auth.loggedin()){
      next({
        path:'/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
     else {
        next()
     }

    
}



export default new Router({
  mode:'history',
  linkActiveClass:'is-active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/demo',
    	name:'demo',
    	component: demo
    },
    {
      path:'/login',
      name:'auth',
      component: require('../views/login')
    }
  ]
})
