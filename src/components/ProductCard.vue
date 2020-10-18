<template>
  <v-card :loading="loading" class="mx-auto my-4" max-width="260">
    <v-img height="160" :src="product.imageUrl"></v-img>

    <v-card-title>{{ product.name }}</v-card-title>

    <v-card-text>
      <div>{{ product.detail }}</div>
    </v-card-text>

    <v-divider class="mx-2"></v-divider>
    <v-row align="center"
        class="mx-0">
        <v-card-actions>
          <v-btn outlined="" color="deep-purple" text @click.prevent="addBasket(product)">
            Acheter
          </v-btn>
        </v-card-actions>
        <v-spacer></v-spacer>
        <span  class="mr-4 green--text">{{ product.price +" Fc"}}</span>
    </v-row>
  </v-card>
</template>
         

<script lang="ts">
import Vue from "vue";
import {mapMutations} from "vuex"
export default Vue.extend({
  name: "ProductCard",
  props: {
    product: Object,
  },
  data() {
    return {};
  },
  methods:{
      ...mapMutations(['ADD_BASKET']),
      addBasket:function(product){
          this.ADD_BASKET(product);
      }
  }
});
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: -5;
  position: absolute;
  width: 100%;
}
</style>