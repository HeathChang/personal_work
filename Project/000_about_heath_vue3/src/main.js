import { createApp } from 'vue'
import App from './App.vue'

// Ant Design Template
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";


const app = createApp(App)



app
    .use(Antd)
    // final
    .mount('#app')
