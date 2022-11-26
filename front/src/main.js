import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios';
// import ViewManager from './services/ViewManager'

createApp(App).use(router).mount('#app')
