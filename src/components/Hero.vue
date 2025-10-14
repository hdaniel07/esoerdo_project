<script setup>
AOS.init();
</script>

<template>
    <main>
        <header id="menu">
            <section class="text-center mt-5">
                <h1 data-aos="fade-up" data-aos-duration="3000">Esőerdők világa</h1>
                <p data-aos="fade-up" data-aos-duration="3000">Fedezd fel a Föld tüdejét</p>
                <a href="#mutass" class="btn btn-light mt-5 mutass">Mutass többet!</a>
            </section>
        </header>
    </main>
</template>

<style scoped>
main {
    padding-bottom: 150px;
}

section h1 {
    font-family: "Noto Sans", sans-serif;
    font-size: 70px;
    font-weight: 200;
    font-style: italic;
    font-variation-settings: "wdth" 100;
    color: #fff;
    user-select: none;
    pointer-events: none;
    color: #000;
}

section p {
    color: #696969;
    font-size: 20px;
    font-style: italic;
}




</style>