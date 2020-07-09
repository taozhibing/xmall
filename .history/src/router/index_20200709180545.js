import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: 'allGoods',
        name: 'AllGoods',
        component: () => import('../views/allGoods/AllGoods'),
        meta: {
          title: '全部商品页'
        }
      },
      {
        path: 'detail',
        name: 'Detail',
        component: () => import('../views/detail/Detail'),
        meta: {
          title: '详情页'
        }
      },
      {
        path: 'shopCart',
        name: 'ShopCart',
        component: () => import('../views/shopCart/ShopCart'),
        meta: {
          title: '购物车页'
        }
      },
      {
        path: 'checkOut',
        name: 'CheckOut',
        component: () => import('../views/checkOut/CheckOut'),
        meta: {
          title: '清单结算页'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register'),
    meta: {
      title: '注册页'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
