import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    basket: [],
  },
  mutations: {
    ADD_BASKET: (state, product) => {
      for (var i =0;i<state.basket.length;i++) {
        if (state.basket[i].id === product.id) {
           return state.basket[i].quantity = state.basket[i].quantity + 1;
        }
      }
      state.basket.push({
        id:product.id,
        name:product.name,
        detail:product.detail,
        price:product.price,
        imageUrl:product.imageUrl,
        quantity:1,
      });
    },
    REMOVE_ITEM: (state, id) => {
      state.basket.splice(id, 1);
    },
    SET_PRODUCTS:(state,data)=>{
      state.products=data;
    }
  },
  getters: {
    countProducts: (state) => {
      return state.products.length;
    },
    countBasket: (state) => {
      return state.basket.length;
    },
    totalPrice: (state) => {
      var totalP=0;
      for (var item in state.basket) {
        totalP = totalP+ (state.basket[item].quantity * state.basket[item].price);
      }
      return totalP;
    },
  },
  actions: {
    ///get products
    async getProducts({commit}){
      const response=await axios.get("http://127.0.0.1:4040/products");
      console.log(response.data);
      commit("SET_PRODUCTS",response.data);
    }
  },
  modules: {},
});
