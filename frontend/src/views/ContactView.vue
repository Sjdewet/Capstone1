
<template>
  <div>
    <form action="https://formspree.io/f/xyyaonqq" method="POST">
      <div class="container contactForm">
        <h2 class="heading1">Contact Details: </h2>
            <h5 class="heading1">Email Address: summerdewet@gmail.com</h5>
            <h5 class="heading1">Phone: 081 321 2836</h5>
            <h1 class="heading">GET IN TOUCH WITH US...</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-black">First Name:</label>
          <input type="First Name" name="First Name" class="form-control" id="exampleFormControlInput1"
            placeholder="Name"  required
            oninvalid="this.setCustomValidity('Please Enter Your First Name')"
            oninput="this.setCustomValidity('')"
          /> 
        </div>
        <div class="mb-1">
          <label for="exampleFormControlInput1" class="form-label text-black">Last Name:</label>
          <input type="Last Name" name="Last Name" class="form-control" id="exampleFormControlInput1" placeholder="Surname"  required
          oninvalid="this.setCustomValidity('Please Enter Your Last Name')"
          oninput="this.setCustomValidity('')"
        />
              
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-black">Email address:</label>
          <input type="email" name="email" class="form-control" id="exampleFormControlInput1"
            placeholder="name@example.com" required oninvalid="this.setCustomValidity('Please Enter Your Email')"
            oninput="this.setCustomValidity('')" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label text-black">Please leave a message:</label>
        </div>
        <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <div class="btns">
          <button class="formButton mt-3 gap-3 butn1" type="submit">Send</button>
          <button class="formButton mt-3 gap-3 butn2" type="reset">Clear</button>

        </div>
      </div>

    </form>
  </div>
</template>
<script>

</script>

<style scoped>
.contactForm {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
}

form {
  width: 100%;
  border-radius: 2rem;
  border-color: black;
}

.formButton {
  height: 2rem;
  width: 3rem;
  margin: 3px;
  border-radius: 5px;
  background-color: #C6A443;
  color: black;
}
.h1 {
  text-align: center;
}




.heading{
  text-align: center;
  color: #C6A443;
  margin-top: 2rem;
}
.heading1{
  text-align: center;
  color: white;
}

</style>