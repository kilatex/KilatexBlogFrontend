<template>
  <div class="bg-light">
    <Navbar> </Navbar>
    <h2 class="title-page text-center">Lastest Users</h2>
    <div class="container-box d-flex  justify-content-around">
      <div class="articles">
        <h1> {{changeCategory}} Posts</h1>
        <!--  <Posts  postsType="PostsByCategory"> </Posts> -->
      </div>
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
// import Posts from '../components/Posts.vue';
export default {
  name: 'PostsByCategory',
  components: {
    Navbar,
    Sidebar,
    // Posts
  },
  data() {
    return {
      category: ''
    }
  },
  computed: {
    changeCategory: function () {
      const category = this.$route.params.category;
      return category;
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>