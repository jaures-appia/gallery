<template>
  <div class="home">
    <div class="bg"></div>
    <div class="container myboxhome">
      <div class="row mt-3 mb-5">
        <div class="col-12 col-md-4 col-lg-2 offset-lg-5 offset-md-4 offset-sm-3 mb-5">
          <!-- Grid column -->
          <div class="col-12 mb-lg-3 mb-1">
    
            <!-- Card -->
            <div class="card hoverable">
    
              <!-- Card image -->
              <a><img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" alt="Card image cap"></a>
              <!-- <a href="single-photo.html"><img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" alt="Card image cap">
              </a> -->
    
              <!-- Card content -->
              <div class="card-body">
    
                <!-- Title -->
                <p class="card-title text-uppercase text-center font-weight-bold mt-1 mb-1">My Photo</p>
                <!-- Text -->
                <p class="text-muted text-center font-small">
                  <small class="text-muted blue-text" style="cursor: pointer" title="edit"><i class="fas fa-edit fa-lg"></i></small>
                <small class="text-muted red-text ml-1" style="cursor: pointer" title="delete"><i class="fas fa-trash-alt fa-lg"></i></small>
                <small class="text-muted orange-text ml-1" style="cursor: pointer" title="resize"><i class="fas fa-crop-alt fa-lg"></i></small>
                </p>
    
              </div>
    
            </div>
            <!-- Card -->
    
          </div>
          <!-- Grid column -->
        </div>
      </div>
      <div class="row box-index">
        <div class="col-lg-7 col-md-12 text-center pt-5 mb-md-5 mt-1 mb-5 mb-sm-5">
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
          <!-- <p class="align-middle"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quidem perferendis. Eius eaque vero minus, iure delectus optio explicabo, veritatis numquam sequi, ad temporibus eveniet fuga nobis mollitia quaerat tempore!</p>
          <p class="align-middle"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quidem perferendis. Eius eaque vero minus, iure delectus optio explicabo, veritatis numquam sequi, ad temporibus eveniet fuga nobis mollitia quaerat tempore!</p>
          <p class="align-middle"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quidem perferendis. Eius eaque vero minus, iure delectus optio explicabo, veritatis numquam sequi, ad temporibus eveniet fuga nobis mollitia quaerat tempore!</p>
          <p class="align-middle"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quidem perferendis. Eius eaque vero minus, iure delectus optio explicabo, veritatis numquam sequi, ad temporibus eveniet fuga nobis mollitia quaerat tempore!</p> -->
        </div>
        <div class="col-lg-4 col-md-12 offset-lg-1 mt-md-5 mt-sm-5 mt-xs-5">
            <!-- login -->
            <div class="row rotate-vert-center" v-show="login">
              <div class="col-lg-12">
                <!-- Default form login -->
                <form class="text-center border border-dark border-top-0 border-right-0 p-3" action="#!">

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
                <!-- Default form login -->
              </div>
            </div>

            <!-- register -->
            <div class="row rotate-vert-center" v-show="register">
              <div class="col-lg-12">
                  <!-- Default form register -->
                  <form class="text-center border border-dark border-top-0 border-right-0 p-3" action="#!">

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
                  <!-- Default form register -->
                </div>
            </div>
        </div>
      </div>

        
    </div>
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
  color: #767676;
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
</style>
