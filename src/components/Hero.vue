<script setup>
AOS.init();
</script>

<template>
    <main>
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
                                <a class="nav-link" href="#mutass">Rólunk</a>
                            </li>
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
            <section class="text-center mt-5">
                <h1 data-aos="fade-up" data-aos-duration="3000">Esőerdők világa</h1>
                <p data-aos="fade-up" data-aos-duration="3000">Fedezd fel a Föld tüdejét</p>
                <a href="#mutass" class="btn btn-light mt-5 mutass">Mutass többet!</a>
            </section>
        </header>
        <div id="mutass" class="text-center container whatIs" data-aos="fade-up" data-aos-duration="1500">
            <h2>Fedezd fel a Föld tüdejét – az esőerdőket</h2>
            <p>Az esőerdők bolygónk legősibb, leggazdagabb és legfontosabb ökoszisztémái közé tartoznak. A Föld
                felszínének
                csupán 6%-át borítják, mégis az ismert élőlényfajok több mint fele itt él. Ismerd meg az esőerdők
                varázslatos világát, azok növény- és állatvilágát, szerepüket a globális klímában, és azt is, hogyan
                segíthetünk megóvni őket.</p>
        </div>
    </main>
    <div class="container bg-white">
        <div class="elements">
            <div class="element1 d-flex">
                <div class="bg col-lg-4"></div>
                <div class="szoveg col-lg-6">
                    <h3>Mi az esőerdő?</h3>
                    <p>Az esőerdők olyan sűrű, nedves erdők, ahol évente több mint 2000 mm csapadék hullik. Ezek a
                        területek általában az Egyenlítő mentén helyezkednek el – például az Amazonas-medencében,
                        Közép-Afrikában vagy Délkelet-Ázsiában.

                        A trópusi esőerdők gazdag biodiverzitásukról ismertek: a világ növény- és állatfajainak több
                        mint fele itt él, gyakran olyan fajok is, amelyek máshol nem fordulnak elő.</p>
                </div>
            </div>
            <div class="element">

            </div>
        </div>
    </div>
</template>

<style scoped>
main {
    background-color: black;
    padding-bottom: 50px;
}

header {
    min-height: 945px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(../src/assets/hero-bg.jpeg);
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

section p {
    color: #696969;
    font-size: 20px;
    font-style: italic;
}

.mutass {
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 7px 15px 7px 15px;
    text-decoration: none;
    color: black;
    font-size: 17px;
    box-shadow: 0 4px 15px rgba(0,0,0,1);
    transition: transform 0.3s ease;
}

.mutass:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-5px);

}

.container {
    width: 50%;
    margin-top: 90px;
}

h2 {
    font-family: "Noto Sans", sans-serif;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
}

.whatIs p {
    color: rgba(255, 255, 255, 0.6);
}

.element1 .bg {
    width: 600px;
    height: 300px;
    background-image: url(../assets/element1pic.jpg);
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
}

.element1 .szoveg {
    color: #000;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;

}
.element1 .szoveg p{
    color: #696969;
}
</style>