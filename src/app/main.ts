import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './main.scss'
import 'vue-final-modal/style.css'
import './tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createVfm } from 'vue-final-modal'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const vfm = createVfm()

app.use(ElementPlus).use(createPinia()).use(router).use(vfm)

for (const [key, component] of Object.entries(ElementPlusIconsVue))
   app.component(key, component)

app.mount('#app')
