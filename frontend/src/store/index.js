import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://summercapstone.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null,
    addProduct:null,
    addUser:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setSpinner(state, spinner) {
      state.spinner = spinner
    },
    setToken(state, token) {
      state.token = token
    },
    setMsg(state, msg) {
      state.msg = msg
    },
    setDeleteProducts(state, data) {
      state.products = data
    },
    setDeleteUsers(state, data) {
      state.users = data
    },
    setAddProduct(state,data){
      state.addProduct = data
    },
    setAddUser(state,data){
      state.addUser = data
    }},
  actions: {
    async fetchUsers(context) {
      try{
        const {data} = await axios.get(`${url}users`)
        context.commit("setUsers", data.results)
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async fetchProducts(context) {
      try{
        const {data} = await axios.get(`${url}products`)
        context.commit("setProducts", data.results)
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async fetchProduct(context, prodID) {
      try{
        const {data} = await axios.get(`${url}product/${prodID}`)
        context.commit("setProduct", data.results[0])
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async DeleteProducts(context, prodID ) {
      try{
        const response = await axios.delete(`${url}product/${prodID}`)
        context.commit("setDeleteProducts", response)
        location.reload()
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async DeleteUsers(context, userID ) {
      try{
        const response = await axios.delete(`${url}users/${userID}`)
        context.commit("setDeleteUsers", response)
        location.reload()
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async addProduct({ commit }, productData) {
      const response = await axios.post(`${url}products`, productData)
      location.reload()
      commit('setAddProduct', response.data)
    },
    async addUser({ commit }, userData) {
      try {
        const response = await axios.post(`${url}users`, userData)
        commit('setAddUser', response.data)
        location.reload()
        console.log('testing');
      } catch (error) {
        console.log(error);
      }
    },
    //register
    async addUser(context, payload) {
      try {
        const { msg } = (await axios.post(`${url}register`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
  },
  modules: {
  }
})