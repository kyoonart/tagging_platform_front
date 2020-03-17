import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element'
Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// Vue.prototype.$http = axios
    // 配置请求额根路径
axios.defaults.baseURL = 'http://tagapi.whip1ash.cn/'
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')