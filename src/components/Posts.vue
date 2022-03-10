<template>  
    <div class="" v-if="posts" >
      <div class="posts" v-for="post in posts" :key="post.id">
        <div class=" post-box bg-white"    >
          <div class="post-header p-2 ">
            <div class="avatar-post">
              <router-link to="/profile/id">
                <img src="../assets/img/profile1.png" alt="Avatar Profile"> {{post.user.username}}
                </router-link>
            </div>
            <div class="created_at "> {{post.created_at}}
            </div>
          </div>
          <div class="image-box">
          <img  src="../assets/img/2.jpg" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title fw-bold">{{post.title}}</h5>
            <p class="card-text">  {{post.content}} </p>
            <div class="buttons-post d-flex">
              <div class=""> <a href="" class="text-success fs-5"><i class="fas fa-thumbs-up"></i> 250</a></div>
              <div class=" mx-3"> <a href="" class="text-danger fs-5"><i class="fas fa-thumbs-down"></i> 255</a></div>

          

            </div>
          </div>
        </div>
      
      </div>  
    </div>
    

</template>

<style>

</style>


<script>
import axios from 'axios';
export default {
    name: 'Posts',
    mounted(){
      this.getPosts();
    },
    data(){
      return{
        posts : [],
      }
    },
    methods: {
      getPosts(){
        axios.get('http://127.0.0.1:8000/api/post')
              .then(res => {
               
               if(res.data.status == 'success'){
                 this.posts = res.data.posts;
                 console.log(this.posts);
               }
              });
      }
    }
}
</script>