<script setup>
//import Card from '../components/home/Card.vue';
import Grid from '../components/projects-grid.vue';
</script>

<template>

  <div id="header">
    <div id="headerContent">
      <!--      <img class="doodle" src="../assets/doodle.png">-->

      <p class="red"> Hi, My name is <a href="#">Yasmina</a></p>
      <h3 class="hero-text">I'm a Full-Stack <br>Developer</h3>
      <p class="header-desc">
        <!--        I bring the creativity, the coding skills, and a little bit of rain-or-shine spirit to the table.<br>-->
        <!--        This portfolio is a window into <a href="#" class="header-links">my projects</a> and <a href="#" class="header-links">  who I am</a>.-->
      </p>

    </div>
    <img class="doodle" src="../assets/doodle.png">
  </div>
<div class="main">
  <h1>Projects</h1>

  <Grid/>
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
/*@import url('./scss/main.scss');*/
/*@import url('../../scss/main.scss');*/

.doodle{
  opacity: 0.9;
  width: 200px;
}
#header{
  width:100%;

  height:80vh;
  max-width: 1200px;
  margin: 0;

  display: flex;
  justify-content: space-between;
  /*justify-content: flex-start; !*change when hero text is centre*!*/
  align-items: center;


}
#headerContent{
 /*margin:0 5%; !*change when hero text is centre*!*/
  /*margin: 0 auto; width: 960px;*/
  /*text-align: left;  !*change when hero text is centre*!*/
  /*max-width:768px;*/
}

#header a {
  text-decoration: none;
  color: #C82c28;
  font-family: 'Roboto-Medium';

  /*font-weight: 900;*/
  position: relative;
}

/* #header a::before {*/
/*  content: '';*/
/*  background-color: rgba(94, 193, 158, .5);*/
/*  position: absolute;*/
/*  left: -1px;*/
/*  bottom: -5px;*/
/*  width: 100%;*/
/*  height: 3px;*/
/*  z-index: -1;*/
/*  transition: all .3s ease-in-out;*/
/*}*/

/*#header a:hover::before {*/
/*  bottom: -3px;*/
/*  background-color: rgba(94, 193, 158, 1);*/

/*  !*background-color:#0F1438;*!*/

/*  !*height: 100%;*!*/
/*}*/




.hero-text{
  font-size: 75px;
  margin: 5px 0 ;
  color: #0F1438;
  font-family: "Rajdhani-Light",monospace;


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
  /*color: #5ec19e;*/
}
.red{
  color: #C82c28;
  font-weight: bold;
}


@media(max-width:768px) {
  #header {
  flex-direction: column;
    justify-content: space-around;
    height: 60vh;
    margin:5vh;
    text-align: center;

  }


}

@media(max-width:620px) {
  .hero-text{
    font-size: 50px;
  }


}
</style>