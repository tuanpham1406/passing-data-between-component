import Vue from 'vue'
import User from "@/components/User";
import App from './App.vue'
Vue.component('appUser', User);

new Vue({
  render: h => h(App),
}).$mount('#app');
