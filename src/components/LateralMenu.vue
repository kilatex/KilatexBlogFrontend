<template>
  <div class="l-navbar bg-navbar " id="nav-bar">
    <nav class="nav">
      <div>
        <router-link :to="{name: 'Home'}" class="nav_logo">
          <!--  <i class="bx bx-layer nav_logo-icon"></i> -->
          <span class="nav_logo-name">KILATEX</span>
        </router-link>
        <div class="nav_list">
          <router-link :to="{name:'Home'}" class="nav_link">
            <i class="fas fa-home nav_icon"></i>
            <span class="nav_name">Home</span>
          </router-link>
          <router-link :to="{name:'LatestUsers'}" class="nav_link">
            <i class="fas fa-users nav_icon"></i>
            <span class="nav_name">Users</span>
          </router-link>
          <a href="#" class="nav_link">
            <i class="fas fa-paste nav_icon my_posts_icon"></i>
            <span class="nav_name">My Posts</span>
          </a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="nav_link">
            <i class="fas fa-plus-circle nav_icon"></i>
            <span class="nav_name">New Post</span>
          </a>
          <router-link :to="{name:'Config'}" class="nav_link">
            <i class="fas fa-cog nav_icon"></i>
            <span class="nav_name">Config</span>
          </router-link>
          <router-link :to="{name:'MyProfile'}" class="nav_link">
            <i class="fas fa-user nav_icon"></i>
            <span class="nav_name">My Profile</span>
          </router-link>
        </div>
      </div>
      <a href="#" data-bs-toggle="modal" data-bs-target="#modalLogout" class="nav_link">
        <i class="fas fa-sign-out-alt nav_icon"></i>
        <span class="nav_name">SignOut</span>
      </a>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'Lateral'
}
</script>