import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import Order from '../views/order.vue'
import Me from '../views/me.vue'
import Address from '../views/address.vue'
import City from '../views/city.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'index',
    component: Index,
	children:[
		{
			path:'',
			redirect:'/home'
		},
		{
			path:'/home',
			name:'home',
			component:Home
		},
		{
			path:'/order',
			name:'order',
			component:Order
		},
		{
			path:'/me',
			name:'me',
			component:Me
		},
		{
			path:'/address',
			name:'address',
			component: Address
		},
		{
			path:'/city',
			name:'city',
			component: City
		}
	]
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
