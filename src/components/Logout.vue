<template>
  <div class="modal modalNewPost fade" id="modalLogout" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog-post modal-dialog ">
      <div class="modal-content bg-light">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Sign Out</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5 class="mb-4 text-center">Confirm Sign Out </h5>
          <div class="d-flex justify-content-center">
            <button class="btn btn-warning mx-2" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
            <button @click="logout()" data-bs-dismiss="modal" aria-label="Close" class="btn btn-danger mx-2">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import global from '../global'
export default {
  name: 'Logout',
  data(){
    return {
      token : localStorage.getItem('token')
    }
  },
  methods: {
    logout() {
      const form = new FormData();


     form.append('token', this.token);

      axios.post(global.url+'/auth/logout',form).then(
        () => {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          this.$router.push({ name: 'login' })
        }
      )
    }
  }
}
</script>