import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css'
import './assets/tstyles.css'
import './assets/fa/css/fontawesome.css'
import './assets/fa/css/brands.css'
import './assets/fa/css/solid.css'

import crud from './plugins/crud'
import venus from './plugins/venus'
import router from './router'
import store from './store'

createApp(App).use(crud).use(venus).use(store).use(router).mount('#app')
// createApp(App).use(store).use(router).mount('#app')
