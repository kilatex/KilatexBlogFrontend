<template>
<div v-if="user" class="bg-light">
  <Navbar> </Navbar>
  <div class="container-box d-flex  justify-content-around">
    <div class="articles">
      <h4 class="mb-4">Post Something about tech world!</h4>
      <CreatePost></CreatePost>
      <Posts  postsType="PostsHome"> </Posts>
    </div>
  <Sidebar></Sidebar>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Posts from '../components/Posts.vue';
import CreatePost from '../components/CreatePost.vue';
import {isAuth} from '../middlewares/auth.js';
export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Posts,
    CreatePost
  },
  data(){
    return {
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  mounted(){
    isAuth();
  }
}
</script>

<style>
*{
  text-align: start;
}
.articles{
  width: 60%;
}
/* POST STYLES */
.post-header{
  font-weight: bold;
  display: flex !important;
  justify-content: space-between !important;
  padding-bottom: 10px;
}
.created_at{
  position: relative;
  color: #ccc;
  align-self: center;
}
.post-box{
  margin: 20px 0px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
}
.card-body{
  text-align: justify !important;
}
.image-box img{
  width: 100%;
  max-height: 550px;
  border-radius: 0px;
}
/* FORM STYLES */
.form-box{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  background: white;
}
.avatar-form img, .avatar-post img{
  width: 35px;
  height: 35px;
  border-radius: 50px;
}
.textaera-box textarea{
  width: 100%;
  height: 120px;
  border: 1px solid #ccc;
}
.btn-post{
  width: 120px;
}
@media screen and (max-width: 1030px) {
  .articles{
    width: 80%;
  }
}
@media screen and (max-width: 768px) {
  .avatar-form img{
    display: none;
  }
  .avatar-post img{
    width: 40px;
    height: 40px;
  }
  .container-box{
    width: 100%;    
    padding-left: 3vh;
  }
}
@media screen and (max-width: 440px) {
  .articles{
    width: 95%;
    margin-left: -20px;
  }
}
</style>