<template>  
    <div class="posts">
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
          <a href="#">Username</a>
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

</template>

<style>

</style>


<script>
export default {
    name: 'Posts'
}
</script>