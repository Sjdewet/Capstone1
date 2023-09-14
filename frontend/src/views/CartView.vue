<template>
    <div class="shopping-cart">
      <h2>Your Shopping Cart:</h2>
      <ul v-if="cart.length" class="cart-items">
        <li v-for="item in cart" :key="item.prodID" class="cart-item">
            <img :src="item.key.prodUrl" style="width: 10rem" alt="">
          {{ item.key.prodName }} - Price: R{{ item.key.amount }} - Quantity:
          <input
            type="number"
            v-model="item.key.quantity"
            @input="updateQuantity(item)"
            class="quantity-input"
          />
          <button @click="removeFromCart(item.key.prodID)" class="remove-button">Remove</button>
        </li>
      </ul>
      <p v-else class="empty-cart-message">No items in the cart.</p>
      <!-- <div v-for="item in cart" :key="item.prodID">
        <p>{{ item.prodName }}</p>
      </div> -->
      <p class="cart-total">Total: R{{ number }}</p>
     <li>
      <router-link class="checkout" to="/checkout">Checkout</router-link>
    </li>
    
    </div>
  </template>
  <script>
  export default {
    computed: {
        cart() {
        // return this.$store.state.cartItems;
        const cart = JSON.parse(localStorage.getItem('cart')) || [
                    ]
        return cart
      },
 

    number() {
        const cart = JSON.parse(localStorage.getItem('cart'))
        const total = cart.reduce((total, item) => total + item.key.amount , 0)
        return total
    }
    },
    methods: {
      removeFromCart(product_id) {
        // this.$store.dispatch('removeFromCart', product_id);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = cart.filter((item) => item.key.prodID !== product_id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      location.reload()
      },
      updateQuantity(item) {
        this.$store.dispatch('updateQuantity', { product_id: item.id, quantity: item.quantity });
      },
    },
  };
  </script>
  <style scoped>
  .shopping-cart {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    color: white;
  }
  .cart-items {
    list-style: none;
    padding: 0;
  }
  .cart-item {
    margin-bottom: 10px;
  }
  .quantity-input {
    width: 50px;
  }
  .remove-button {
    background-color: #FF5733;
    color: #fff;
    border: none;
    padding: 1px 10px;
    cursor: pointer;
    width: 5rem;
  }
  .remove-button:hover {
    background-color: #E5482E;
  }
  .empty-cart-message {
    font-style: italic;
  }
  .cart-total {
    font-weight: bold;
    font-size: 1.2rem;
  }
.checkout{
  background-color: #C6A443;
  width: 9rem;
  height: 5rem;
  color: black;
  text-decoration: none;
}
  </style>