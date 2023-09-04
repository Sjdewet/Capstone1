<template>
    <body>
     <div class="card" style="width: 18rem;" v-if="product">
         <img :src="product.prodUrl" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">{{ product.prodName }}</h5>
           <p class="card-text">
         <span>{{product.Category }}</span>
       </p>
       <p class="card-text">
         <span> R{{ product.amount }}</span>
       </p>
       <div class="card-footer text-body-secondary">
         <router-link to="/products" class="btn">⬅️Back</router-link>
         <br /><br />
         </div>
       </div>
     </div>
    </body>
 </template>
 
 <script>
   export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted(){
    this.$store.dispatch('fetchProduct', this.$route.params.prodID)
  },
  components:{
   }
};
 </script>
 
 <style scoped>
 .btn{
   background-color: black;
   color: #C6A443;
 }
 </style>