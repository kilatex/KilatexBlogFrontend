<template>
<div class="">
  <Navbar> </Navbar>
  <div class="container-box d-flex justify-content-around">
    <div>
      <h3>Posts</h3>
      <div class="card" style="width: 45rem;">
        <div class="card-header">
          <a href="">Username</a>
        </div>
        <img  src="../assets/img/1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div>
      <h3>sidebar</h3>
    </div>
  </div>
</div>

</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style>
*{
  text-align: start;
}
</style>