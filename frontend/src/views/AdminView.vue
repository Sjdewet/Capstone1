<template>
    <div class="about">
      <Navbar/>
      <br>
  <h2>Admin Interface</h2>
      <AddProduct />
      <div class="table-responsive" style="margin-top: 1rem">
        <table class="table-black w-100">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody v-for="product in products" :key="product.prodID">
            <tr>
              <th scope="row">{{ product.prodID }}</th>
              <td>{{ product.prodName }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.amount }}</td>
              <td>{{ product.Category }}</td>
              <td>
                <img
                  :src="product.prodUrl"
                  :alt="product.prodName"
                  style="width: 5rem"
                />
              </td>
              <td><router-link class="edit" :to="{ name: 'editp', params: { id: product.prodID } }">Edit</router-link></td>
              <td><button class="btn" type="button" @click="deleteProd(product.prodID)">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>User</h2>
      <button class="addbtn"><AddUser/> </button>
      <div class="table-responsive" style="margin-top: 1rem" v-if="products">
          <table class="table-black w-100" style="background-color:black">
            <thead style="background-color:black">
              <tr style="background-color:black">
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Role</th>
                <th scope="col">Email</th>
                <th scope="col">Profile</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody v-for="user in users" :key="user.userID">
              <tr>
                <th scope="row">{{ user.userID }}</th>
                <th>{{ user.firstName }}</th>
                <td>{{ user.lastName }}</td>
                <td>{{ user.userAge }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.userRole }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>
                  <img
                    :src="user.userProfile"
                    :alt="user.prodName"
                    style="width: 5rem"
                  />
                </td>
              <td>
                <router-link class="edit" :to="{ name: 'editu', params: { id: user.userID } }">Edit</router-link>
              </td>
                <td><button class="btn" type="button" @click="deleteUser(user.userID)">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="else" v-else>
          <Spinner/>
        </div>
      </div>
  </template>
    <script>
    import AddProduct from '@/components/AddProduct.vue';
   // import AddUser from '@/components/AddUser.vue'
  export default {
    computed: {
      products() {
        return this.$store.state.products;
      },
      users(){
          return this.$store.state.users;
      }
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
      this.$store.dispatch("fetchUsers");
    },
    components:{
      AddProduct,
      //  HeaderComp
     },
     methods: {
      deleteProd(prodID) {
        this.$store.dispatch("ProdDeleted", prodID)
      },

      deleteUser(userID) {
          this.$store.dispatch('UserDeleted', userID)
      },
     }

  };
  </script>

  <style scoped>
  .about{
    color: #C6A443;
    text-align: center;
  }
.edit{
color: #C6A443;
}
  .table{
    background-color: black;
    color: antiquewhite;
  }

.button{
    color: #C6A443;
    background-color: black;
    width: 3rem;
}

.btn{
    color: #C6A443;
    background-color: black;
    width: 4.5rem;
}
</style>