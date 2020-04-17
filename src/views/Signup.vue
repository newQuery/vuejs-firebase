<template>
    <div class="sign-up">
        <p>Let's create a new account !</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signUp">Sign Up</button>
        <span>or go back to <router-link to="login">login</router-link></span>
    </div>
</template>


<script>
    import * as firebase from "firebase";

    export default {
        name: 'signup',
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            signUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(function() {
                    alert('Your user has been created !');
                })
                .catch(function(error) {
                    alert(error.message);
                })
            }
        }
    }
</script>

<style scoped>
    .sign-up {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px ;
    }
</style>
