<template>
<div class="bg-light">
  <Navbar> </Navbar>
  <div class="container-box  d-flex justify-content-around">
    <div class="articles">
      <h4 class="mb-4">Post Something about tech world!</h4>
     <div class=" form-box ">      
        <form action="" method="post">
  
          <div class="row">
          <div class="avatar-form col-md-1">
            <img src="../assets/img/profile1.png" alt="Avatar Profile">
          </div>
          <div class="col-md-11 textaera-box">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Post Title</label>
            </div>
            <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
              <label for="floatingTextarea2">Description</label>
            </div>

          </div>

          </div>
      
          <div class="my-2">
            <label for="post_image" class="btn btn-success btn-post">Add File</label>
            <input type="file" id="post_image" class="d-none ">

          </div>
          <div>
            <select class="form-select" aria-label="Default select example">
              <option selected>Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        
          <input type="submit" class="btn btn-success btn-post mt-2" value="Post">
        </form>
      </div>

      <div class=" post-box bg-white" >
        <div class="post-header p-2 ">
          <div class="avatar-post">
            <a href="">
              <img src="../assets/img/profile1.png" alt="Avatar Profile"> Username
              </a>
          </div>
          <div class="created_at ">
            11/01/2022
          </div>
        </div>
        <div class="image-box">
        <img  src="../assets/img/2.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title fw-bold">Card title</h5>
          <p class="card-text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at quisquam dolore rem necessitatibus quae rerum commodi, corrupti voluptatem perspiciatis quidem sed laboriosam quas possimus, quos explicabo! Quia, nobis ducimus. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="buttons-post d-flex">
            <div class=""> <a href="" class="text-success fs-5"><i class="fas fa-thumbs-up"></i> 250</a></div>
            <div class=" mx-3"> <a href="" class="text-danger fs-5"><i class="fas fa-thumbs-down"></i> 255</a></div>

        

          </div>
        </div>
      </div>
       <div class=" post-box" >
        <div class="card-header">
          <a href="">Username</a>
        </div>
        <div class="image-box">
        <img  src="../assets/img/1.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <h3>sidebar</h3>
    </div>
  </div>
</div>

</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar
  }
}

</script>

<style>
*{
  text-align: start;
}
.post-header{
  font-weight: bold;
  display: flex !important;
  justify-content: space-between !important;
  padding-bottom: 10px;
}
.created_at{
  position: relative;
  color: #ccc;
  align-self: center;
}
.post-box{
  margin: 20px 0px;
    border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
}
.card-body{
  max-width: 750px !important;
  text-align: justify !important;
}
.image-box img{
  max-width: 850px;
  width: 100%;
  max-height: 550px;
  border-radius: 0px;
}

.form-box{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  background: white;
}
.avatar-form img, .avatar-post img{
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
.textaera-box textarea{
  width: 100%;
  height: 120px;
  border: 1px solid #ccc;
}
.btn-post{
  width: 120px;
}


@media screen and (max-width: 768px) {
  .avatar-form img{
    display: none;
  }
  .avatar-post img{
    width: 40px;
    height: 40px;
  }
  .sidebar{
    display: none !important;
  }
  .container-box{
    width: 97%;    
    padding-left: 3vh;
    
  }

 
}
</style>