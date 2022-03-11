<template>  
<div>
    <div class="" v-if="posts && posts.length >= 1" >
      <div class="posts" >
        <div class=" post-box bg-white" v-for="post in posts" :key="post.id" >
          <div class="post-header p-2 ">
            <div class="avatar-post">
              <router-link to="/profile/id">
                <img src="../assets/img/profile1.png" alt="Avatar Profile"> {{post.user.username}}
                </router-link>
            </div>
            <div class="created_at " v-if="posts && posts.length >= 1">

               {{moment(post.created_at).fromNow()}}
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

    <div v-else-if="posts && posts.length <1">
      Loading
    </div>
    <div v-else>
      There are no posts to show
    </div>
</div>

</template>

<style>

</style>


<script>
import axios from 'axios';
import Global from '../global';
import moment from 'moment';

export default {
    name: 'Posts',
    mounted(){
      this.getPosts();
    },

    data(){
      return{
        moment: moment,
        url : Global.url,
        posts : []
      }
    },  
    methods: {
      getPosts(){
        axios.get(this.url+'api/post')
              .then(res => {
               
               if(res.data.status == 'success'){
                 this.posts = res.data.posts;
               }
      });
      }
    }
}
</script>