import Vue from 'vue'
import Router from 'vue-router'
import login from '@/login'
import category from '@/category'
import resource from '@/resource'
import c_add from '@/components/category/c_add'
import c_update from '@/components/category/c_update'
import d_add from '@/components/datas/d_add'
import d_update from '@/components/datas/d_update'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: login,
    },
    {
      path: '/category',
      component: category,
    },
    {
      path: '/resource',
      component: resource,
    },
    {
      path: '/c_add',
      component: c_add,
    },
    {
      path: '/c_update',
      component: c_update,
    },
    {
      path: '/d_add',
      component: d_add,
    },
    {
      path: '/d_update',
      component: d_update,
    },
  ]
})
