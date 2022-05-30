import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import i18n from './plugins/i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

axios.defaults.baseURL = 'http://localhost:53000'

const app = createApp(App)
app
    .use(i18n)
    .use(VueAxios, axios)
    .use(store)
    .mount('#app')
