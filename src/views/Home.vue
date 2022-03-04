<template>
<div class="">
  <Navbar> </Navbar>
  <div class="container-box bg-light d-flex justify-content-around">
    <div>
              <h4 class="mb-4">Post Something about tech world!</h4>

     <div class=" form-box ">      
        <form action="" method="post">
  
          <div class="row">
          <div class="avatar-form col-md-1">
            <img src="../assets/img/profile1.png" alt="Avatar Profile">
          </div>
          <div class="col-md-11 textaera-box">
            <textarea name="" id="" placeholder="Post Something"></textarea>
          </div>

          </div>
      
          <div class="my-2">
            <input type="file">
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
      <div class=" post-box" >
        <div class="card-header">
          <a href="">Username</a>
        </div>
        <div class="image-box">
        <img  src="../assets/img/2.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
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
    <div>
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


.image-box img{
  max-width: 850px;
  width: 100%;
}

.form-box{

  padding: 20px;
  border-radius: 5px;
  width: 100%;
  background: white;
}
.avatar-form img{
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
  
}
</style>