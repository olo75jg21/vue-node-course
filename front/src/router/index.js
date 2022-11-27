import { createRouter, createWebHashHistory } from 'vue-router'
import ViewManager from '@/services/ViewManager'
import Answered from '../views/AnsweredView.vue'
import Connected from '../views/ConnectedView.vue'
import Start from '../views/StartView.vue'
import Ringing from '../views/RingingView.vue'

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
        console.log('redirected from ringing');
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
        console.log('redirected from connected');
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
        console.log('redirected from answered');
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