<template>
  <div class="card" style="width: 18rem;" v-if="product">
    <img :src="product.prodUrl" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ product.prodName }}</h5>
      <p class="card-text">
        <span>{{ product.Category }}</span>
      </p>
      <p class="card-text">
        <span>R{{ product.amount }}</span>
      </p>
      <div class="card-footer text-body-secondary">
        <router-link to="/products" class="btn">Back</router-link>
        <button @click="addToCart(product)" class="btn">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    const prodID = this.$route.params.prodID;
    this.$store.dispatch('fetchProduct', prodID);
  },
  data: () => {
    return {
      cart: []
    }

  },
  methods: {
    addToCart(){
      const data = JSON.parse(localStorage.getItem('cart')) || []

      const newData = {key: this.product}

      data.push(newData)

      localStorage.setItem('cart', JSON.stringify(data))
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: black;
  color: #C6A443;
}
</style>
