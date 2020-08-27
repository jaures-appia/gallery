<template>
  <div class="home">
    <div class="bg"></div>
    <div class="container myboxhome">

      <div class="row box-index">
        <div class="col-lg-7 col-md-12 text-center pt-5 mb-md-5 mt-5 mb-5 mb-sm-5">
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
            <div class="row" v-show="login">
              <div class="col-lg-12">
                <!-- Default form login -->
                <form class="text-center border border-light p-5" action="#!">

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
            <div class="row" v-show="register">
              <div class="col-lg-12">
                  <!-- Default form register -->
                  <form class="text-center border border-light p-5" action="#!">

                    <p class="h4 mb-4">Sign up</p>

                    <div class="form-row mb-4">
                      <div class="col">
                        <!-- First name -->
                        <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name">
                      </div>
                      <div class="col">
                        <!-- Last name -->
                        <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name">
                      </div>
                    </div>

                    <!-- E-mail -->
                    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">

                    <!-- Password -->
                    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">
                    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        At least 8 characters and 1 digit
                    </small>

                    <!-- Sign up button -->
                    <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>

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
// import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      login: true,
      register: false
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
  },
}
</script>

<style scoped>
/* .bg{
  height: 150000px;
  width: 100%;
  background: url('https://source.unsplash.com/twukN12EN7c/1920x1080') no-repeat fixed center center;
  z-index: -1;
  position: fixed;
  background-size: cover;
} */

/* .myboxhome{
  margin-top: 15%;
  margin-left: 10%;
  position: absolute;
} */

 .box-index{
  z-index: 1;
  margin-top: 30%;
  
} 

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
</style>
