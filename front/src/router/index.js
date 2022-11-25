import { createRouter, createWebHashHistory } from 'vue-router'
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
    props: true
  },
  {
    path: '/connected',
    name: 'connected',
    component: Connected
  },
  {
    path: '/answered',
    name: 'answered',
    component: Answered
 },]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router