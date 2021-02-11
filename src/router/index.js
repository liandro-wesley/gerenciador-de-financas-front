import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/view-home/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "Settings" */ '@/views/view-settings/Index.vue'),
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "Logout" */ '@/views/view-logout/Index.vue'),
  },
  {
    path: '/entradas',
    name: 'Entradas',
    component: () => import(/* webpackChunkName: "Entradas" */ '@/views/view-entradas/Index.vue'),
  },
  {
    path: '/saidas',
    name: 'Saidas',
    component: () => import(/* webpackChunkName: "Saidas" */ '@/views/view-saidas/Index.vue'),
  },
  {
    path: '/metas',
    name: 'Metas',
    component: () => import(/* webpackChunkName: "Metas" */ '@/views/view-metas/Index.vue'),
  },
  {
    path: '**',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "PageNotFound" */ '@/views/view-page-not-found/Index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
