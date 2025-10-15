<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid px-4">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto ms-auto text-end" data-aos="fade-down" data-aos-duration="3000">
          <li class="nav-item mx-3">
            <RouterLink class="nav-link" to="/">Főoldal</RouterLink>
          </li>
          <li class="nav-item mx-3">
            <RouterLink class="nav-link" to="/quiz">Kvíz</RouterLink>
          </li>
          <li class="nav-item mx-3">
            <RouterLink class="nav-link" to="/tips">Tippek</RouterLink>
          </li>
          <li class="nav-item mx-3">
            <RouterLink class="nav-link" to="/map">Térkép</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
.nav-item { font-size: 17px; color: #696969 !important; }
.nav-item:hover { color: #000 !important; }
nav{
  background-color: transparent !important;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
</style>
