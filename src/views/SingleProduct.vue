<template>
  <div>
           <!-- <v-btn class="grey mt-5 ms-5" to="/Home">Home</v-btn> -->
           <Navbar/>

          
      >
      <v-row>

          <img src="https://www.brandchannel.com/wp-content/uploads/2014/09/macys-pickup-300.jpg" alt="" height="400px" width="300px" class="mt-15  ms-15">
          
    <v-card class=" mx-auto" max-width="300">
       
      
      
       <v-list-item-title
            class="
              text-h5 text-center
              font-weight-bold
              text-uppercase
              mb-5
              mt-5
            "
            >{{ getSingleProduct.category }}
          </v-list-item-title>
      <v-img :src="getSingleProduct.image" height="200px"></v-img>

      <v-card-title>
        {{ getSingleProduct.title }}
      </v-card-title>
       <v-rating
                v-model="rating"
                color="blue-grey darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
                small
              ></v-rating>

              <v-chip class="ma-3"  color="blue-grey lighten-1" text-color="white">
            ${{ getSingleProduct.price }}
          </v-chip>

          <v-btn class="mx-6" fab dark small color="blue-grey lighten-1">
            <v-icon dark> mdi-heart </v-icon>
          </v-btn >


      <v-btn color="success" outlined @click="button()">
        <v-icon left small>mdi-plus</v-icon>
        Add to Cart</v-btn
      >
      


      <v-card-actions>
        <v-btn color="blue-grey darken-3" text> Description </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ getSingleProduct.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card> 
     
     
      </v-row>
      



    
    <v-snackbar top color="green" v-model="snackbar">
      Successfully Add to Cart
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from './Navbar.vue';

export default {
  components: {Navbar},
  data: () => ({
    show: false,
    snackbar: false,
  }),
  methods: {
    button() {
      this.snackbar = true;
    },
  },
  computed: {
    ...mapGetters(["getSingleProduct"]),
  },
  mounted(){
    if(localStorage.getItem("currentUser") == ""){
          this.$router.push({ name: "login" });
  
      }
  }
};
</script>

<style></style>
