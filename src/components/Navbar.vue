<template>
  <div id="body-pd">
    <Header />
    <LateralMenu />
    <ModalNewPost></ModalNewPost>    <!--Container Main start-->
    <Logout></Logout>
  </div>
</template>

<script>
import ModalNewPost from './ModalNewPost.vue';
import Logout from './Logout.vue';
import Header from './Header.vue';
import LateralMenu from './LateralMenu.vue';
export default {
  name: "Navbar",
  components: {
    ModalNewPost,
    Logout,
    Header,
    LateralMenu
  },
  data() {
    return {
      search: '',
      user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null
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
          if (window.innerWidth <= 810) {
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
  methods: {
    getPostsBySearch() {
      const search = this.search;
      return search;
    }
  }
};
</script>

<style>
.active-search {
  display: none;
}

:root {
  --header-height: 3rem;
  --nav-width: 68px;
  --first-color: #4723d9;
  --first-color-light: #afa5d9;
  --white-color: #e1dfe7;
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

.search-container {
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

.nav_link {
  color: var(--white-color);
}

.nav_link:hover {
  color: var(--first-color-light);
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

.bg-navbar {
  background-color: #1a1e33;
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

.my_posts_icon {
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

  .header .header_toggle {
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

  .search-container {
    width: 80%;

  }
}
</style>
