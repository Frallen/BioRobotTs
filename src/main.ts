import {createApp} from 'vue'
import './assets/styles/main.less'
import App from './App.vue'
import {createPinia} from 'pinia'
import {router} from "./router/router";

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
