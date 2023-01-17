<template>
  <!-- static text -->
  <!-- <p>Hey!</p> -->
  <h3>Hey!</h3>

  <!-- update the age when button is clicked -->
  <!-- update of data in parent component is reflected and overwrites changes in child component-->
  <!-- <button type="button" @click="age++">Update Age</button> -->

  <!-- greeting component -->
  <greeting :age="age"></greeting>

  <!-- user component -->
  <!-- listening to a event -->
  <user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></user>

</template>

<script>
import Greeting from "@/components/Greeting.vue"
import User from "./components/User.vue"

export default{
  name: 'App',
  components: {
    // register a component locally - Greeting component is registered under App component
    // Greeting: Greeting
    Greeting,
    User
  },
  // passing data to a component
  data(){
    return {
      age: 20
    }
  },
  methods: {
    updateAge(num){
      this.age += num
    },
    updateAgeCB(num){
      this.age += num
    }
  }

  
}
</script>
