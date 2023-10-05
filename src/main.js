import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css'
import './assets/tstyles.css'
import './assets/fa/css/fontawesome.css'
import './assets/fa/css/brands.css'
import './assets/fa/css/solid.css'

import crud from './plugins/crud'

import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(crud).mount('#app')
