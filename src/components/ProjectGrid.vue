<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>





<template>

  <!--    <div class="center" >-->
  <div class="container">
    <div class="card">

      <div class="card-item">
        <router-link to='/Phished'>
          <div class="card-title">
            <h3>Phished</h3>
          </div>
          <div class="image-container">
            <img src="../assets/homepage-phished.jpg" alt="" />
          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A web application that combats phishing cybercrime by demonstrating real-life examples and allowing users to participate in realistic scenarios.</p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to='/TrashQueens'>
          <div class="card-title">
            <h3>Trash Queens</h3>
          </div>
          <div class="image-container">
            <img src="../assets/homepage-tq.jpg" alt="" />
          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>An educational game promoting proper waste management practices by teaching players how to recycle effectively.
                .</p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to='/CodeSnippet'>
          <div class="card-title">
            <h3>Code Snippet</h3>
          </div>
          <div class="image-container">
            <img src="../assets/homepage-codeSnippet.jpg" alt="" />

          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A CRUD React application designed for developers to share their code snippets with others and interact with other developers' code. </p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to='/Cibo'>
          <div class="card-title">
            <h3>My Cibo</h3>
          </div>
          <div class="image-container">
            <img src="../assets/homepage-cibo.jpg" alt="" />
          </div>
          <div class="card-overlay">
            <div class="card-details">
              <p>A food management app that not only tracks expiration dates but also suggests recipes based on available ingredients and more.
              </p>
            </div>
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "projects-grid",
  methods: {
  },
  mounted() {
  },
  data(){
  },
  props: {
  },
}


</script>

<style scoped>

</style>