<template>
    <div>
        <form action="action_page.php" method="post">
            <div class="imgcontainer">
              <img src="https://i.postimg.cc/598GgYgs/no-profile-picture-6-1024x1024.jpg " alt="Avatar" class="avatar">
            </div>
          
            <div class="container">
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required>
          
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required>
          
              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
              </label>
            </div>
          </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* Bordered form */
form {
    border: 3px solid #f1f1f1;
    width: 50%;
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

  
  /* Center the avatar image inside this container */
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
  }
  
  /* Avatar image */
  img.avatar {
    width: 10%;
    border-radius: 50%;
  }
  

</style>