<template>
  <div class="home py-0 my-0">
   <!-- Main navigation -->
          <header>
            <!-- Full Page Intro -->
            <div class="view" style="background-image: url('undraw_online_gallery_dmv3.svg'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
              <!-- Mask & flexbox options-->
              <div class="mask  d-flex justify-content-center align-items-center">
                <!-- Content -->
                <div class="container mt-5">
                  <!--Grid row-->
                  <div class="row pt-lg-5 mt-lg-5 mt-5">
                    <!--Grid column-->
                    <div class="col-md-6 mb-5 mt-5 white-text text-center text-md-left wow fadeInLeft"
                      data-wow-delay="0.3s">
                      <div class="animated-title">
                        <div class="text-top">
                          <div>
                            <span>une gallery</span>
                            <span>de toutes vos photos</span>
                          </div>
                        </div>
                        <div class="text-bottom">
                          <div>professionnelle</div>
                        </div>
                      
                      </div>
                      <!-- <a class="btn btn-outline-white btn-rounded">Learn more</a> -->
                    </div>
                    <!--Grid column-->
                    <!--Grid column-->
                    <div class="col-md-6 col-xl-5 offset-xl-1 mt-5 mb-4">
                      <!--Form login-->
                        <div class="rotate-vert-center" v-show="login">
                            <form class="text-center rounded p-3 white hoverable" action="#!">

                                <p class="h4 mb-4">Sign in</p>
            
                                <!-- Email -->
                                <input type="text" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Username or E-mail">
            
                                <!-- Password -->
                                <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">
            
                                <div class="d-flex justify-content-around">
                                    <div>
                                        <!-- Forgot password -->
                                        <a href="">Forgot password?</a>
                                    </div>
                                </div>
            
                                <!-- Sign in button -->
                                <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>
            
                                <!-- Register -->
                                <p>Not a member?
                                    <a href="" v-on:click.prevent="isRegister()">Register</a>
                                </p>
            
                            </form>
                        </div>
                      <!--/.Form login-->

                        <!--Form register-->
                        <div class="rotate-vert-center" v-show="register">
                            <form class="text-center rounded p-3 white hoverable" action="#!">

                                <p class="h4 mb-4">Sign up</p>
            
                                
            
                                <!-- Username -->
                                <input type="text" id="defaultRegisterFormUsername" class="form-control mb-4" v-model="username"  placeholder="Username">
            
                                <!-- E-mail -->
                                <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" v-model="email"  placeholder="E-mail">
            
                                <!-- Password -->
                                <input type="password" id="defaultRegisterFormPassword" class="form-control" v-model="password" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">
                                <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                                    At least 8 characters and 1 digit
                                </small>
            
                                <!-- Re-Password -->
                                <input type="password" id="" class="form-control" v-model="rePassword" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">
                                <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                                    passwords are different
                                </small>
            
                                <!-- Sign up button -->
                                <button class="btn btn-info my-4 btn-block" v-on:click.prevent="addUser()" type="submit">Sign in</button>
            
                                <!-- login -->
                                <p>You are a member?
                                    <a href="" v-on:click.prevent="isLogin()">login</a>
                                </p>
            
                            </form>
                        </div>
                        <!--/.Form register-->
                    </div>
                    <!--Grid column-->
                  </div>
                  <!--Grid row-->
                </div>
                <!-- Content -->
              </div>
              <!-- Mask & flexbox options-->
            </div>
            <!-- Full Page Intro -->
          </header>
          <!-- Main navigation -->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      login: true,
      register: false,
      username: null,
      email: null,
      password: null,
      rePassword: null
    }
  },
  methods:{
    isLogin(){
      this.login = true,
      this.register = false
    },
    isRegister(){
      this.login = false,
      this.register = true
    },
    addUser(){
      // console.log(this.username, this.email, this.password, this.rePassword,)
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/',
        data: {
          username: this.username,
          email: this.email,
          password: this.password,
          avatar: "https://icon-library.com/images/avatar-icon-png/avatar-icon-png-26.jpg"
        }
      })
      .then((res) => {
        let ID = res.data.id
        this.$router.push({name: 'Profile', params: {userID: ID}})
      })
      .catch((e)=>console.log(e))
    },
  },
}
</script>

<style scoped>

    
  
    h6 {
      line-height: 1.7;
    }

    /* TEXT ANIMATE */
    @import url('https://fonts.googleapis.com/css?family=Roboto:700');
@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.animated-title {
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50vmin;
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animated-title > div div {
  font-size: 6vmin;
  padding: 1vmin 0;
  position: absolute;
}
.animated-title > div div span {
  display: block;
}
.animated-title > div.text-top {
  border-bottom: 0.5vmin solid #33b5e5;
  top: 0;
}
.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}
.animated-title > div.text-top div span:first-child {
  color: #33b5e5;
}
.animated-title > div.text-bottom {
  bottom: 0;
}
.animated-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}

.rotate-vert-center {
  -webkit-animation: rotate-vert-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
          animation: rotate-vert-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}
  /* ----------------------------------------------
 * Generated by Animista on 2020-8-28 12:1:4
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation rotate-vert-center
 * ----------------------------------------
 */
@-webkit-keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}
@keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}

.mask{
     background: #E0EAFC !important;
      background: -webkit-linear-gradient(to left, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to left, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 
  }
</style>
