<template>
  <v-app>
    <NavBar />
    <v-main>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <Testimonial />
      <ProjectSection />
      <Contact />
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import Home from './components/home.vue';
import About from './components/about.vue';
import Skills from './components/skills.vue';
import Qualification from './components/qualification.vue';
import Services from './components/services.vue';
import Portfolio from './components/portfolio.vue';
import Contact from './components/contact.vue';
import Footer from './components/footer.vue';
import Testimonial from './components/testimonial.vue';
import ProjectSection from './components/project-section.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    Home,
    About,
    Skills,
    Qualification,
    Services,
    Portfolio,
    Testimonial,
    ProjectSection,
    Contact,
    Footer,
  },
});
</script>
