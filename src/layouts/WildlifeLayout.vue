<script setup>
import Esoerdok from '../components/Esoerdok.vue';
import Wildlife from '../components/Wildlife.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="hero_bg">

    </div>
    <Esoerdok/>
    <Wildlife/>
    <footer>
        <Footer/>
    </footer>
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