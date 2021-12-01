<template>
  <v-app>
    <!-- <Signup/> -->
    <!-- {{msg}} -->
    <!-- {{this.$store.state.test}} -->
    <!-- <Navbar/> -->

    <v-main>
      <router-view/> 
    </v-main>
  </v-app>
</template>

<script>
// import {mapState} from 'vuex'
  // import Signup from "../views/signup";
  // import Navbar from "./views/Navbar.vue"
export default {
  name: "App",
 


  components: {
    // HelloWorld,
    // Signup
    // Navbar

  },
  data: () => ({
    // msg:'welcome to vue js app.vue'
  }),
};
</script>
