import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import VueParticles from 'vue-particles'

const app = createApp(App)
app.use(VueParticles)
app.use(ElementPlus)
app.use(router).mount('#app')
