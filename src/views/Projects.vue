<script setup>
//import Card from '../components/home/Card.vue';

</script>

<template>
  <div id="header">
    <div id="headerContent">
      <p class="red"> Hi, My name is Yasmina</p>
      <h3 class="hero-text">A Full-Stack Web Developer</h3>
    </div>
  </div>

  <div class="view-main">
    <div class="center" >
      <!--    <img src="../assets/logo_dark.png" alt="hero-image" width="50" height="60" >-->
    <h3>Under Development</h3>
    <h3>Under Development</h3>
      <h3>Under Development</h3>
      <h3>Under Development</h3>
      <h3>Under Development</h3>
      <h3>Under Development</h3>
      <h3>Under Development</h3>
      <h3>Under Development</h3>
      <h3>Under Development</h3>
      <h3>Under Development</h3>
      <h3>Under Development</h3>



    </div>
  </div>

</template>

<script>
export default {
  name: "Projects",
  methods: {

  },
  computed: {},
  props: {},
  data() {
    return {

    };
  },
  components: {

  }
};
</script>

<style>


body{
  margin: 0;



  background-color: #ffffff;
  opacity: 0.8;
  background-image:  radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #ffffff 0.5px);
  background-size: 20px 20px;
  background-position: 0 0,10px 10px;
}


#header{
  /*padding-top: 200px;*/
  width:100%;
  /*background: rgb(36,36,36);*/
  /*background: linear-gradient(0deg, rgba(36,36,36,0) 0%, rgba(239,238,216,1) 100%);*/
  height:70vh;
  margin: 0;
  font-family: "Roboto-Regular", sans-serif;






  display: flex;
  justify-content: center;
  align-items: center;

}
#headerContent{
  /*margin: 0 auto; width: 960px;*/
  text-align: center;
}

.view-main{
  font-family: "Roboto-Regular", sans-serif;
  /*margin-top: 20px;*/
  display: flex;
  /*padding:20px;*/
}

.center{
  text-align: center;
  align-items: center;
  justify-content: center;
}



.hero-text{
  font-size: 40px;
  margin: 5px;
  color: #0F1438;


}
.red{
  color: #C82c28;
  font-weight: bold;
}

</style>