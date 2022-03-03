<template>
    <section class="ftco-section">
    <div class="container">
        
        <div class="row justify-content-center">
          <div class="col-md-7">
            <div class="login-wrap p-4">
              <div class="icon d-flex align-items-center justify-content-center">
                  <span class="fa fa-user-o"></span>
              </div>
            <h3 class="text-center mb-4">Sign Up</h3>
            <form  class="login-form" v-on:submit.prevent="save()">

                <div class="inputs">
                    <div class="form-group input-box col-md-6">
                        <input type="text" class="form-control input-login rounded-left" placeholder="Name" name="name" v-model="user.name" required>
                    </div>
                    <div class="form-group input-box col-md-6">
                        <input type="text" class="form-control input-login rounded-left" placeholder="Username" name="username" v-model="user.username" required>
                    </div>
                </div>

                <div class="inputs">
                    <div class="form-group input-box col-md-6  ">
                        <input type="text" class="form-control input-login rounded-left" placeholder="Username" name="username" v-model="user.username" required>
                    </div>  
                    <div class="form-group input-box  col-md-6 ">
                        <input type="email" class="form-control input-login rounded-left" placeholder="Email" name="email" v-model="user.email"  required>
                    </div>                 
                </div>


                
                <div class="inputs">
                    <div class="form-group input-box col-md-6">
                        <input type="password" class="form-control input-login rounded-left" placeholder="Password" name="password" v-model="user.password" required>
                    </div> 
                    <div class="form-group input-box col-md-6">
                        <input type="password" class="form-control input-login rounded-left" placeholder="Confirm Password" name="password_confirmation" v-model="user.password_confirmation" required>
                    </div>
                </div>           

                <div class="form-group input-box">
                    <button type="submit" class="form-control btn btn-primary rounded btn-blog submit px-3">Register</button>
                </div>
          

                <div class="w-10 mt-2 ">
                    <a href="/login" class="text-secondary">Login</a>
                </div>
            
            </form>
        </div>
            </div>
        </div>
    </div>
    </section>
</template>
<style>
    .submit{
        height: 45px;
        width: 250px;
        margin-top: 10px;
    }
</style>
<script>
     import axios from 'axios';
      import User from '../models/User';

export default {
    name: 'RegisterView',
    data(){
        return {
            user : new User('','','','','')      
        }
    },
    mounted(){
        console.log(this.user);
    },
    methods: {
     save(){
         let json = JSON.stringify(this.user);
         let params = 'json='+json;
         console.log(params);
         axios.post('http://127.0.0.1:8004/api/register', params )
              .then(response =>{
                  console.log(response);
              })
              .catch(error => {
                  console.log(error);
              });
     }
    }
}
</script>

<style>
@import '../assets/css/login.css';

</style>