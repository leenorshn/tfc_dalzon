<template>
  <div class="d-flex justify-center align-center">
    <v-menu
      
      :rounded="rounded"
      offset-y
      min-width="300"
      max-height="80vh"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          class="white--text ma-8 pink"
          v-bind="attrs"
          v-on="on"
        >
         90<v-icon class="mx-4">fas fa-shopping-cart</v-icon><v-icon >keyboard_arrow_down</v-icon>
        </v-btn>
      </template>

      <v-list>
       
        <v-card  v-for="(product,index) in basket"
            :key="index"
          link
    >
    <div class="d-flex flex-no-wrap justify-space-start">
      <v-avatar class="ma-3" size="88" tile>
        <v-img :src="product.imageUrl"></v-img>
      </v-avatar>
      <div>
        <v-card-title class="subtitle-1" v-text="product.name"></v-card-title>

        <v-card-action>
          <v-row>
            <v-btn icon outlined="" @click="removeOneQ(product)">-</v-btn>
            <v-card-subtitle>{{ quantityP }}</v-card-subtitle>
            <v-btn icon outlined="" @click.prevent="addOneQ(product)">+</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon outlined="" @click.prevent="deleteProduct"><v-icon>delete</v-icon></v-btn>
          </v-row>
        </v-card-action>
      </div>
    </div>
  </v-card>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import { mapState,mapMutations } from "vuex";

export default {
    name:"MiniCart",
    
    computed:{
        ...mapState(['basket']),
    quantityP:function(){
      console.log(this.basket[this.index]);
      return this.basket[this.index].quantity;
    }
    },
    methods:{
      ...mapMutations(['REMOVE_ITEM']),
      deleteProduct:function(){
          this.REMOVE_ITEM(this.index);
      },
      addOneQ:function(product){
       product.quantity=product.quantity+1;
      },
      removeOneQ:function(product){
        if(product.quantity===1){
          this.REMOVE_ITEM(this.index);
        }else{
          product.quantity=product.quantity-1;
        }

      }
  }

}
</script>