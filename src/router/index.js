import { createRouter, createWebHistory } from "vue-router";
const Home = () => import('@/views/Home/home')
const Category = () => import('@/views/Category/category')
const ShopCart = () => import('@/views/shopcart/shopcart')
const Profile = () => import('@/views/profile/profile')


const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path:'/category',
    name:'category',
    component:Category
  },
  {
    path:'/shopcart',
    name:'shopcart',
    component:ShopCart
  },
  {
    path:'/profile',
    name:'profile',
    component:Profile
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
