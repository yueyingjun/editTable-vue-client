import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Add from '@/components/Add'
import Edit from '@/components/Edit'

Vue.use(Router);



var router= new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
      {
        path:"/login",
        component:Login
      },
      {
          path:"/reg",
          component:Reg
      },
      {
          path:"/add",
          component:Add
      },
      {
          path:"/edit/:id",
          component:Edit
      }
  ]
})

router.beforeEach(function (to,from,next) {
    if(to.path=="/login"||to.path=="/reg"){
      next()
    }else{
       if(sessionStorage.login){
         next();
       }else{
         next("/login");
       }

    }
})

export default router
