<template>
  <div>
    <h3 class="h3">ACCOUNT LOGIN</h3>
    <div style="display: flex; justify-content:center">
      <div class="row">
       <form action="action_page.php" method="post" @submit.prevent="login">
        <div class="container">
        <label for="uname"><b>Email Address</b></label>
       <input type="text" placeholder="Enter Username" v-model="payload.emailAdd" name="uname" required>
         
       <label for="psw"><b>Password</b></label>
       <input type="password" placeholder="Enter Password" v-model="payload.userPass" name="psw" required>
         
       <button type="submit">Login</button> 
       </div>
         </form>
      </div>
       </div>
  </div>
</template>

<script>
  export default {
    data() {
    return {
      payload: {
        emailAdd: "",
        userPass: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  }
  }
</script>

<style scoped>
/* Bordered form */
.row{
  border: 1px solid #f1f1f1;
  width: 40%;
  display: flex;
  justify-content: center;
}
.h3{
  color: #C6A443;
  text-align: center;
  margin-top: 2rem;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #C6A443;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}


/* Add padding to containers */
.container {
  padding: 16px;
  width: 100%;
}


</style>