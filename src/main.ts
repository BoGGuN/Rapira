import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus).use(createPinia()).use(router)

app.mount('#app')
