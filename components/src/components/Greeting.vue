<template>
    <!-- data is passed from User component to Greeting component -->
    <p v-if="age > 25"> {{ msg }}</p>
    <p v-else>You must be 25 years or oler to view this message</p>
</template>

<script>
export default{
  name: 'Greeting',
  props: ['age'],
  data() {
    return {
      msg: "Hello World"
    }
  }
}
</script>

<!-- when <style> tag has scoped attribute, its CSS will apply to elements of the current component only. 
    This is similar to the style encapsulation found in Shadow DOM.  -->
<style scoped lang="scss">
p:hover {
    color: darken(#cc4444, 15%);
}
</style>
