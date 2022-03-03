<template>
<div class="">
  <Navbar> </Navbar>
  <div class="home">
    <h1>Hola</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Navbar
  }
}
</script>

<style>
h1{
  text-align: center;
}
</style>