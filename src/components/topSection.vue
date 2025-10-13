<script setup>
AOS.init();
</script>

<template>
    <header id="menu">
        <nav class="navbar navbar-expand-md">
            <div class="container-fluid px-4">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto ms-auto text-end" data-aos="fade-down" data-aos-duration="3000">
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="#allatvilag">Állatvilág</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="#novenyek">Növények</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="#kviz">Kvíz</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <section class="text-center mt-5" >
            <h1 data-aos="fade-up" data-aos-duration="3000">Esőerdők világa</h1>
            <p data-aos="fade-up" data-aos-duration="3000">Fedezd fel a Föld tüdejét</p>
            <button type="button" class="btn btn-light mt-5"><a href="">Mutass többet!</a></button>
        </section>
    </header>
</template>

<style scoped>
header {
    min-height: 945px;
    background-image:linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(../src/assets/hero-bg.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
}

.nav-item a {
    font-size: 17px;
    color: #696969 !important;
}

.nav-item a:hover {
    color: #000 !important;
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

section p{
    color: #696969;
    font-size: 20px;
    font-style: italic;
}

button{
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 10px 15px 10px 15px;
}

button:hover{
    background-color: rgba(255, 255, 255, 0.8);
}

button a{
    text-decoration: none;
    color:black;
    font-size: 17px;
}

</style>