<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar dense height="68px">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title class="mt-3">
         <img src="https://assets.website-files.com/610356d21173a02b162d6a04/6104328ed0301d69befa540c_Macys-Logo.png" alt="macys" width="200px" height="80px">
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon class="mt-1">mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon dark color="grey"> mdi-shopping </v-icon>
      </v-btn>

      <v-btn class="" to="/Home">
        <v-icon color="grey" class="mt-0">mdi-home</v-icon>
      </v-btn>

      <v-btn class="mx-2" to="/Profile">
        <v-icon dark color="grey" class="me-1">mdi-account </v-icon>
        Profile</v-btn
      >

      <v-btn class="" @click="signupbt()">logout</v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    signupbt() {
      localStorage.setItem("currentUser","");
      this.$router.push({ name: "Register" });
    },
  },
};
</script>

<style></style>
