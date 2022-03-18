import AddCoupon from "../components/pages/coupons/AddCoupon.vue";
import Coupons from "../components/pages/coupons/Coupons.vue";
import ExportCoupons from "../components/pages/exports/ExportCoupons.vue";
import Index from '../components/pages/Index.vue';
import Login from '../components/pages/Login.vue';
import UserInfo from '../components/pages/user/UserInfo.vue';

const routes = [
  {
    path: '/',
    component: () => import('src/components/layout/MainLayout.vue'),
    children: [
      {
        path: "",
        component: Index
      },
      {
        path: "/login",
        name: "login",
        component: Login
      },
      {
        path: "/add-coupon",
        name: "add-coupon",
        component: AddCoupon
      },
      {
        path: "/coupons",
        name: "coupons",
        component: Coupons
      },
      {
        path: "/export-coupons",
        name: "export-coupons",
        component: ExportCoupons
      },
      {
        path: "/user",
        name: "user",
        component: UserInfo
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/components/pages/Error404.vue')
  }
]

export default routes
