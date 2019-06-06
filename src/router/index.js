import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Survey from '@/components/Survey'
import NewSurvey from '@/components/NewSurvey'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }, {
      path: '/surveys/:id',
      name: 'Survey',
      component: Survey
    }, {
      path: '/surveys',
      name: 'NewSurvey',
      component: NewSurvey
    }
  ]
})
