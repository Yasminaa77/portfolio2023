<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!--  Navbar can be here -->

  <main>
    <RouterView />
  </main>
</template>

<style scoped>

/*@font-face {*/
/*  font-family: "Nunito-Regular";*/
/*  src: local("Nunito"),*/
/*  url('/assets/fonts/Nunito-Regular.ttf') format("truetype");*/
/*}*/

/*@font-face {*/
/*  font-family: "Nunito-Bold";*/
/*  src: local("Nunito"),*/
/*  url('/assets/fonts/Nunito-Bold.ttf') format("truetype");*/
/*}*/

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
}
.navbarStyles{
  z-index:200;
}
</style>
