import VueRouter from "vue-router";
import Window from "../views/BOM/window.vue";
import Location from "../views/BOM/location.vue";
import Navigator from "../views/BOM/navigator.vue";
import Screen from "../views/BOM/screen.vue";
import History from "../views/BOM/history.vue";

const routes = [
    {
        path: "/",
        redirect: "/window"
    },
    {
        path: "/window",
        name: "window",
        component: Window
    },
    {
        path: "/location",
        name: "Location",
        component: Location
    },
    {
        path: "/navigator",
        name: "Navigator",
        component: Navigator
    },
    {
        path: "/screen",
        name: "Screen",
        component: Screen
    },
    {
        path: "/history",
        name: "History",
        component: History
    }
];

const router = new VueRouter({
    routes: routes
});

export default router;
