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
            <h3 class="fw-bold text-center">Josep Guardiola</h3>
          </div>  
        </div>

        <div class="about  col-md-10 offset-md-1">
          <h5>About Josep</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus eos, cumque dolor magnam illo aut, aliquam unde quibusdam vero, veritatis iure at dicta ad. Ipsa doloribus hic magnam deleniti!</p>
        </div>

        <div class="posts  col-md-10 mt-4  offset-md-1">

          <h3 class="fw-bold text-center">Josep's Posts</h3>
          
            <div class="d-flex   justify-content-around">
              <div class="articles">
              <Posts></Posts>
            
              </div>
              <div class="sidebar-container">
              <Sidebar></Sidebar>

              </div>


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
</style>

<script>
import Navbar from '../components/Navbar.vue';
import ModalNewPost from '../components/ModalNewPost.vue';
import Posts from '../components/Posts.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
    name: 'Profile',
    components:{
        Navbar,
        ModalNewPost,
        Posts,
        Sidebar
    }
} 
</script>