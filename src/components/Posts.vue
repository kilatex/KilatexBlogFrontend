<template>  
<div>
    <div class="" v-if="posts && posts.length >= 1" >
      <div class="posts" >
        <div class=" post-box bg-white" v-for="post in posts" :key="post.id" >
          <div class="post-header p-2 ">
            <div class="avatar-post">
              <router-link to="/profile/id">

                  <span v-if="postsType =='PostsByUser'">
                    <span v-if="userPost.image">
                      <img src="../assets/img/profile1.png" alt="Avatar Profile">
                    </span>
                    <span v-else>
                    <img src="../assets/img/profile-default.png" alt="Avatar Profile">
                    </span>
                    {{userPost.username}} 
                  </span>


                  <span v-if="postsType =='PostsHome'">
                    <span v-if="post.user.image">
                      <img src="../assets/img/profile1.png" alt="Avatar Profile">
                    </span>
                    <span v-else>
                    <img src="../assets/img/profile-default.png" alt="Avatar Profile">
                    </span>
                    {{post.user.username}} 
                  </span>
                </router-link>
            </div>
            <div class="created_at " v-if="posts && posts.length >= 1">
               {{moment(post.created_at).fromNow()}}
            </div>
          </div>
          <div class="image-box" >
            <div v-if="!post.image">
            <img  src="../assets/img/2.jpg" class="card-img-top" alt="...">
            </div>
              <div v-if="post.image">
            <img  :src="url+'api/post/image/'+post.image" class="card-img-top" alt="...">
            </div>
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

   
      <div v-else-if="noResult != false" class="posts">
        <div class="posts-none">
          <h3 class="fw-bold mt-3 text-danger">Posts Not found</h3> 
        </div>
    </div>
    <div v-else>
      <div class="posts-none">
        <h3 class="fw-bold mt-3 text-danger">There are no posts to show</h3> 
       
      </div>
    </div>
    <InfiniteScroll @infinite-scroll="getPosts()" :message="message" :noResult="noResult"></InfiniteScroll> 
</div>

</template>

<style>
.posts{
}
.posts-profile{
  width: 100%;
}
.posts .post-box{
  width: 100%;
}

.posts-none{
  max-width: 1050px;
}
</style>


<script>
import axios from 'axios';
import Global from '../global';
import moment from 'moment';
import InfiniteScroll from "infinite-loading-vue3";

export default {
    name: 'Posts',
    components:{
     InfiniteScroll
    },
    props: ['postsType','userPost'],
    mounted(){
      switch(this.postsType){
        case "PostsByUser": 
         this.urlPosts = this.url+'api/post/user/'+this.$route.params.id+'?page=';
              break;
        case "PostsHome":
            this.urlPosts = this.url+'api/post?page=';
             break;
        case "PostsByCategory":
            console.log('PostsByCategory'); break;
      }
      this.getPosts();
    },

    data(){
      return{
        moment: moment,
        url : Global.url,
        urlPosts: '',
        posts : [],
        page: 1,
        message: '',
        noResult: false,
      }
    },  
    methods: {
      async getPosts(){
          let   headers =  {
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
            'Access-Control-Allow-Headers':'text/json',
          }
          axios.get(this.urlPosts+this.page,{headers:headers})
             .then(response => {
               console.log(response.data.posts.data.length);
                if(response.data.posts.data.length) {
                  this.posts.push(...response.data.posts.data);
                  this.page++;
                } else {
                  this.noResult = true;
                  this.message = "No result found";
                }
             })
             .catch(error => {
               console.log(error)
             });
       
      

      }
    }
}
</script>