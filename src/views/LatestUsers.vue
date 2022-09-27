<template>
  <div>
    <h2 class="title-page text-center">Latest Users</h2>
    <Navbar/>
    <ListUsers/> 
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
import Navbar from '../components/Navbar.vue';
import ListUsers from '../components/ListUsers.vue';
import {isAuth} from '../middlewares/auth';
import global from '../global'
export default {
  name: "LatestUsers",
  components: {
    Navbar,
    ListUsers,
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
  },
  methods: {

  }
};
</script>

