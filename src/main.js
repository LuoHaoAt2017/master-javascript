import Vue from "vue";
import VueRouter from "vue-router";
import App from "./views/App.vue";
import store from "./store";
import router from "./router";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
    el: "#root",
    store: store,
    router: router,
    render: (h) => {
        return h(App)
    }
});
