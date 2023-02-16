<script setup>
import Navbar from './components/Navbar.vue'
</script>


<style scoped>

@font-face {
  font-family: 'Roboto-Regular';
  src: local("Roboto"),
  url('/src/assets/fonts/Roboto-Regular.ttf') format("truetype");
}

@font-face {
  font-family: "Roboto-Light";
  src: local("Roboto"),
  url('/src/assets/fonts/Roboto-Light.ttf') format("truetype");
}

@font-face {
  font-family: "Rajdhani-Regular";
  src: local("Rajdhani"),
  url('/src/assets/fonts/Rajdhani-Regular.ttf') format("truetype");
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5.5rem;
  overflow-x:hidden;
  /*background-color: black;*/
}
.navbarStyles{
  z-index:200;
}
</style>


<template>
  <main>
    <Navbar class="navbarStyles"/>
    <RouterView />
  </main>
</template>
