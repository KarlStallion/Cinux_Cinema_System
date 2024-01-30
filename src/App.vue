<template>
  <div id="app">
    <Navbar />
    <Hero />
    <router-view />
    <AboutUs />
    <FAQ />
    <Pricing />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import AboutUs from '@/components/AboutUs.vue';
import FAQ from '@/components/FAQ.vue';
import Pricing from '@/components/Pricing.vue';
import Testimonials from '@/components/Testimonials.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    AboutUs,
    FAQ,
    Pricing,
    Testimonials,
    Contact,
  },
};
</script>