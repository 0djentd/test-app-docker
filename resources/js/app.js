import Vue from 'vue'
import store from "./store"
import vuetify from "./plugins/vuetify"

//Main pages
import App from './views/app.vue'


const app = new Vue({
    el: '#app',
    store,
    vuetify,
    components: { App }
});
