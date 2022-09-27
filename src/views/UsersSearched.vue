<template>
    <div>
        <h2 class="title-page text-center">Users Searched by {{$route.params.text}}</h2>
        <Navbar />
        <ListUsers :tosearch="text" />
    </div>
</template>
  
<script>
import Navbar from '../components/Navbar.vue';
import ListUsers from '../components/ListUsers.vue';
import { isAuth } from '../middlewares/auth';
export default {
    name: "UsersSearched",
    components: {
        Navbar,
        ListUsers,
    },
    data() {
        return {
            text: this.$route.params.text
        }
    },
    mounted() {
        isAuth();
    },
};
</script>
  
  