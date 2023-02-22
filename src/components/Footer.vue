<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import Iconify from './Iconify.vue';

</script>


<template>
  <footer class="footer">
    <img class="logo-y" src="../assets/logo-green-noSpace.png" alt="hero-image"  >
    <div class="icons">
      <span>icon1</span>
      <span>icon2</span>
      <span>icon3</span>
    </div>
    <p>yaasminaa77@gmail.com</p>


    <p class="copyRight">© 2023 by Yasmina Amirifar</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
  },
  mounted() {
  },
  data(){
    return {

    }
  },
  props: {
  },
}
</script>

<style scoped>

.footer {

  /*position:relative; !* needed for footer positioning*!*/
  /* center, not in IE5 */


  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /*padding: 0.4rem;*/
  /*background-color: #C82c28;*/
  margin: 6% 0 0 0;
  padding-top: 20px;
  height:150px;

  backdrop-filter: blur(4px);
  border-top: 0.4mm solid rgba(57,53,61,0.4);

  font-size: 14px;
  font-family: "Roboto-Medium", sans-serif;
  color:#0F1438;

}

p{
  margin:0;
}

.copyRight{
  position: absolute;
  bottom: 0;

  background-color: red;

  margin:30px 0 10px 0;
  font-family: "Roboto-Regular", sans-serif;
  color:#333333;
  font-size: 12px;

}

/*.navbar-section {*/
/*  margin: 0 20px;*/
/*  color: #373a3c;*/
/*  font-size: 0.75rem;*/
/*  !*font-family: "Roboto-Regular";*!*/
/*  text-decoration: none;*/
/*  display: flex;*/
/*  align-items:center ;*/
/*  justify-content: flex-start;*/
/*}*/

.logo-y, img{
  height: 30px;
}


@media(max-width:620px){
  .logo-name{
    display:none;
  }





}


</style>