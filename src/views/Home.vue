<script setup>
//import Card from '../components/home/Card.vue';

</script>

<template>
  <div class="development">
  <div class="center" >
    <img src="../assets/logo_dark.png" alt="hero-image" width="50" height="60" >
    <h2>Under Development</h2>
    <p> A cool portfolio is getting developed </p>
  </div>
  </div>


</template>

<script>
export default {
  name: "Home",
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

.development{
  display: flex;
  padding:20px;
}

.center{
  text-align: center;
  align-items: center;
  justify-content: center;
}

</style>