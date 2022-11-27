import { createRouter, createWebHashHistory } from 'vue-router';
import ViewManager from '@/services/ViewManager'
import Answered from '../views/AnsweredView.vue';
import Connected from '../views/ConnectedView.vue';
import Failed from '../views/FailedView.vue';
import Ringing from '../views/RingingView.vue';
import Start from '../views/StartView.vue';

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/ringing',
    name: 'ringing',
    component: Ringing,
    props: true,
    beforeEnter: (to, from, next) => {
      if (ViewManager.status !== 'RINGING') {
        next('/');
      }
      next();
    }
  },
  {
    path: '/connected',
    name: 'connected',
    component: Connected,
    beforeEnter: (to, from, next) => {
      if (ViewManager.status !== 'CONNECTED') {
        next('/');
      }
      next();
    }
  },
  {
    path: '/answered',
    name: 'answered',
    component: Answered,
    beforeEnter: (to, from, next) => {
      if (ViewManager.status !== 'ANSWERED') {
        next('/');
      }
      next();
    }
  },
  {
    path: '/failed',
    name: 'failed',
    component: Failed,
    beforeEnter: (to, from, next) => {
      if (ViewManager.status !== 'FAILED') {
        next('/');
      }
      next();
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;