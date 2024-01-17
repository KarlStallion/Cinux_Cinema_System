import { createRouter, createWebHistory } from 'vue-router'
import Movies from "../views/Movies.vue";
import ACourse from "../views/ACourse.vue";

const routes = [{
  path: '/Courses',
  name: 'Movies',
  component: Movies,
},
{
  path: '/ACourse/:id',
  name: 'ACourse',
  component: ACourse,
},
, 
{
  path: "/:catchAll(.*)",
  name: "Movies",
  component: Movies,
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
