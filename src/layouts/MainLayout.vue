<script setup>
import Hero from '../components/Hero.vue'
import Fedezd from '../components/Fedezd.vue'
import Rolunk from '../components/Rolunk.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="black-bg">
    <div class="hero_bg">
      <Hero />
    </div>
    <Fedezd />
  </div>
  <Rolunk />
  <Footer />
</template>

<style scoped>
.black-bg {
  background-color: #000;
  min-height: 1400px;
}
.hero_bg {
  min-height: 100vh;
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url('../assets/hero-bg.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative; /* ha eddig absolute volt, cseréld le erre */
  margin: 0;
  padding-top: 64px;
}

</style>
