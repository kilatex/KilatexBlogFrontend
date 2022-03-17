<template>
      <div>
    <Navbar> </Navbar>

    <div class="container-box">
      
      <div class="row" v-if="user">
        <div class="profile-box shadow col-md-10 offset-md-1 bg-success">
           <div class="img-box">
             <span v-if="user.image">
             <img src="../assets/img/profile1.png" class="avatar-profile shadow" alt="">
             </span>
             <span v-else>
              <img src="../assets/img/profile-default.png" class="avatar-profile shadow" alt="">             
             </span>
          </div>  
          <div class="name">
            <h3 class="fw-bold text-center">{{user.name}}  {{user.surname}} - @{{user.username}}</h3>
          </div>  
        </div>

        <div class="about  col-md-10 offset-md-1">
          <h5>About {{user.name}}</h5>
          <p>
            <span v-if="user.description">{{user.description}}</span>
            <span v-else>{{user.name}} is a Kilatex Blog User!</span>
          </p>
        </div>

        <div class="posts  col-md-10 mt-4  offset-md-1">

          <h3 class="fw-bold text-center">{{user.name}}'s Posts</h3>
          
            <div class="d-flex posts-profile justify-content-around">

              <div class="articles">
              <Posts  postsType="PostsByUser" :userPost="user"/>
            
              </div>
              <Sidebar></Sidebar>



            </div>

        </div>
      </div>
      <div v-else>
        <h2>User Not Found</h2>
      </div>
    </div>
      <ModalNewPost></ModalNewPost>
  </div>
</template>

<style>
.profile-box{
  border-radius: 10px;
  padding-top: 50px;
  margin-bottom: 60px;
}
.name{
  position: relative;
  top: 50px;
}
.img-box{
  text-align: center;
  position: relative;
  top: 40px;
}
.avatar-profile{
  width: 80px;
  height: 80px;
  border-radius: 150px;
}
.posts{
  display: flex;
  flex-direction: column;
  align-items: center !important;
}
.sidebar-container{
  width: 230px;
  margin-left: 50px;
  

}
.sidebar-container .sidebar{
  width: 100%;
  height: auto;
}

@media screen and (max-width: 1280px){
.sidebar-container .sidebar{
  width: 200px !important;
  height: auto;
}
}

@media screen and (max-width: 1030px){
 .sidebar-container{
    display: none !important;
  }
}
</style>

<script>
import Navbar from '../components/Navbar.vue';
import ModalNewPost from '../components/ModalNewPost.vue';
import Posts from '../components/Posts.vue';
import Sidebar from '../components/Sidebar.vue';
import axios from 'axios';
import global from '../global';
export default {
    name: 'Profile',
    components:{
        Navbar,
        ModalNewPost,
        Posts,
        Sidebar
    },  
    data(){
      return{
      id_user: null,
      url: global.url,
      user: [],
      posts: [],
      type: ''
      }
    },
    mounted(){
      this.id_user = this.$route.params.id;

      axios.get(this.url+'api/get-user/'+this.id_user).
            then(res => {
                this.user = res.data.user;
            }).
            catch(error => {
                console.log(error);
            });
    },
    methods:{
     
    }
} 
</script>