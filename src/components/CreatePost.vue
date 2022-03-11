<template>
        <div class=" form-box ">      
          <form @submit.prevent="createPost()">
    
            <div class="row">
            <div class="avatar-form col-md-1">
              <img src="../assets/img/profile1.png" alt="Avatar Profile">
            </div>
            <div class="col-md-11 textaera-box">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" v-model="post.title" id="floatingInput" placeholder="Post TItle">
                <label for="floatingInput">Post Title</label>
              </div>
              <div class="form-floating">
                <textarea class="form-control"  v-model="post.content" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                <label for="floatingTextarea2">Content</label>
              </div>

            </div>

            </div>
        
            <div class="my-2">
              <label for="post_image" class="btn btn-success btn-post">Add File</label>
              <input type="file" id="post_image" class="d-none ">

            </div>
            <div>
              <select class="form-select"  v-model="post.category" aria-label="Default select example">
                <option value ="" selected>Category</option>
                
                  <option  v-for="category in categories" :key="category.id" :value="category.id">
                    {{category.name}}
                  </option>
               
        
              </select>
            </div>
         
            <input type="submit" value="Post" class="btn btn-success btn-post mt-2">
          </form>
      </div>
</template>

<script>
import PostModel from '../models/Post';
import axios from 'axios';
import Global from '../global';

export default {
    name: 'CreatePost',
    data(){
        return{
        url : Global.url,
        post : new PostModel('','','',''),
        categories: []
        }
    },
    mounted(){
      this.getCategories()
    },
    methods:{
        getCategories(){
          axios.get(this.url+'api/category')
                  .then(response => {
                    
                    if (response.status == 200){
                      this.categories = response.data;
                    }
                   
                  })
                  .catch(error => {
                    console.log(error);
                  });
        },
        createPost(){
            let json = JSON.stringify(this.post);
            let post = 'json='+json;
            console.log(post);
            axios.post(this.url+'api/post',post)
                 .then(response =>{
                    console.log(response.data);
                 })
                .catch(error => {
                  console.log(error);
                });
        }
    }
}
</script>