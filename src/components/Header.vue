<template>
    <header class="header bg-navbar" id="header">
      <div class="header_toggle ">
        <div>
          <i class="fas fa-bars text-white header-toggle" @click.prevent="toggle"  id="header-toggle"></i>
        </div> 
      </div>
      <SearchBar/>
      <div class="header_img">
          <router-link :to="{ name: 'MyProfile'}">
            <span v-if="user && user.image">
              <img src="../assets/img/profile1.png" alt="Avatar Profile">
            </span>
            <span v-else>
            <img src="../assets/img/profile-default.png" alt="Avatar Profile">
            </span>
          </router-link>
      </div>
    </header>
</template>


<script>
import SearchBar from './SearchBar.vue';
export default {
  name : 'Header',
  components:{
    SearchBar
  },
  data(){
    return{
      search: ''
    }
  },
  methods: {

  },
}
</script>