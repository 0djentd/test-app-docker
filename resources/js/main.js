import Vue from 'vue'
import store from "./store"
import vuetify from "./plugins/vuetify"
import App from './views/App.vue'
const app = new Vue({
    el: '#app',
    store,
    vuetify,
    components: { App }
});
