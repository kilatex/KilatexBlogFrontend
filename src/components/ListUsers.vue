<template>
    <div>
        <div class="container-box d-flex  justify-content-around">
            <div class="row d-flex users-box justify-content-center" v-if="users && users.length >= 1">
                <!-- Team item -->
                <div class="col-xl-3 item-box col-sm-6 mb-5" v-for="user in users" :key="user.id">
                    <div class="bg-white text-center rounded shadow-sm py-5 px-4">
                        <span v-if="user.image">
                            <img src="../assets/img/profile1.png" width="100"
                                class="img-fluid  text-center rounded-circle mb-3 img-thumbnail shadow-sm"
                                alt="User Profile Image">
                        </span>
                        <span v-else>
                            <img src="../assets/img/profile-default.png" width="100"
                                class="img-fluid  text-center rounded-circle mb-3 img-thumbnail shadow-sm"
                                alt="User Profile Image">
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
        </div>
        <InfiniteScroll @infinite-scroll="getUsers()" :message="message" :noResult="noResult"></InfiniteScroll>
    </div>
</template>
  
<script>
import axios from 'axios';
import InfiniteScroll from "infinite-loading-vue3";
import global from '../global'
export default {
    name: "ListUsers",
    props: ['tosearch'],

    components: {
        InfiniteScroll
    },
    data() {
        return {
            users: [],
            message: '',
            noResult: false,
            url: global.url,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            page: 1
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.changeSearch();
            }
        )
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        changeSearch() {
            this.users = [];
            this.page = 1;
            this.getUsers();
        },
        getUsers() {
            var url;
            if (this.$route.path == "/latest-users") {
                url = this.url + '/user/all?page=';
            }
            if (this.$route.path == "/user/search/" + this.$route.params.text) {
                url = this.url + '/user/search/' + this.$route.params.text + '?page=';
            }
            axios.get(url + this.page, { headers: this.headers })
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
  
  