import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaGithub, FaYoutube, FaDiscord, BiHeartFill, FaLock, FaCog, MdUpdate, FaHeadphones, FaSave, RiBracesFill, FaCopyright } from "oh-vue-icons/icons"
addIcons( FaGithub, FaYoutube, FaDiscord, BiHeartFill, FaLock, FaCog, MdUpdate, FaHeadphones, FaSave, RiBracesFill, FaCopyright );

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(router)
app.mount('#app')
