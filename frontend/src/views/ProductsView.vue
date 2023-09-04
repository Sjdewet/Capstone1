<template>
    <div>
      <div class="products">
        <h1 class="hclass">Check out our Products:</h1>
        <div>
          <div class="row row-cols-1 row-cols-md-3 g-4" v-if="products">
            <div class="col" v-for="product in products" :key="product.prodID">
              <div class="card h-100">
                <img :src="product.prodUrl" class="card-img-top" alt="pic">
                <div class="card-body">
                  <h5 class="card-title">{{ product.prodName }}</h5>
                  <p>{{ product.Category }}</p>
                  <router-link
                  :to="{name: 'product', params:{prodID: product.prodID}}"
                  ><button class="btn btn-outline-light" style="background-color:black">
                    View More
                  </button></router-link
                >
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="spinner" v-else>
            <Spinner/>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  <script>
//   import Spinner from '@/components/SpinnerComponent.vue'
  export default {
    components: {
     },
        computed: {
            products(){
                return this.$store.state.products
            },
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
            // this.$store.dispatch('fetchProduct', this.prodID)
        }
    };

  </script>
  <style scoped>
  
  .hclass {
    text-align: center;
    margin-top: 1rem;
    color: #C6A443;
  }
  .btn {
    background-color: #000000;
    color: #C6A443;
  }
  </style>