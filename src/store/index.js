import Vue from "vue";
import Vuex from "vuex";
import products from "./product.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [...products.products],
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
  actions: {},
  modules: {},
});
