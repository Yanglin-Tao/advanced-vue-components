<template>
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <!-- <component> component loads components dynamically -->
  <!-- :is="" holds component name -->
  <!-- <component :is="componentName"></component> -->

  <!-- keeps the component alive even if it is not showing in DOM -->
  <!-- the componet will not be unmounted -->
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
</template>

<script>
import Home from "./components/Home.vue"
import About from "./components/About.vue"

export default {
  name: "App",
  components: {
    Home,
    About,
  },
  data(){
    return {
      componentName: "Home",
    };
  },
};
</script>