<template>
  <div>
    <div class="container-box d-flex row justify-content-around">
      <div class="col-md-8">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="false" aria-controls="collapseOne">
                Edit Profile
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="form-user-box">
                  <form @submit.prevent="updateUser()">
                    <div class="row">
                      <div class="avatar-form col-md-1">
                        <img src="../assets/img/profile-default.png" alt="Avatar Profile" />
                      </div>
                      <div class="col-md-11 textaera-box">
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" v-model="user.name" id="name"
                            placeholder="Name" />
                          <label for="name">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" v-model="user.surname" id="surname"
                            placeholder="Surname" />
                          <label for="surname">Surname</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" v-model="user.username" id="username"
                            placeholder="Username" />
                          <label for="username">Username</label>
                        </div>
                        <div class="form-floating">
                          <textarea class="form-control" v-model="user.description" placeholder="Leave a comment here"
                            id="description" style="height: 100px"></textarea>
                          <label for="description">Description</label>
                        </div>
                      </div>
                    </div>
                    <input type="submit" value="Upload" class="btn btn-success btn-post mt-2" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Upload Avatar
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">

                <h6 class="fw-bold">Upload Avatar</h6>
                <div class="input-group mb-3">
                  <label class="input-group-text" for="inputGroupFile01">Upload</label>
                  <input type="file" class="form-control" id="inputGroupFile01">
                </div>
                <input type="submit" value="Upload Avatar" class="btn btn-success btn-post mt-2" />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Change Password
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <h6 class="fw-bold">Change Password</h6>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="passwordOld" placeholder="Old Password" />
                  <label for="passwordOld">Old Password</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="passwordNew" placeholder="New Password" />
                  <label for="passwordNew">New Password</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="passwordConfirm" placeholder="Confirm New Password" />
                  <label for="passwordConfirm">Confirm New Password</label>
                </div>
                <button type="submit" class="btn btn-success  mt-2">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar></Sidebar>
    </div>
    <Navbar></Navbar>
  </div>
</template>

<style>
.accordion-collapse {
  width: 100%;
}
.sidebar-container {
  width: 20% !important;
}
.form-user-box {
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px !important;
  padding: 00px !important;
  border-radius: 5px;
  width: 100%;
  background: white;
}
</style>

<script>
import Sidebar from "../components/Sidebar.vue";
import {isAuth} from "../middlewares/auth";
import Navbar from "../components/Navbar.vue";
import Swal from "sweetalert2";
import axios from "axios";
import global from '../global'

export default {
  name: "Config",
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      user: []
    }
  },
  mounted() {
    isAuth();
    this.getUser();
  },
  methods: {
    updateUser(){
          
          const form = new FormData();
            form.append('name', this.user.name);
            form.append('surname', this.user.surname);
            form.append('username', this.user.username);
            form.append('description', this.user.description); 
             const token = localStorage.getItem('token');
             let headers = {
              'Content-Type': 'multipart/form-data',
              'Authorization' : token
             }
            axios.post(global.url+'api/update',form,{headers: headers}).
                then(res => {
                if(res.data.code == 200){
                    Swal.fire({
                            icon: 'success',
                            title: 'Successfully UPDATED',
                            })
                  localStorage.setItem('user', JSON.stringify(res.data.user));
                  this.$router.push('/profile');
                }
                else if(res.data.code == 400){
                    console.log(res);
                    Swal.fire({
                            icon: 'error',
                            title: 'Update User Failed',
                            })     
                    }
                }).
                catch(error => {
                    console.log(error);
                    Swal.fire({
                            icon: 'error',
                            title: 'Update User Failed',
                            text: error.response.data.message,
                    })  
                }); 
          
    },
    getUser(){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
};
</script>