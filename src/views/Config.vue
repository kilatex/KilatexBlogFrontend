<template>
    <div>
        <Navbar></Navbar>
        <div class="container-box d-flex row justify-content-around">
        <div class="col-md-8">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar bg-white">
    
        <div class="sidebar-box">
            <div class="profile">
                <img src="../assets/img/profile1.png" class="avatar-sidebar" alt="Avatar Profile">
                <a href="#" class="fw-bold">Username</a>
            </div>
            <h4 class="text-center text-primary fw-bold ">Kilatex Blog</h4>

            <h6>Recent posts about</h6>
            <ul>
            <li><a href="#">PC</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>

            </ul>

            <h6>Find New Users</h6>
            <ul>
            <li class=" my-3"><a href="#" class="avatar-list"> <img src="../assets/img/2.jpg" class="" alt=""> Username 1 </a></li>
            <li class=" my-3"><a href="#" class="avatar-list"> <img src="../assets/img/2.jpg" class="" alt=""> Username 1 </a></li>
            <li class=" my-3"> <a href="#" class="avatar-list"> <img src="../assets/img/2.jpg" class="" alt=""> Username 1 </a></li>
            <li class=" my-3"><a href="#" class="avatar-list"> <img src="../assets/img/2.jpg" class="" alt=""> Username 1 </a></li>
    

            </ul>
        </div>
        </div>
        </div>
  </div>
</template>

<style>
.accordion-body{
}
.accordion-collapse{
    width: 100%;
}
</style>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    name: 'Config',
    components:{
        Navbar
    }
}
</script>