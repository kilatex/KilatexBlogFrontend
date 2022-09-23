<template>
  <div class="modal modalNewPost fade" id="modalSearchByCategory" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog-post modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Search post by category</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5 class="mb-2">Select Category to search</h5>
          <form @submit.prevent="searchCategory()">
            <div>
              <select class="form-select" aria-label="Default select example">
                <option value="" selected>Category</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}
                </option>
              </select>
            </div>
            <div class="text-end">
              <input type="submit" value="Search" class="btn mt-3 btn-success">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'name',
  props: ['categories'],
  data() {

  },
  methods: {
    searchCategory() {
    }
  }
};
</script>