<script setup>
import Tippek from '../components/Tippek.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <section>
    <div class="hero_bg"></div>
  </section>
  <Tippek/>
  <section>
    <Footer/>
  </section>
</template>

<style scoped>
.hero_bg {
  min-height: 6vh;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
    url('../assets/hero-bg.jpeg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
}

</style>
