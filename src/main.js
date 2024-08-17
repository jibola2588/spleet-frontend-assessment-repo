import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

//ANTD
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

//Primevue
import Primevue from "primevue/config";

//Toast
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
  timeout: 2000,
};
import { useToast } from "vue-toastification";

const app = createApp(App);
app.config.globalProperties.$toast = useToast();

app
.use(Primevue)
.use(router)
.use(Toast, options)
.use(Antd)
.mount('#app')

export const { toast } = useToast();