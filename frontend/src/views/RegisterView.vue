<template>
    <div>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="exampleInputfirstName1" class="form-label text-white">firstName</label>
            <input
              type="firstName"
              class="form-control"
              id="exampleInputfirstName1"
              aria-describedby="emailHelp"
              v-model="payload.firstName"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputlastName1" class="form-label text-white">lastName</label>
            <input
              type="lastName"
              class="form-control"
              id="exampleInputlastName1"
              aria-describedby="emailHelp"
              v-model="payload.lastName"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputuserAge1" class="form-label text-white">userAge</label>
            <input
              type="userAge"
              class="form-control"
              id="exampleInputuserAge1"
              aria-describedby="emailHelp"
              v-model="payload.userAge"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputgender1" class="form-label text-white">gender</label>
            <input
              type="gender"
              class="form-control"
              id="exampleInputgender1"
              aria-describedby="emailHelp"
              v-model="payload.gender"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="payload.emailAdd"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label text-white">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="payload.userPass"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputuserProfile1" class="form-label text-white">userProfile</label>
            <input
              type="userProfile"
              class="form-control"
              id="exampleInputuserProfile1"
              v-model="payload.userProfile"
              required
            />
          </div>
          <button type="submit" class="btn">Register</button>
        </form>
      </div>
</template>

<script>
export default {
    data() {
        return {
            payload: {
                firstName: "",
                lastName: "",
                userAge: "",
                gender: "",
                emailAdd: "",
                userPass: "",
                userProfile: "https://i.postimg.cc/HntQPB1k/Feels-Okay-Man.webp"
            }
        }
    },
    methods: {
        register() {
            this.$store.dispatch('register', this.payload)
        }
    }
}
</script>

<style scoped>
.mb-3{
  width: 40%;
}

.btn{
 color: black;
 background-color: #C6A443;
}
</style>