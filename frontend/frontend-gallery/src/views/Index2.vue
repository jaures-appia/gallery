<template>
  <div class="index2">
    <my-header></my-header>
    <div class="container ">
        <div class="row">
            <div class="mt-5">

                <!--Section: Content-->
                <section class="text-center">
              
                  <!-- Section heading -->
                  <h3 class="font-weight-bold mb-5">My Photos</h3>
              
                    <!-- Grid row -->
                  <div class="row">
              
                    <!-- Grid column -->
                    <div class="col-lg-4 col-md-12 mb-lg-3 mb-4" v-for="photo in photos" :key="photo.id">
              
                      <!-- Card -->
                      <div class="card hoverable">
              
                        <!-- Card image -->
                        <router-link :to="{ name: 'SinglePhoto', params: { photoID: photo.id }}"><img class="card-img-top" :src="photo.photoUrl" alt="Card image cap"></router-link>
                        <!-- <a href="single-photo.html"><img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" alt="Card image cap">
                        </a> -->
              
                        <!-- Card content -->
                        <div class="card-body">
              
                          <!-- Title -->
                          <p class="card-title text-uppercase font-weight-bold mt-1 mb-3">{{ photo.title }}</p>
                          <!-- Text -->
                          <p class="text-muted font-small mb-1">{{ photo.descrciption }}</p>
                          <small class="text-muted float-left">{{ photo.createdAt }}</small>
              
                        </div>
              
                      </div>
                      <!-- Card -->
              
                    </div>
                    <!-- Grid column -->
              
                  </div>
                  <!-- Grid row -->
              
                </section>
                <!--Section: Content-->

              </div>
        </div>

        <!-- pagination -->
        <div class="row mb-5 mt-2">
            <div class="col-lg-4 offset-lg-4">
                <nav aria-label="Page navigation example">
                    <ul class="pagination pg-blue">
                        <li class="page-item">
                        <a class="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link">1</a></li>
                        <li class="page-item"><a class="page-link">2</a></li>
                        <li class="page-item"><a class="page-link">3</a></li>
                        <li class="page-item">
                        <a class="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                </nav>
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
  name: 'Index2',
  components: {
    "my-header": Header,
    "my-footer": Footer,
  },
  data(){
    return{
      photos: null,
    }
  },
  methods:{
    
  },
  mounted(){
    axios
    .get('http://localhost:3000/photos')
    .then((res) => {
      console.log(res)
      this.photos = res.data
    })
    .catch((e) => {
      console.log(e)
    })

  }
}
</script>

<style lang="" scoped>

</style>
