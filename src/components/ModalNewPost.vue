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
          <div class="form-box form-box-modal">
            <form action="" method="post">
              <div class="row">
                <div class="avatar-form col-md-1">
                  <img src="../assets/img/profile1.png" alt="Avatar Profile" />
                </div>
                <div class="col-md-11 textaera-box">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Post Title</label>
                  </div>
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style="height: 100px"
                    ></textarea>
                    <label for="floatingTextarea2">Description</label>
                  </div>
                </div>
              </div>

              <div class="my-2">
                <label for="post_image" class="btn btn-success btn-post"
                  >Add File</label
                >
                <input type="file" id="post_image" class="d-none" />
              </div>
              <div>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <input
                type="submit"
                class="btn btn-success btn-post mt-2"
                value="Post"
              />
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
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
export default {
  name: "ModalNewPost",
};
</script>