<template>
  <div id="body-pd">
    <header class="header bg-primary" id="header">
      <div class="header_toggle ">
        <div>
          <i class="fas fa-bars text-white header-toggle" @click.prevent="toggle"  id="header-toggle"></i>
        </div>

     
      </div>
        <div class="search-container" id="search-bar">
          <form class="d-flex">
            <input class="form-control me-2" type="text" v-model="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" @click="getPostsBySearch()" >Search</button>
          </form>  
        </div>
      <div class="header_img">
          <router-link :to="{ name: 'MyProfile'}">
            <span v-if="user.image != null">
              <img src="../assets/img/profile1.png" alt="Avatar Profile">
            </span>
            <span v-else>
            <img src="../assets/img/profile-default.png" alt="Avatar Profile">
            </span>
          </router-link>
      </div>
    </header>
    <div class="l-navbar bg-primary" id="nav-bar">
      <nav class="nav">
        <div>
          <router-link :to="{name: 'Home'}" class="nav_logo">
              <!--  <i class="bx bx-layer nav_logo-icon"></i> -->
            <span class="nav_logo-name">KILATEX</span>
          </router-link>
          <div class="nav_list">
            <router-link :to="{name:'Home'}" class="nav_link" >
            
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

            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="nav_link">
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
        <a href="#"  data-bs-toggle="modal" data-bs-target="#modalLogout"  class="nav_link">
          <i class="fas fa-sign-out-alt nav_icon"></i>
          <span class="nav_name">SignOut</span>
        </a>
      </nav>
    </div>
    <!--Container Main start-->
      <ModalNewPost></ModalNewPost>
      <Logout></Logout>

  </div>
</template>

<script>
import ModalNewPost from './ModalNewPost.vue';
import Logout from './Logout.vue';
export default {
  name: "Navbar",
  components:{
    ModalNewPost,
    Logout
  },
     data(){
      return{
        search: '',
        user: JSON.parse(localStorage.getItem('user'))
      }
    }, 
  mounted() {
     

        // MENU TOGGLE
        const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          bodypd = document.getElementById(bodyId),
          headerpd = document.getElementById(headerId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
          toggle.addEventListener("click", () => {
            // show navbar
            nav.classList.toggle("show");
            // change icon
            toggle.classList.toggle("bx-x");
            // add padding to body
            bodypd.classList.toggle("body-pd");
            // add padding to header
            headerpd.classList.toggle("body-pd");

            if(window.innerWidth <= 810){
             const screen = document.querySelector('#search-bar');
             screen.classList.toggle('active-search');
              
            }
          });
        }
      };
      showNavbar("header-toggle", "nav-bar", "body-pd", "header");

      
    document.addEventListener("DOMContentLoaded", function () {
     
      /*===== LINK ACTIVE =====*/
      const linkColor = document.querySelectorAll(".nav_link");
     
    

      function colorLink() {
        if (linkColor) {
          linkColor.forEach((l) => l.classList.remove("active"));
          this.classList.add("active");
        }
      }
      linkColor.forEach((l) => l.addEventListener("click", colorLink));

      // Your code to run since DOM is loaded and ready
    });
  },
  methods:{
    getPostsBySearch(){
        const search = this.search;
        return search;
    }
  }
};
</script>



<style>

.active-search{
  display: none;
}
:root {
  --header-height: 3rem;
  --nav-width: 68px;
  --first-color: #4723d9;
  --first-color-light: #afa5d9;
  --white-color: #f7f6fb;
  --body-font: "Nunito", sans-serif;
  --normal-font-size: 1rem;
  --z-fixed: 100;
}

*,
::before,
::after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.header {
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: var(--z-fixed);
  transition: 0.5s;
}

.header_toggle {
  color: var(--first-color);
  font-size: 1.5rem;
  cursor: pointer;
}
.search-container{
  width: 60%;

}

.header_img {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}

.header_img img {
  width: 40px;
}

.l-navbar {
  position: fixed;
  top: 0;
  width: var(--nav-width);
  height: 100vh;
  padding: 0.5rem 1rem 0 0;
  transition: 0.5s;
  z-index: var(--z-fixed);
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.nav_logo,
.nav_link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
}

.nav_logo {
  margin-bottom: 2rem;
}

.nav_logo-icon {
  font-size: 1.25rem;
  color: var(--white-color);
}

.nav_logo-name {
  color: var(--white-color);
  font-weight: 700;
}

.nav_link {
  position: relative;
  margin-bottom: 1.5rem;
  transition: 0.3s;
}

.nav_link:hover {
  color: var(--white-color);
}

.nav_icon {
  font-size: 1.25rem;
}

.show {
  left: 0;
}

.body-pd {
  padding-left: calc(var(--nav-width) + 1rem);
}

.active {
  color: var(--white-color);
}

.active::before {
  content: "";
  position: absolute;
  left: 0;
  width: 2px;
  height: 32px;
  background-color: var(--white-color);
}

.height-100 {
  height: 100vh;
}
.header {
    height: calc(var(--header-height) + 1rem);
    padding: 0 2rem 0 calc(var(--nav-width) + 2rem);
  }
  .show {
    width: calc(var(--nav-width) + 156px);
  }
  .l-navbar {
    left: 0;
    padding: 1rem 1rem 0 0;
  }
   .body-pd {
    padding-left: calc(var(--nav-width) + 188px);
  }
 .header_img {
    width: 40px;
    height: 40px;
  }

  .header_img img {
    width: 45px;
  }

  .my_posts_icon{
      position: relative;
      left: 3px;
  }

@media screen and (max-width: 768px) {
  
    .l-navbar {
    position: fixed;
    top: 0;
    width: 0px;
    height: 100vh;
    padding: 0.5rem 1rem 0 0;
    transition: 0.5s;
    z-index: var(--z-fixed);
    }
   
    .header .header_toggle{
        position: relative;
    }


  .show {
    width: calc(var(--nav-width) + 156px);
  }
  
    .body-pd {
    padding-left: calc(var(--nav-width) + 170px) !important;
  }

 .header {
  padding: 0 20px;
    }
    .search-container{
  width: 80%;

}
}


</style>
