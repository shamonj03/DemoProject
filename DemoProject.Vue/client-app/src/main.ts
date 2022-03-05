import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import AntD from 'ant-design-vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'ant-design-vue/dist/antd.min.css';
import '@/assets/scss/app.scss';

createApp(App)
	.use(router)
	.use(AntD)
	.mount("#app");
