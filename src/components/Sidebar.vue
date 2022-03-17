<template>

  <div class="sidebar-container ">
     <div class="sidebar bg-white ">
      <div class="sidebar-box">
      <div class="profile">
          <span v-if="user.image != null">
            <img src="../assets/img/profile1.png"   class="avatar-sidebar" alt="Avatar Profile">
          </span>
          <span v-else>
            <img src="../assets/img/profile-default.png"   class="avatar-sidebar" alt="Avatar Profile">
          </span>
        <router-link to="/profile" class="fw-bold">{{user.username}}</router-link>
      </div>
      <h4 class="text-center text-primary fw-bold">Kilatex Blog</h4>

      <h6>Recent posts about</h6>
      <ul>
          <li v-for="category in categories.slice(0,5)" :key="category.id">
            <router-link :to="{name: 'PostsByCategory'  ,params: {category: category.name}}">{{category.name}}</router-link>
          </li>
          <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalSearchByCategory">Other Categories</a></li>
      </ul>

      <h6>Find New Users</h6>
      <ul >
        <li v-for="user in users" :key="user.id"  class="my-3">
          <router-link :to="{name:'Profile',params:{id:user.id}}" class="avatar-list">
            <img src="../assets/img/2.jpg" class="" alt="" /> @{{user.username}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <search-by-category :categories="categories"></search-by-category>
  </div>

 


 
</template>

<style>

/* SIDEBAR STYLES */
.sidebar-container{
  width: 100%;
}
.sidebar{
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 76px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  border-radius: 5px;
  height: auto;
}
.sidebar-box{
  padding: 20px;
}
.sidebar ul li{
  list-style: none;
  margin-left: -15px;
}
.avatar-sidebar{
  width: 60px;
  height: 60px;
  border-radius: 50px;
}
.profile{
  text-align: center;
  margin-bottom: 15px;
}
.profile a{
  display: block;
  text-align: center;
}
.avatar-list img{
  width: 30px;
  height: 30px;
  border-radius: 50px;
}
@media screen and (max-width: 1280px){
  .sidebar-box{
    padding: 5px;
  }
}
@media screen and (max-width: 1030px){
 .sidebar{
    display: none !important;
  }
}
</style>

<script>
import SearchByCategory from "./SearchByCategory.vue";
import axios from 'axios';
import global from '../global'
export default {
  name: "Sidebar",
  components:{
    SearchByCategory
  },
  data(){
    return{
      categories: [],
      url: global.url,
      user: JSON.parse(localStorage.getItem('user')),
      headers : {
            'Authorization': localStorage.getItem('token')
          },
      users: []
    }
  },
  mounted(){
    this.getCategories();
    this.getLatestUsers();
  },
  methods:{
    getCategories(){
      axios.get(this.url+'api/category').
          then(response => {
            this.categories = response.data;
          }).
          catch(error => {
            console.log(error);
          })
    },
    getLatestUsers(){
      axios.get(this.url+'api/latest-users',{headers: this.headers}).
          then(res => {
            this.users = res.data.users;
            console.log(this.users);
          }).
          catch(err => {
            console.log(err);
          })
    }
  }
};
</script>