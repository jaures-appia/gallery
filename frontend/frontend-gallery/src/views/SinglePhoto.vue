<template>
  <div class="index2">
    <my-header></my-header>
    <div class="container ">
       <!-- single photo -->
        <div class="row mt-5 mb-5" v-show="seePhoto">
            <div class="col-lg-8 offset-lg-2">
                <!-- Card -->
                <div class="card booking-card">

                <!-- Card image -->
                <div class="view overlay">
                    <img class="card-img-top" :src="photo.photoUrl" alt="Card image cap">
                    <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                <!-- Card content -->
                <div class="card-body">

                    <!-- Title -->
                    <small class="text-sm text-muted float-right">Ajouté le {{ photo.createdAt }}</small>
                    <h4 class="card-title font-weight-bold">{{ photo.title }}</h4>
                    
                
                    <!-- Text -->
                    <p class="card-text">{{ photo.descrciption }}</p>
                    <hr class="my-2">
                    <!-- Button -->
                    <a href="#" class="btn btn-info btn-rounded p-1 mx-0 mb-0 mr-2" v-on:click.prevent="isModifyPhoto()">Modifier</a>
                    <a href="#" class="btn btn-danger btn-rounded p-1 mx-0 mb-0">Supprimer</a>

                </div>

                </div>
                <!-- Card -->
            </div>
        </div>


        <!-- update photo -->
        <div class="row mt-5 mb-5" v-show="modifyPhoto">
            <div class="col-lg-8 offset-lg-2">
                <!-- Default form contact -->
                <form class="text-center border border-dark border-top-0 border-right-0 p-5" action="#!">
        
                    <p class="h4 mb-4">Edit Photo</p>
        
                    <div class="z-depth-1-half mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" class="img-fluid"
                        alt="example placeholder">
                    </div>
        
                    <!-- Name -->
                    <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Title">
        
                    <!-- photo -->
                    <div class="input-group mb-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input form-group" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                    </div>
        
                    <!-- Message -->
                    <div class="form-group">
                        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Description"></textarea>
                    </div>
        
                    <!-- Send button -->
                    <input class="btn btn-info btn-block" type="submit" value="Validate" v-on:click.prevent="isSeePhoto()">
        
                </form>
                <!-- Default form contact -->
            </div>
        
        
        </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default {
  name: 'SinglePhoto',
  components: {
    "my-header": Header,
    "my-footer": Footer,
  },
  data(){
    return{
      seePhoto: true,
      modifyPhoto: false,
      id: this.$route.params.photoID,
      photo: null,
    }
  },
  methods:{
    isModifyPhoto(){
        this.seePhoto = false,
        this.modifyPhoto = true
    },
    isSeePhoto(){
        this.seePhoto = true,
        this.modifyPhoto = false
    }
  },
  mounted(){
    axios
    .get('http://localhost:3000/photos/'+this.id)
    .then((res) => {
      console.log(res)
      this.photo = res.data
    })
    .catch((e) => {
      console.log(e)
    })
  }
}
</script>

<style lang="" scoped>

</style>
