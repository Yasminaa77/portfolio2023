<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import Iconify from './Iconify.vue';

</script>


<template>
  <nav class="navbar">
    <div class="navbar-section logo">
        <router-link to="/" class="navbar-link">
          <img src="../assets/logo-green-noSpace.png" alt="hero-image"  height="25" >
          <p>asmina Amirifar</p>
        </router-link>
    </div>
    <div class="navbar-section pages">
      <router-link to="/" class="navbar-link hover-underline-animation">Projects</router-link>
      <router-link to="/About" class="navbar-link hover-underline-animation">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    navName: {
      type: String,
      required: true
    },
    navTo: {
      type: String,
      required: true
    },
    navIcon: {
      type: String,
      required: true
    },
    navColor: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 0.7rem;
  top: 0;

  /*mask-image: linear-gradient(to bottom,black 10%,transparent 80%);*/
  backdrop-filter: blur(4px);
  border-bottom: 0.4mm solid rgba(57,53,61,0.4);

}

.navbar-section {
  margin: 0 20px;
  color: #373a3c;
  font-size: 0.75rem;
  /*font-family: "Roboto-Regular";*/
  text-decoration: none;
  display: flex;
  align-items:center ;
  justify-content: flex-start;
}

.navbar-section .pages{
  justify-content: flex-end;

}

.navbar-section .logo{
  justify-content: flex-start;
}


.navbar-link {

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pages .navbar-link {
  color: #0F1438;
  font-size: 14px;
  font-family: "Roboto-Regular", sans-serif;
  margin-right:15px;

}

.logo .navbar-link{
  color: #0F1438;
  font-size: 18px;
  font-family: "Roboto-Regular", sans-serif;
  margin-left:25px;

}



/*<!--      https://www.30secondsofcode.org/css/s/hover-underline-animation-->*/

.hover-underline-animation {
  display: inline-block;
  position: relative;
  /*color: #0087ca;*/
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #5EC19E;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

</style>