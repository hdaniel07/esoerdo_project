<script setup>
    import Map from '../components/Map.vue'; 
</script>

<template>
    <div class="hero_bg">
        <Map></Map>
    </div>
</template>

<style scoped>
.hero_bg {
    min-height: 100vh;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('../assets/hero-bg.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin: 0;
    padding-top: 64px;
}
</style>
