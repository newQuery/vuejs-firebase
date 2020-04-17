<template>
  <div class="home">
    <h1>User-friendly instant survey</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import * as firebase from "firebase";

export default {
  name: 'Home',
  components: {
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => { this.$router.replace('login') });
    }
  }
}
</script>
