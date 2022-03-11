<template>
  <!-- Modal -->
  <div
    class="modal modalNewPost fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog-post modal-dialog  modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h4 class="mb-4">Post Something about tech world!</h4>
        <CreatePost class="form-box-modal"></CreatePost>

        </div>
       
      </div>
    </div>
  </div>
</template>

<style>
.modal,
.modal-backdrop {
  width: 100%;
}
.form-box-modal{
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px !important;
  padding: 00px !important;
  border-radius: 5px;
  width: 100%;
  background: white;
}
@media only screen and (max-width: 991px) {
    .avatar-form img{
    display: none;
  }
 
}
</style>
<script>
import CreatePost from './CreatePost.vue';
export default {
  name: "ModalNewPost",
  components:{
    CreatePost
  }
};
</script>