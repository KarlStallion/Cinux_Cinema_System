import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Showings from '../views/Showings.vue'
import Cinemas from '../views/Cinemas.vue'
import About from '../views/About.vue'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import AboutUs from '../components/AboutUs.vue'
import Testimonials from '../components/Testimonials.vue'
import Contact from '../components/Contact.vue'
import FAQ from '../components/FAQ.vue'
import Pricing from '../components/Pricing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      navbar: Navbar,
      hero: Hero
    }
  },
  {
    path: '/showings',
    name: 'Showings',
    components: {
      default: Showings,
      navbar: Navbar
    }
  },
  {
    path: '/cinemas',
    name: 'Cinemas',
    components: {
      default: Cinemas,
      navbar: Navbar
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: About,
      navbar: Navbar,
      aboutus: AboutUs,
      testimonials: Testimonials,
      contact: Contact,
      faq: FAQ,
      pricing: Pricing
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
  ],
})

export default router