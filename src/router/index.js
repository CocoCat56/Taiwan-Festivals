import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },{
      path: '',
      component: () => import('@/components/layout'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/components/Home'),
        },{
          path: '/search/:searchText',
          name: 'search',
          component: () => import('@/components/search'),
        },{
          path: '/international/:list1',
          name: 'international',
          component: () => import('@/components/international'),
        },{
          path: '/nationwide/:list2',
          name: 'nationwide',
          component: () => import('@/components/nationwide'),
        },{
          path: '/festival/:id',
          name: 'festival',
          component: () => import('@/components/festival'),
        }
      ]
    }
  ]
});
