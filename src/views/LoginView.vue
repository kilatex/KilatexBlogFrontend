<template>
  
<section class="ftco-section">
    <div class="container">

        <div class="row justify-content-center">
            <div class="col-md-7 col-lg-5">
                <div class="login-wrap p-4 p-md-5">
            <div class="icon d-flex align-items-center justify-content-center">
                <span class="fa fa-user-o"></span>
            </div>
            <h3 class="text-center mb-4">Sign In</h3>
            <form class="login-form" @submit.prevent="login()">
                <div class="form-group input-box">
                    <input type="text" class="form-control input-login rounded-left" v-model="user.email" placeholder="Email" required>
                </div>
            <div class="form-group  input-box d-flex">
                <input type="password" class="form-control input-login rounded-left" v-model="user.password" placeholder="Password" required>
            </div>
            <div class="form-group  text-center">
                <button type="submit"  class="form-control btn btn-primary rounded btn-blog submit px-3">Login</button>
            </div>
      

            <div class="w-10 mt-3 d-flex justify-content-between">
                <a href="#" class="text-secondary">Forgot Password</a>
                <router-link to="/register" class="text-secondary ">Register</router-link>

            </div>
            
            </form>
        </div>
            </div>
        </div>
    </div>
</section>


</template>

<style>
@import '../assets/css/login.css';
</style>

<script>
import global from '../global';
import axios from 'axios';
import user from '../models/User';
export default {
    name: 'LoginView',
    data(){
        return{
            user:   new user(),
            url: global.url
        }
    },
    mounted(){

    },
    methods:{
        login(){
        let json = JSON.stringify(this.user);
         let params = 'json='+json;   
         console.log(params);        
            axios.post(this.url+'api/login',params)
            .then((response) => {
                /*
                localStorage.setItem('user_token', response.data.token.original.access_token);
                
               this.$router.push('/login'); */
               localStorage.setItem('sub', response.data.sub);
              localStorage.setItem('email', response.data.email);

               console.log(response);
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>