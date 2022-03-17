<template>
      <div>
    <Navbar> </Navbar>

    <div class="container-box">
      
      <div class="row">
        <div class="profile-box shadow col-md-10 offset-md-1 bg-success">
           <div class="img-box ">
             <img src="../assets/img/profile1.png" class="avatar-profile shadow" alt="">
          </div>  
          <div class="name">
            <h3 class="fw-bold text-center">{{user.name}}  {{user.surname}}</h3>
          </div>  
        </div>

        <div class="about  col-md-10 offset-md-1">
          <h5>About Josep</h5>
          <p>
            <span v-if="user.description">{{user.description}}</span>
            <span v-else>{{user.name}} is a Kilatex Blog User!</span>
          </p>
        </div>

        <div class="posts  col-md-10 mt-4  offset-md-1">

          <h3 class="fw-bold text-center">Josep's Posts</h3>
          
            <div class="d-flex   justify-content-around">
              <div class="articles">
              <Posts></Posts>
            
              </div>
              <Sidebar></Sidebar>



            </div>

        </div>
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
    mounted(){
      this.id_url = this.$route.params.id;

      axios.get(this.url+'api/get-user/'+this.id_url).
            then(res => {
                this.user = res.data.user;
            }).
            catch(error => {
                console.log(error);
            });
    },  
    data(){
      return{
      id_url: null,
      url: global.url,
      user: []
      }
    }
} 
</script>