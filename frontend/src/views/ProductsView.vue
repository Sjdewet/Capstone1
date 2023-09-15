<template>
  <div>
    <div class="container mt-5">
      <div class="d-flex" role="search" @submit.prevent="filterProducts">
        <input class="form-control me-2" type="search" placeholder="Search Product" aria-label="Search" v-model="searchInput">
      </div>

      <div class="media-fix-3">
        <filterTest />
        
      </div>

      <div class="row g-5">
        <div class="col" v-for="product in filteredProducts" :key="product.prodID">
          <div class="card w-50 h-100">
            <router-link :to="{ name: 'product', params: { prodID: product.prodID } }">
              <div class="card-img">
                <img :src="product.prodUrl" class="card-img-top" alt="pic" style="width: 100%; height: 12rem">
              </div>
              <div class="card-info">
                <p class="text-title">{{ product.prodName }}</p>
                <p>{{ product.Category }}</p>
              </div>

              <div class="card-footer">
                <button class="btn btn-outline-light" style="background-color:black">View More</button>
                <div class="card-button">
                  <svg class="svg-icon" viewBox="0 0 20 20">
                    <!-- Add your SVG paths here -->
                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                  </svg>
                </div>
              </div>
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import filterTest from '../components/filterTest.vue';

import Spinner from '../components/SpinnerComp.vue'
export default {
  components: {
    filterTest,

  },
  data() {
    return {
      searchInput: "",
      // selectedCategory: "",
      // sortType: "name"
    };

  },
  methods: {
    filterProducts() {
      const searchQuery = this.searchInput.toLowerCase();
      return this.$store.state.products.filter((product) => {
        const productName = product.prodName.toLowerCase();
        const category = product.Category.toLowerCase();
        return productName.includes(searchQuery) || category.includes(searchQuery);
      });
    },
  },
  computed: {
    products() {
      return this.$store.state.products || []; // Handle case where products is null or undefined
    },
    filteredProducts() {
      let filtered = this.products
      filtered = JSON.parse(JSON.stringify(filtered))
      console.log(filtered)
      const searchQuery = this.searchInput.toLowerCase().trim()
      if(searchQuery){
        filtered = filtered.filter((product)=> product.prodName.toLowerCase().includes(searchQuery) || product.Category.toLowerCase().includes(searchQuery))
      } else if(this.selectedCategory){
        filtered = filtered.filter((product)=> product.Category.toLowerCase() === this.selectedCategory.toLowerCase())
      }
      return [...filtered]
    },
 
  },

  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>
<style scoped>
img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

form {
  margin-top: 1rem !important;
}

.hclass {
  text-align: center;
  margin-top: 1rem;
  color: #C6A443;
}

.btn {
  background-color: #000000;
  color: #C6A443;
}

h1 {
  color: #C6A443;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.home {
  height: 220vh;
}

.row.g-5 {
  margin-top: 1rem;
}

.card {
  width: 190px;
  height: max-content;
  padding: .8em;
  background: rgb(29, 29, 29);
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-inline: 5rem;
}


.card-img {
  border-radius: .5rem;
  transition: .3s ease;
}

.card-info {
  padding-top: 10%;
}

svg {
  width: 20px;
  height: 20px;
  color: white;
}

.card-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}

/*Text*/
.text-title {
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
  color: white;
}

.text-body {
  font-size: .9em;
  padding-bottom: 10px;
  color: white !important;
}

/*Button*/
.card-button {
  border: 1px solid #252525;
  display: flex;
  padding: .3em;
  cursor: pointer;
  border-radius: 50px;
  transition: .3s ease-in-out;
}

/*Hover*/
.card-img:hover {
  transform: translateY(-25%);
  box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
}

.card-button:hover {
  border: 1px solid #ffcaa6;
  background-color: #ffcaa6;
}
</style>