<template>
    <div class="search-container" id="search-bar">
        <form class="d-flex" @submit.prevent="searchUser()">
            <input class="form-control me-2" required type="text" v-model="search" placeholder="Search users"
                aria-label="Search">
            <button class="btn btn-outline-success">Search</button>
        </form>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import router from '../router';
export default {
    name: 'SearchBar',
    data() {
        return {
            search: '',
        }
    },
    methods: {
        searchUser() {
            const text = this.search.trim();
            if (!text) {
                Swal.fire({
                    icon: 'error',
                    title: 'Search Failed',
                    text: 'Type something to search users'
                })
            }
            router.push({ name: 'UsersSearched', params: { text } })
        },
    },
}
</script>