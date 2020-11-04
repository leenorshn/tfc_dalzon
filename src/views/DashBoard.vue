<template>
  <v-app :style="{background:$vuetify.theme.themes.light.background}">
    <v-container>
      <v-row>
      <v-col cols="12" md="4">
        <v-text-field v-model="search" label="Chercher Produit" prepend-icon="search" color="red"></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <span class="red--text mt-9">{{totalProduct}} Articles</span>

      
      </v-row>
      <v-row>
       
          <!-- v-slot:default="{hover}" -->
          <ProductCard v-for="(product,index) in filterProduct" v-bind:product="product" :key="index"/>
        
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
 import {mapState} from "vuex";
import ProductCard from '../components/ProductCard.vue';
export default Vue.extend({
  
  name: 'DashBoard',
  components: {
   ProductCard
  },
  data(){
    
    return {
      search:"",
      
    }
  },
  computed:{
    ...mapState([
      "products"
    ]),
    theme(){
      return (this.vuetify.theme.dark)?"dark":"light"
    },
    totalProduct(){
      return this.filterProduct.length;
    },
    filterProduct(){
      return this.products.filter((p)=>{
        return p.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
  
})
</script>

<style>
  
</style>
