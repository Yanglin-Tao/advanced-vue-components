
<template>
  <app-form>
    <template v-slot:help>
      <p> {{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <!-- this text will be added to the default slot location -->
    <p>Dummy text</p>
    <!-- <div class="help">
      <p>This is some help text.</p>
    </div>
    <div class="fields">
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
    </div>
    <div class="buttons">
      <button type="submit">Submit</button>
    </div> -->
  </app-form>

  <!-- default content will be displayed if there is no form to render -->
  <app-form></app-form>

  <!-- named slots -->
  <app-form>
    <!-- v-slot directive does not work with <div> tag, use <template> tag instead -->
    <template v-slot:help>
      <p>Contact help text.</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name">
      <input type="text" placeholder="message">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
</template>

<script>
import AppForm from "./components/Form.vue"
export default {
  name: "App",
  components: {
    AppForm,
  },
  data(){
    return {
      help: 'This is some help text.'
    }
  }
}
</script>