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
<!--    <div class="center" >-->
      <div class="container">
        <div class="card">
          <div class="card-item">
            <img src="https://lh3.googleusercontent.com/-h9Vw01ffbKY/YGnJU35eHBI/AAAAAAAACAE/FbXDvjOc5ZojyWTbxkR6zDqG3dTdCNimgCLcBGAsYHQ/1.jpg" alt="" />
            <div class="card-details">
              <h1>Card 1</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div class="card-item">
            <img src="https://lh3.googleusercontent.com/-LXockBZNMv4/YGnJU84E1QI/AAAAAAAACAA/wLGSF1b9poMk6Mk-XtvkBK0TfK9n1iH7ACLcBGAsYHQ/2.jpg" alt="" />
            <div class="card-details">
              <h1>Card 2</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div class="card-item">
            <img src="https://lh3.googleusercontent.com/-ETl5RnIakrw/YGnJU9vu2lI/AAAAAAAAB_8/835dhd1iImsj2gOZXnQ4reXpdp1fQlHUQCLcBGAsYHQ/3.jpg" alt="" />
            <div class="card-details">
              <h1>Card 3</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div class="card-item">
            <img src="https://lh3.googleusercontent.com/-q2LZJIIwqUA/YGnJU3Gz9yI/AAAAAAAACAI/aBrT1HBsGOM4yCINuhgFNDU3f_8f024cgCLcBGAsYHQ/4.jpg" alt="" />
            <div class="card-details">
              <h1>Card 4</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
<!--      </div>-->













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
/*@import url('./scss/main.scss');*/
/*@import url('../../scss/main.scss');*/


/*body{*/
/*  margin: 0;*/


/*  background-color: #ffffff;*/
/*  !*opacity: 0.8;*!*/
/*  !*background-image:  radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #ffffff 0.5px);*!*/
/*  !*background-size: 20px 20px;*!*/
/*  !*background-position: 0 0,10px 10px;*!*/
/*}*/


#header{
  width:100%;
  /*background: rgb(36,36,36);*/
  /*background: linear-gradient(0deg, rgba(36,36,36,0) 0%, rgba(239,238,216,1) 100%);*/
  height:80vh;
  margin: 0;
  font-family: "Roboto-Regular", sans-serif;

  display: flex;
  justify-content: center; /*change when hero text is centre*/
  align-items: center;

}
#headerContent{
  /*margin:0 5%;*/ /*change when hero text is centre*/

  /*margin: 0 auto; width: 960px;*/
  text-align: center;  /*change when hero text is centre*/
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
  font-size: 30px;
  margin: 5px;
  color: #0F1438;


}
.red{
  color: #C82c28;
  font-weight: bold;
}











</style>