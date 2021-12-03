<template>
<div class="main">
  <v-row justify="center" class="mt-0">
     <img src="https://cdn.mos.cms.futurecdn.net/kPTwCmCKYJUwGbDbRZr9MX.png" alt="" width="230px" height="150px">
  </v-row>

  <v-row justify="center">
    <v-col
     class="mt-0"
      cols="10"
      sm="8"
      md="6"
      lg="4"
    >
    <v-form ref="form" >
      <v-card ref="form">
        <v-card-text>
             <h1 class="text-center black--text">Signup</h1>
          <v-text-field
            ref="firstname"
            v-model="userData.name.firstname"
            :rules="firstnameRule"
            :error-messages="errorMessages"
            label="First Name"
            placeholder="First Name"
            required
          ></v-text-field>

           <v-text-field
            ref="lastname"
            v-model="userData.name.lastname"
            :rules="lastnameRule"
            :error-messages="errorMessages"
            label="Last Name"
            placeholder="Last Name"
            required
          ></v-text-field>

          <v-text-field
            ref="userName"
            v-model="userData.username"
            :rules="UsernameRule"
            :error-messages="errorMessages"
            label="Username"
            placeholder="John Doe"
            required
          ></v-text-field>

           <v-text-field
            ref="email"
            v-model="userData.email"
            :rules="emailRule"
            :error-messages="errorMessages"
            label="Email"
            placeholder="xyz@gmail.com"
            required
          ></v-text-field>

           <v-text-field
            ref="password"
            v-model="userData.password"
            :type="'Password'"
            :rules="passwordRule"
            :error-messages="errorMessages"
            label="Password"
            placeholder="***"
            required
          ></v-text-field>

            <v-text-field
            ref="phone"
            v-model="userData.phone"
            :type="'number'"
            :rules="numberRule"
            :error-messages="errorMessages"
            label="Phone"
            placeholder="03001234567"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider ></v-divider>
        <v-card-actions >
               <v-btn
               
            color="success"
            text
            @click="submit"
          >
            Submit
          </v-btn>
          <v-spacer></v-spacer>
        
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <!-- <v-icon>mdi-refresh</v-icon> -->
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
       
        </v-card-actions >
          <span class="link mt-3">Sign in to your Account <router-link to="/">login</router-link></span>
      </v-card><br>
    </v-form>
    </v-col>
  </v-row>
</div>
</template>
<script>
import 
{
        UsernameRule,
        emailRule,
        firstnameRule,
        lastnameRule,
        passwordRule,
        numberRule } from './validation/validation.js';

  export default {
    components:{
      // Navbar,
    },
    data: () => ({
        userData: {
        address: {
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
          city: "Lahore",
          street: "12-A, Johar Town",
          number: "",
          zip: "12926-3874",
        },
        email: "",
        username: "",
        password: "",
        name: {
          firstname: "",
          lastname: "",
        },
        phone: "",
      },
      errorMessages: '',
      formHasErrors: false,
      emailRule: emailRule,
      UsernameRule:UsernameRule,
      firstnameRule:firstnameRule,
      lastnameRule:lastnameRule,
      passwordRule:passwordRule,
      numberRule:numberRule,
    }),

    computed: {
      form () {
        return {
          userName: this.userName,
          email : this.email,
          firstname : this.firstname,
          lastname : this.lastname,
          password: this.password,
          phone:this.phone,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
                
          localStorage.setItem(this.userData.email,JSON.stringify(this.userData));
           localStorage.setItem("firstname", this.userData.name.firstname);
          localStorage.setItem("lastname", this.userData.name.lastname);
          localStorage.setItem("username", this.userData.username);
          localStorage.setItem("currentUser", this.userData.email);
          localStorage.setItem("password", this.userData.password);
          localStorage.setItem("phone", this.userData.phone);
           
        
        
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true
          this.$refs[f].validate(true)
          if(this.$refs[f].validate(true)
          ){
            
            this.$router.push({ name: "login" });

          }
          

        })
      },
    },
  }
</script>
<style>

</style>