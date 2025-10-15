<script setup>
    import Quiz from '../components/Quiz.vue';
</script>

<template>
    <div class="hero_bg">
        <Quiz></Quiz>
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
    /* ha eddig absolute volt, cseréld le erre */
    margin: 0;
    padding-top: 64px;
}
</style>
