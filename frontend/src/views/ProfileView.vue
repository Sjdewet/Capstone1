<template>
  <div>
    <div>
      <h1 class="text-center p-3 heading-text text-white">My Account</h1>
      <div class="card mx-auto my-3 p-5 user-card">
        <div class="m-3 text-center">
          <img :src="$store.state.user?.userProfile" :alt="$store.state.user?.firstName" class="img-fluid mb-5"
            style="max-width: 60%; border-radius: 50%;" />
          <h2 class="gold-text">
            {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}
          </h2>
          <cite>{{ $store.state.user?.userRole }}</cite>
        </div>
        <div>
          <div class="card mb-5 p-3 info-card">
            <span><strong>User ID: </strong>{{ $store.state.user?.userID }}</span> <br> <br>
            <span><strong>Email: </strong>{{ $store.state.user?.emailAdd }}</span> <br> <br>
            <!-- <span><strong>Password: </strong>{{ $store.state.user?.userPass }}</span> -->
          </div>
          <div class="d-flex justify-content-between">
            <update-user-comp class="btn edit-btn" />
            <button type="submit" class="btn del-btn" @click="deleteUser(user.userID)">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  created() {
    const saveData = localStorage.getItem("user");
    if (saveData) {
      this.user = JSON.parse(saveData)
    }

    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.$store.commit("setUser", data)
    }
  }
}
</script>


<style scoped>
.img-fluid.mb-5 {
  width: 150px ;
}

.user-card{
height: 3%;
width: 33rem;
}

.card{
  height: 5%;
}
</style>