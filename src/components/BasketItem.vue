<template>
  <!-- <v-card max-width="450" class="mx-auto">
    <v-list-item :key="product.imageUrl">
      <v-avatar class=""
                size="80"
                tile>
        <v-img :src="product.imageUrl" height="100%" width="100%"></v-img>
      </v-avatar>

      <v-list-item-content class="ml-2">
        <v-list-item-title v-html="product.name"></v-list-item-title>
        <v-list-item-subtitle >{{product.price +" Fc"}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card> -->
  <v-card>
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
</template>

<script>
import { mapMutations,mapState } from "vuex";
export default {
  name: "BasketItem",
  props: {
    product: Object,
    index:Number
  },
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
};
</script>