import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss' // 全局样式
import router from './router'
import  ElementPlus  from 'element-plus' 
import 'element-plus/lib/theme-chalk/index.css';

import SvgIcon from '@/components/SvgIcon.vue'// svg component

const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(ElementPlus,{size: 'small'})
app.use(router)
app.mount('#app')
