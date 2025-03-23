import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/JobDetails.vue";
const routes = [
  {
    path: "/",
    name: "empty",
    component: () => import("../views/EmptyView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addjob",
    name: "addjob",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddJob.vue"),
  },
  {
    path: "/editjob",
    name: "editjob",
    component: () => import("../views/EditJob.vue"),
  },
  {
    path: "/filternav",
    name: "filternav",
    component: () => import("../views/FilterNav.vue"),
  },
  {
    path: "/details/:jobId", // Dynamic route parameter
    name: "details",
    component: DetailsView,
    props: (route) => ({ jobId: route.params.jobId, jobs: route.meta.jobs }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
