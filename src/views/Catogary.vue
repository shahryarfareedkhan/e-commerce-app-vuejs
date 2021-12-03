<template>
  <div>
    <Navbar />

    <v-container>
      <v-list-item-title
        class="text-h3 text-center font-weight-bold text-uppercase mt-5"
        >Categories</v-list-item-title
      >

      
      <v-row>
        <v-col
          class="mt-10 mb-5"
          sm="3"
          md="3"
          v-for="(CatogaryName, index) in Catogary"
          :key="index"
        >
          <v-btn @click="fetchdata(CatogaryName)">{{ CatogaryName }}</v-btn>
        </v-col>
      </v-row>

      <!--  -->
      <template v-for="data in getCat">
        <v-card :key="data.id" class="mx-auto mt-5" max-width="350px">
          <v-list-item-title
            class="
              text-h5 text-center
              font-weight-bold
              text-uppercase
              mb-5
              mt-5
            "
            >{{ data.category }}
          </v-list-item-title>
          <v-img :src="data.image" height="300px"></v-img>

          <v-card-title> {{ data.title }} </v-card-title>
          <v-rating
            v-model="rating"
            color="blue-grey darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            small
          ></v-rating>

          <!-- <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
          <v-chip class="ma-3" color="blue-grey lighten-1" text-color="white">
            ${{ data.price }}
          </v-chip>

          <v-btn class="mx-6" fab dark small color="blue-grey lighten-1">
            <v-icon dark> mdi-heart </v-icon>
          </v-btn>
          <v-btn
            class="ml-2"
            color="blue-grey lighten-1"
            @click="fatchsingleProductData(data.id)"
            >Add to Cart</v-btn
          >

          <v-card-actions>
            <v-btn color="blue-grey darken-3" text> See Description </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ data.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </template>
      <template>
        <div class="text-center mt-5 mb-5">
          <v-pagination
            v-model="page"
            :length="4"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          ></v-pagination>
        </div>
      </template>

      -->
    </v-container>
    <!-- <Footer/> -->
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    show: false,
    page: 1,
    drawer: false,
  }),
  methods: {
    fetchdata(apiId) {
      //  alert(apiId);
      this.$store.dispatch("apiCall", apiId);
    },
    fatchsingleProductData(apiId) {
      this.$store.dispatch("fatchsingleProductData", apiId);
      this.$router.push({ name: "SingleProduct" });
    },
  },

  mounted() {
    this.$store.dispatch("loadCatogary");
    if(localStorage.getItem("currentUser") == ""){
          this.$router.push({ name: "login" });
  
      }
  },
  computed: {
    ...mapState(["Catogary"]),
    ...mapGetters(["getCat"]),
    ...mapGetters(["getSingleProduct"]),
  },
};
</script>

<style></style>
