<template>
  <div class="sidebar bg-white">
    <div class="sidebar-box">
      <div class="profile">
        <img
          src="../assets/img/profile1.png"
          class="avatar-sidebar"
          alt="Avatar Profile"
        />
        <a href="#" class="fw-bold">Username</a>
      </div>
      <h4 class="text-center text-primary fw-bold">Kilatex Blog</h4>

      <h6>Recent posts about</h6>
      <ul>
        <li><a href="#">PC</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
      </ul>

      <h6>Find New Users</h6>
      <ul>
        <li class="my-3">
          <a href="#" class="avatar-list">
            <img src="../assets/img/2.jpg" class="" alt="" /> Username 1
          </a>
        </li>
        <li class="my-3">
          <a href="#" class="avatar-list">
            <img src="../assets/img/2.jpg" class="" alt="" /> Username 1
          </a>
        </li>
        <li class="my-3">
          <a href="#" class="avatar-list">
            <img src="../assets/img/2.jpg" class="" alt="" /> Username 1
          </a>
        </li>
        <li class="my-3">
          <a href="#" class="avatar-list">
            <img src="../assets/img/2.jpg" class="" alt="" /> Username 1
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>

/* SIDEBAR STYLES */
.sidebar{
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 76px;
  width: 20%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  border-radius: 5px;
  height: 100%;
}
.sidebar-box{
  padding: 20px;
}
.sidebar ul li{
  list-style: none;
  margin-left: -15px;
}
.avatar-sidebar{
  width: 60px;
  height: 60px;
  border-radius: 50px;
}
.profile{
  text-align: center;
  margin-bottom: 15px;
}
.profile a{
  display: block;
  text-align: center;
}
.avatar-list img{
  width: 30px;
  height: 30px;
  border-radius: 50px;
}
@media screen and (max-width: 1280px){
  .sidebar-box{
    padding: 5px;
  }
}
@media screen and (max-width: 1030px){
 .sidebar{
    display: none !important;
  }
}
</style>
<script>
export default {
  name: "Sidebar",
};
</script>