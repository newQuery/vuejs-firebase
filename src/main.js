import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase";

Vue.config.productionTip = false;


let app = '';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyASMAGmeDOoGyVw8GjTTlDNq_q_OJpsIvU",
  authDomain: "survey-e1bfe.firebaseapp.com",
  databaseURL: "https://survey-e1bfe.firebaseio.com",
  projectId: "survey-e1bfe",
  storageBucket: "survey-e1bfe.appspot.com",
  messagingSenderId: "504253272195"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
