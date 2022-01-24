<<<<<<< HEAD
import App from "./App";

// #ifndef VUE3
import Vue from "vue";
Vue.config.productionTip = false;

// 公共js
import PubFuc from "@/common/js/util.js";
Vue.prototype.$pubFuc = PubFuc;

App.mpType = "app";
const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
=======
import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
>>>>>>> 169aa268565a132fbe3b647d2b326a7ae33c42bc
