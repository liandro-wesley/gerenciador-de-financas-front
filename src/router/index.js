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
    component() {
      return import('@/views/view-settings/Index.vue');
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    component() {
      return import('@/views/view-logout/Index.vue');
    },
  },
  {
    path: '/entradas',
    name: 'Entradas',
    component() {
      return import('@/views/view-entradas/Index.vue');
    },
  },
  {
    path: '/saidas',
    name: 'Saidas',
    component() {
      return import('@/views/view-saidas/Index.vue');
    },
  },
  {
    path: '/metas',
    name: 'Metas',
    component() {
      return import('@/views/view-metas/Index.vue');
    },
  },
  {
    path: '**',
    name: 'PageNotFound',
    component() {
      return import('@/views/view-page-not-found/Index.vue');
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
