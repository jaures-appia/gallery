<template>
  <div class="index2">
    <my-header></my-header>
    <div class="container ">
         <div class="row mt-5">
            <div class="col-lg-6 offset-lg-3">
                <!-- Default form contact -->
                <form class="text-center border border-light p-5" action="#!">

                <p class="h4 mb-4">Add New Photo</p>

                <div class="z-depth-1-half mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" class="img-fluid"
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
                <input class="btn btn-info btn-block" type="submit" value="Validate">

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

export default {
  name: 'Index2',
  components: {
    "my-header": Header,
    "my-footer": Footer,
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  },
}
</script>

<style lang="" scoped>

</style>
