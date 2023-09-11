<template>
    <div>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <img src="https://i.postimg.cc/BQVVrvT1/Screenshot-2023-08-30-121635-removebg-preview.png " style="width:7rem;" alt="">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li style="margin-left:5rem;">
                        <router-link class="head" to="/">Home</router-link>
                      </li>
                      <li>
                        <router-link class="head" to="/about">About Us</router-link>
                      </li>
                      <li>
                        <router-link class="head" to="/products">Products</router-link>
                      </li>
                      <li>
                        <router-link class="head" to="/login">Login</router-link>
                      </li>
                      <li>
                        <router-link class="head" to="/register">Register</router-link>
                      </li>
                      <li>
                        <router-link class="head" to="/admin">Admin</router-link>
                      </li>
                      <li>
                        <router-link class="head" to="/checkout">Checkout</router-link>
                      </li>
                      <li>
                        <router-link class="head" to="/profile">View Profile</router-link>
                      </li>
                      <li>
                        <router-link class="head" to="/contact">Contact Us</router-link>
                      </li>
                      <li>
                        <router-link class="head" to="/Login" @click="logOut">Log Out</router-link>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn" type="submit">Search</button>
                    </form>
                  </div>
            </div>
        </nav>
    </div>
</template>

<script>
  import {useCookies} from 'vue3-cookies'
  const {cookies}= useCookies()
export default {
  computed:{
    user(){
      return this.$store.state.user 
    },
    result(){
      return this.user?.result
    },
    isAdmin(){
      return this.result?.userRole?.toLowerCase() === 'admin'
    }
  },
  methods:{
    logOut(){
      this.$store.dispatch('LogOut')
    }
  }
}
</script>

<style scoped>

.btn{
    color: #C6A443;
    border-block-color: #C6A443;
}
.navbar{
    background-color: black;

}

.head{
    color: #C6A443;
    margin-left: 2rem;
    text-decoration: none;
     
}

.navbar-brand{
    color: #C6A443;
}
</style>