<template>
    <div class="search-container" id="search-bar">
        <form class="d-flex">
        <input class="form-control me-2" type="text" v-model="search" placeholder="Search users" aria-label="Search">
        <button class="btn btn-outline-success" @click="getPostsBySearch()" >Search</button>
        </form>  
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data(){
        return{
            search : ''
        }
    },
    methods: {
        getPostsBySearch(){
        alert(this.search);
        }
    },
}
</script>