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
            <RouterLink class="nav-link" to="/" active-class="active-link">Főoldal</RouterLink>
          </li>
          <li class="nav-item mx-3">
            <RouterLink class="nav-link" to="/wildlife" active-class="active-link">Élővilág</RouterLink>
          </li>
          <li class="nav-item mx-3">
            <RouterLink class="nav-link" to="/tips" active-class="active-link">Tippek</RouterLink>
          </li>                   
          <li class="nav-item mx-3">
            <RouterLink class="nav-link" to="/maps" active-class="active-link">Térkép</RouterLink>
          </li>
          <li class="nav-item mx-3">
            <RouterLink class="nav-link" to="/quiz" active-class="active-link">Kvíz</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
.nav-item {
  font-size: 17px;
}

.nav-link {
  color: #696969 !important;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #000 !important;
}

.active-link {
  color: #000 !important;
  font-weight: 500;
}

nav {
  background-color: transparent !important;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
</style>
