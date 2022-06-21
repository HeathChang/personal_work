import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/css/main.css'

import TestSvc from '@/common/service/TestSvc'


const app = createApp(App)

app.config.globalProperties.$TestSvc = TestSvc

app.use(store).use(router).mount("#app");
