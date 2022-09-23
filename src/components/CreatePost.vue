<template>
        <div class=" form-box ">      
          <form @submit.prevent="createPost()">
    
            <div class="row">
            <div class="avatar-form col-md-1">
              <img src="../assets/img/profile-default.png" alt="Avatar Profile">
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
              <label for="file" class="btn btn-success btn-post">Add File</label>
              <input  type="file" id="file" ref="file" name="file0" @change="fileChange()">
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
import Swal from 'sweetalert2';

export default {
    name: 'CreatePost',
    data(){
        return{
        url : Global.url,
        post : new PostModel('','','','',''),
        categories: [],
        file: ''
        }
    },
    mounted(){
      this.getCategories()
    },
    methods:{
      fileChange(){
        this.post.image =  this.$refs.file.files[0];    

      },
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
        const formData =  new FormData();

          const user_auth = JSON.parse(localStorage.getItem('user'));
          formData.append("file0", this.$refs.file.files[0]);
          formData.append("title",this.post.title);
          formData.append("content",this.post.content);
          formData.append("category",this.post.category);
          formData.append("user_id",user_auth.sub);
          // let json = JSON.stringify(this.post);
          // let post = 'json='+json;

        const token = localStorage.getItem('token');
          let headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization' : token
          }
          axios.post(this.url+'api/post',formData ,{headers: headers})
                .then( () =>{
                    Swal.fire(
                      'Good job!',
                      'Post Created!',
                      'success'
                    );
                    this.redirectToProfile(user_auth.sub);
                })
              .catch(error => {
                console.log(error);
              });
      },
     redirectToProfile(idUser){
      this.$router.push('/profile/'+idUser); 
     }
    }
}
</script>

