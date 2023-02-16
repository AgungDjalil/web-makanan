import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import "./assets/css/main.css";

import router from "@/router/index.js"

library.add(faBagShopping);

createApp(App).use(router).mount('#app');
