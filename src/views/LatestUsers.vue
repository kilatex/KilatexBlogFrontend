<template>
  <div>
    <Navbar> </Navbar>
    <h2 class="title-page text-center">Latest Users</h2>
    <div class="container-box d-flex  justify-content-around">
      <div class="row d-flex users-box justify-content-center" v-if="users && users.length >= 1">
        <!-- Team item -->
        <div class="col-xl-3 item-box col-sm-6 mb-5" v-for="user in users" :key="user.id">
          <div class="bg-white text-center rounded shadow-sm py-5 px-4">
            <span v-if="user.image">
              <img src="../assets/img/profile1.png" width="100"
                class="img-fluid  text-center rounded-circle mb-3 img-thumbnail shadow-sm" alt="User Profile Image">
            </span>
            <span v-else>
              <img src="../assets/img/profile-default.png" width="100"
                class="img-fluid  text-center rounded-circle mb-3 img-thumbnail shadow-sm" alt="User Profile Image">
            </span>
            <h5 class="text-center">{{user.name}} {{user.surname}} </h5>
            <span class="small d-block text-center text-muted">{{user.username}}</span>
            <div class="social text-center mb-0 list-inline mt-3">
              <router-link :to="{name:'Profile',params:{id: user.id}}">Look Profile</router-link>
            </div>
          </div>
        </div>
        <!-- End -->
      </div>
      <Sidebar></Sidebar>
    </div>
    <InfiniteScroll @infinite-scroll="getUsers()" :message="message" :noResult="noResult"></InfiniteScroll>
  </div>
</template>

<style>
.social-link {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  border-radius: 50%;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.container-box {
  margin-top: 0px !important;
}

.social-link:hover,
.social-link:focus {
  background: #ddd;
  text-decoration: none;
  color: #555;
}

.item-box {
  min-width: 300px !important;
}

.users-box {
  width: 80%;
}

.title-page {
  font-size: 36px;
  position: relative;
  top: 50px;
  margin-top: 40px;
  font-weight: bold;
}

@media screen and (max-width: 1280px) {
  .sidebar {
    margin-left: 20px;
    width: 25% !important;
  }
}

@media screen and (max-width: 1080px) {
  .container-box {
    margin-top: 20px;
  }
}

@media screen and (max-width: 666px) {
  .item-box {
    width: 100%;
  }
}
</style>

<script>
import Sidebar from '../components/Sidebar.vue';
import Navbar from '../components/Navbar.vue';
import {isAuth} from '../middlewares/auth';
import axios from 'axios';
import InfiniteScroll from "infinite-loading-vue3";
import global from '../global'
export default {
  name: "LatestUsers",
  components: {
    Sidebar,
    Navbar,
    InfiniteScroll
  },
  data() {
    return {
      users: [],
      message: '',
      noResult: false,
      url: global.url
    }
  },
  mounted() {
    isAuth();
    this.getUsers();
  },
  methods: {
    async getUsers() {
      let headers = {
        'Authorization': 'bearer '+localStorage.getItem('token')
      }
      axios.get(this.url + '/user/all?page=' + this.page, { headers: headers })
        .then(response => {
          if (response.data.users.data.length) {
            this.users.push(...response.data.users.data);
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
};
</script>

