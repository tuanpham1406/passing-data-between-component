import Vue from 'vue'
import User from "@/components/User";
import App from './App.vue'
Vue.component('appUser', User);
export const eventBus = new Vue({
    data: {

    },
    methods: {
        changeAge(age) {
            this.$emit('ageWasEdit', age);
        }
    }
});
new Vue({
  render: h => h(App),
}).$mount('#app');
