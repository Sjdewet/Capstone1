import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import router from '@/router'
import {useCookies} from 'vue3-cookies'
const {cookies}= useCookies()
import authenticateUser from '@/services/authenticateUser'


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
    add:null
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
    setDeleteUsers(state, data) {
      state.users = data
    },
    setAdd(state,data){
      state.add = data
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
    async UserDeleted(context, userID) {
      try{
        const res = await axios.delete(`${url}user/${userID}`)
        context.commit("setAdd", res.data)
        console.log("worked");
        location.reload()
      } catch(e) {
        console.log("did not work");
      }
    },
    async ProdDeleted(context, prodID) {
      try{
        const res = await axios.delete(`${url}products/${prodID}`)
        context.commit("setAdd", res.data)
        console.log("worked");
        location.reload()
      } catch(e) {
        console.log("did not work");
      }
    },
    async addProduct({ commit }, productdata) {
      try {
        const res = await axios.post(`${url}product`, productdata)
        commit("setAdd", res.data)
        console.log("test complete");
      } catch(e) {
        console.log(err);
      }
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
    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${url}users`, payload)).data;
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
    //login
    async login(context, payload) {
      try {
        const { msg, token, results } = (
          await axios.post(`${url}login`, payload)
        ).data;
        if (results) {
          context.commit("setUser", { results, msg });
          localStorage.setItem("user", JSON.stringify(results))
          cookies.set("MannUser", { msg, token, results });
          authenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${results?.firstName} ${results?.lastName}`,
            icon: "success",
            timer: 4000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    LogOut(context){
      context.commit('setUser')
      cookies.remove("MannUser");

    },
    async SaveEdit(context, editP) {
      try {
        const res = await axios.patch(`${url}products/${editP.prodID}`, editP)
        context.commit("setProducts", res.data)
        console.log(res.data);
      }catch(e) {
        console.log("err");
      }
    }
  },
  modules: {
  }
})