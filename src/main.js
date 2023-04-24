import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import BeerDetails from './views/BeerDetailsView.vue'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
