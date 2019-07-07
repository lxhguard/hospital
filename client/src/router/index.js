import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hospitaluser from '@/components/Hospitaluser'
import Hospitaladmin from '@/components/Hospitaladmin'
import Login from '@/components/Login'
import Bingli from '@/components/Bingli'
import AdminBar from '@/components/AdminBar'
import Bianji from '@/components/Bianji'
import Tianjia from '@/components/Tianjia'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: '/hospitaluser',
      name: 'Hospitaluser',
      component: Hospitaluser
    },
    {
      path: '/hospitaladmin',
      name: 'Hospitaladmin',
      component: Hospitaladmin,
      children:[
            {
              path: '/bingli',
              name: 'Bingli',
              components: {
                right:Bingli
              }
            },
            {
              path: '/bianji',
              name: 'Bianji',
              components: {
                right:Bianji
              }
            },
            {
              path: '/tianjia',
              name: 'Tianjia',
              components: {
                right:Tianjia
              }
            },
            {
              path: '/about',
              name: 'About',
              components: {
                right:About
              }
            }

      ]
    },

  ]
})
