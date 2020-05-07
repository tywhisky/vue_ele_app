import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
	  path:'/login',
	  name:'login',
	  component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//路由守卫
router.beforeEach((to,from,next) => {
	const isLogin = localStorage.ele_login ? true : false;
	if (to.path == '/login') {
		next();
	}else{
		//判断是否登录状态
		isLogin ? next() : next('/login');
	}
})

export default router
