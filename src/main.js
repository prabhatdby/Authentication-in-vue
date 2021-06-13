import { createApp } from "vue";
import firebase from 'firebase';
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBLxNfxfZ5BsMbMEwacD8nwOsSYufLPbig",
  authDomain: "vue-app-71bce.firebaseapp.com",
  projectId: "vue-app-71bce",
  storageBucket: "vue-app-71bce.appspot.com",
  messagingSenderId: "288755840186",
  appId: "1:288755840186:web:06395d8e5ec7d9ffbcfe83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
