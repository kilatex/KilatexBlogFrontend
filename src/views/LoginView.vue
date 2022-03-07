<template>
  
<section class="ftco-section">
    <div class="container">

        <div class="row justify-content-center">
            <div class="col-md-7 col-lg-5">
                <div class="login-wrap p-4 p-md-5">
            <div class="icon d-flex align-items-center justify-content-center">
                <span class="fa fa-user-o"></span>
            </div>
            <h3 class="text-center mb-4">Sign In</h3>
                    <form action="#" class="login-form">
                <div class="form-group input-box">
                    <input type="text" class="form-control input-login rounded-left" placeholder="Email" required>
                </div>
            <div class="form-group  input-box d-flex">
                <input type="password" class="form-control input-login rounded-left" placeholder="Password" required>
            </div>
            <div class="form-group  text-center">
                <button type="submit" class="form-control btn btn-primary rounded btn-blog submit px-3">Login</button>
            </div>
      

            <div class="w-10 mt-2 ">
                <a href="#" class="text-secondary">Forgot Password</a>
            </div>
            
            </form>
        </div>
            </div>
        </div>
    </div>
</section>


</template>

<style>
@import '../assets/css/login.css';
</style>

<script>
export default {
    name: 'LoginView'
}
</script>