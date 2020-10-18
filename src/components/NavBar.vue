<template>
<nav>
  <v-app-bar color="white" dark app elevation="1" class="line">
    <v-toolbar-title class="text-uppercase red--text">
      <span class="font-weight-light">
        Cloud
      </span>
       <span>
        Inventory
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <MiniCart/>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" dark app mini-variant mini-variant-width="100" class="pink accent-2">
    <v-list>
      <v-list-item class="mb-8">
        <v-list-item-action>
           <v-icon class="mb-2">fas fa-cloud-download-alt</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-list flat>
      <v-list-item class="mb-8" router to="/">
        <v-list-item-content>
          <v-icon>fas fa-desktop</v-icon>
        </v-list-item-content>
      </v-list-item>
       
      <v-list-item class="mb-8" router to="/about">
      <v-list-item-action>
        <v-badge color="green">
          <template v-slot:badge>{{countBasket}}</template>
           <v-icon >fas fa-shopping-cart</v-icon>
        </v-badge>
      </v-list-item-action>
      </v-list-item>
      <v-list-item class="mb-8" router to="/">
        <v-list-item-action>
          <v-icon>fas fa-cog</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-list-item class="mb-8" router to="/">
        <v-list-item-action>
          <v-icon>fas fa-signature</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</nav>
</template>

<script>
import {mapGetters} from "vuex"
import MiniCart from "./MiniCart.vue";
  export default {
    name: 'NavBar',
    components: {
      MiniCart
    },
    data(){
      return {
        drawer:true
      }
    },
    computed:{
      ...mapGetters(["countBasket"]),
     
    }
    
   
  }
</script>
