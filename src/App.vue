<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <main>
    <Navbar class="navbarStyles"/>
    <RouterView />
  </main>
</template>

<style scoped>

@font-face {
  font-family: "Roboto-Regular";
  src: local("Roboto"),
  url('/assets/fonts/Roboto-Regular.ttf') format("truetype");
}

@font-face {
  font-family: "Roboto-Light";
  src: local("Roboto"),
  url('/assets/fonts/Roboto-Light.ttf') format("truetype");
}

/*@font-face {*/
/*  font-family: "FuzzyBubbles-Regular";*/
/*  src: local("FuzzyBubbles"),*/
/*  url('/assets/fonts/FuzzyBubbles-Regular.ttf') format("truetype");*/
/*}*/

/*@font-face {*/
/*  font-family: "FuzzyBubbles-Bold";*/
/*  src: local("FuzzyBubbles"),*/
/*  url('/assets/fonts/FuzzyBubbles-Bold.ttf') format("truetype");*/
/*}*/

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
