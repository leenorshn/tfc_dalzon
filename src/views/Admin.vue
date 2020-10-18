<template>
  <v-container>
    <v-layout row>
      <v-flex md4>
        <BasketItem v-for="(p, index) in basket" :key="index" :product="p" :index="index" />
      </v-flex>
      <v-flex md8>
        <v-container>
          <v-row justify="space-around">
            <v-card min-width="600" min-height="460" class="card-detail">
              <v-card-title class="orange--text mt-4">
                <p class="ml-3">Etat du Panier</p>
              </v-card-title>
              <div class="main-card">
                <div class="left-main-card">
                  <h4>Totol product</h4>
                    <h2>{{totalBasketProduct}}</h2>
                </div>
                <div class="right-main-card">
                  <h4>Prix total</h4>
                  <h2>{{totalP}}</h2>
                </div>
              </div>
              <v-card-text align:center class="orange--text top-main-card mt-4">
                <p class="ml-4">Merci d'avoir utilise notre service.</p>
                <p class="ml-4">Merci infiniment.</p>
              </v-card-text>
              <v-btn block color="orange" class="voila mt-15" dark>Commander</v-btn>
            </v-card>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState ,mapGetters} from "vuex";
import BasketItem from "../components/BasketItem.vue";
export default {
  components: {
    BasketItem,
  },
  computed: {
    ...mapState(["basket"]),
    ...mapGetters(['totalPrice']),
    totalBasketProduct(){
      return this.basket.length;
    },
    totalP(){
      
      return this.totalPrice;
  },
  }
};
</script>

<style scoped>
.main-card {
  width: 80%;
  display: flex;
}
.left-main-card, .right-main-card {
  background-color: rgb(237, 245, 245);
  margin:10px;
  width: 160px;
  height: 100px;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.left-main-card h4, .right-main-card h4{
    font-weight:"300"
}
.voila{
 width:fit-content;
 margin-top: 20%;
 margin-right: 4px;
}
</style>
