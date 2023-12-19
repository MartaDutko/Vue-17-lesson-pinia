import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FriendsView from "@/views/FriendsView.vue";
import GiftsView from "@/views/GiftsView.vue";
import AppointmentView from "@/views/AppointmentView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/friends",
    name: "friends",
    component: FriendsView,
  },
  {
    path: "/gifts",
    name: "gifts",
    component: GiftsView,
  },
  {
    path: "/appointment_gifts",
    name: "appointment_gifts",
    component: AppointmentView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
