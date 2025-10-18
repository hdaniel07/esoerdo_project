<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue'
import Esoerdok from '../components/Esoerdok.vue'
import Wildlife from '../components/Wildlife.vue'
import Footer from '../components/Footer.vue'

let showHandler, hideHandler

onMounted(async () => {
  // Várjuk meg, hogy a DOM tényleg kész legyen
  await nextTick()

  const navbar = document.getElementById('navbarSupportedContent')
  const hero = document.querySelector('.hero_bg')

  if (navbar && hero) {
    // Eseménykezelők létrehozása
    showHandler = () => { hero.style.minHeight = '30vh' }
    hideHandler = () => { hero.style.minHeight = '6vh' }

    // Bootstrap események figyelése
    navbar.addEventListener('show.bs.collapse', showHandler)
    navbar.addEventListener('hide.bs.collapse', hideHandler)
  } else {
    console.warn('Nem található navbar vagy hero_bg elem.')
  }
})

onUnmounted(() => {
  // Takarítás, ha az oldalról elnavigálunk
  const navbar = document.getElementById('navbarSupportedContent')
  if (navbar && showHandler && hideHandler) {
    navbar.removeEventListener('show.bs.collapse', showHandler)
    navbar.removeEventListener('hide.bs.collapse', hideHandler)
  }
})
</script>

<template>
  <div class="hero_bg"></div>
  <Esoerdok />
  <Wildlife />
  <footer><Footer /></footer>
  <a href="#" class="back-to-top"><i class="bi bi-chevron-double-up"></i></a>
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
  transition: min-height 0.4s ease;
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  color: #000;
  text-decoration: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0,0,0,1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}
</style>