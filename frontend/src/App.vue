<template>
  <div>
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>


</style>

<script>
import Navbar from '../src/components/NavBar.vue'
import Footer from './components/Footer.vue'
  export default{
    components:{
      Navbar,
      Footer
    }
  }
</script>
