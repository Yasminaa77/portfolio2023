<script setup>
//import Card from '../components/home/Card.vue';
import Grid from '../components/projects-grid.vue';
</script>

<template>

  <div id="header">
    <div id="headerContent">
<!--      <img class="doodle" src="../assets/doodle.png">-->

      <p class="red"> Hi, My name is Yasmina</p>
      <h3 class="hero-text">I'm a Full-Stack <br>Developer</h3>
      <p class="header-desc">
<!--        I bring the creativity, the coding skills, and a little bit of rain-or-shine spirit to the table.<br>-->
<!--        This portfolio is a window into <a href="#" class="header-links">my projects</a> and <a href="#" class="header-links">  who I am</a>.-->
      </p>

    </div>
    <img class="doodle" src="../assets/doodle.png">
  </div>

    <Grid/>
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
/*@import url('./scss/main.scss');*/
/*@import url('../../scss/main.scss');*/

.doodle{
  opacity: 0.9;
  width: 200px;
}
#header{
  width:100%;

  height:80vh;
  margin: 0;
  font-family: "Roboto-Regular";
  /*font-family: 'Courier New', monospace;*/


  display: flex;
  /*gap:40px;*/

justify-content: space-around;
  /*justify-content: flex-start; !*change when hero text is centre*!*/
  align-items: center;


}
#headerContent{
  margin:0 5%; /*change when hero text is centre*/
  /*margin: 0 auto; width: 960px;*/
  text-align: left;  /*change when hero text is centre*/
  /*max-width:768px;*/
}


.view-main{
  font-family: "Roboto-Regular", sans-serif;
  /*margin-top: 20px;*/
  /*display: flex;*/
  /*padding:20px;*/
}

/*.center{*/
/*  text-align: center;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*}*/

.hero-text{
  font-size: 35px;
  margin: 5px 0 ;
  color: #0F1438;
}

.header-desc{
  font-size: 25px;
  margin:35px 0;
  color: #0F1438;
  font-weight: lighter;

}

.header-links{
  /*text-decoration: none;*/
  /*color: #C82c28;*/
  color: #5ec19e;


}
.red{
  color: #C82c28;
  font-weight: bold;
}

</style>