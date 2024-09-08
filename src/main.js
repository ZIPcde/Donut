import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Импортируем Vuex store
import './assets/styles/global.css';

createApp(App)
  .use(router)  // Подключаем Vue Router
  .use(store)   // Подключаем Vuex store
  .mount('#app');
