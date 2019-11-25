import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyBqpKk1t-uG04f5fo5bJMQd4zg0pFiKgvg",
  authDomain: "superheroes-6c832.firebaseapp.com",
  databaseURL: "https://superheroes-6c832.firebaseio.com",
  projectId: "superheroes-6c832",
  storageBucket: "superheroes-6c832.appspot.com",
  messagingSenderId: "1016552198415",
  appId: "1:1016552198415:web:db1e8afee90eac2cf06e7a",
  measurementId: "G-3RZ3VX1T9N"
};

firebase.initializeApp(configOptions);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
