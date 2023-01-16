import { createApp } from 'vue'
import App from './App.vue'
// global components is not recommended
// import Greeting from "@/components/Greeting.vue"

let vm = createApp(App)

// vm.component("Greeting", Greeting)

vm.mount('#app')
