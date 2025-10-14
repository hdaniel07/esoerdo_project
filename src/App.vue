<script setup>
import Hero from "./components/Hero.vue"
import Rolunk from "./components/Rolunk.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <div class="black-bg">
    <div class="hero_bg">
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid px-4">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
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
      <Hero></Hero>
    </div>
    <div id="mutass" class="text-center container whatIs" data-aos="fade-up" data-aos-duration="1500">
        <h2>Fedezd fel a Föld tüdejét – az esőerdőket</h2>
        <p>Az esőerdők bolygónk legősibb, leggazdagabb és legfontosabb ökoszisztémái közé tartoznak. A Föld
          felszínének
          csupán 6%-át borítják, mégis az ismert élőlényfajok több mint fele itt él. Ismerd meg az esőerdők
          varázslatos világát, azok növény- és állatvilágát, szerepüket a globális klímában, és azt is, hogyan
          segíthetünk megóvni őket.</p>
      </div>
  </div>

  <Rolunk></Rolunk>
  <Footer></Footer>
</template>

<style scoped>

.black-bg{
  background-color: #000;
  min-height: 1400px;
}
.hero_bg {
  min-height: 950px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(../src/assets/hero-bg.jpeg) !important;
  background-position: center;
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


.mutass {
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 7px 15px 7px 15px;
  text-decoration: none;
  color: black;
  font-size: 17px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 1);
  transition: transform 0.3s ease;
}

.mutass:hover {
  background-color: rgba(255, 255, 255, 0.8);
  transform: translateY(-5px);

}

h2 {
  font-family: "Noto Sans", sans-serif;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}

.whatIs {
  margin-top: 200px;
}

.whatIs p {
  color: rgba(255, 255, 255, 0.6);
}
</style>
