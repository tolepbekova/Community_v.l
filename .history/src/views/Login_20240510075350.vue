<template>
    <div>
        <v-app id="header">
            <v-card color="grey lighten-4" flat height="100px" tile>
                <v-toolbar dense>

                  <router-link   to="/home"> <img class="logo" src="../assets/logo/log.svg"></router-link>

                    <v-spacer></v-spacer>

                    <span><router-link to="/getstart">Chat</router-link></span>
                        <span><router-link to="/contact">Contact us</router-link></span>
                        <span><router-link to="/auth">Login</router-link></span>

                    
                </v-toolbar>
            </v-card>
        </v-app>

        <br><br><br>

        <div class="abrow">
            <br><br>
            <div class="abcolu">
                <img src="../assets/logo/finalicon13_1.svg" alt="">
            </div>
            <div class="abcolu">
                <h1>Welcome Back</h1>
                <br>
                <input type="email" v-model:value="info.email" placeholder="SDU email address">
                <br><br>
                <input type="password" v-model:value="info.password" placeholder="Password" required>
                <br><br>
                <router-link to="getstart"><button class="btn" @click="login()">Continue</button></router-link>
                <br><br>
                <p>Don't have an account? <router-link to="sign in">Sign up</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            token: "",
            info: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        login() {
            axios
                .post(
                    ` https://sschat-production.up.railway.app/accounts/auth/token/login/`,
                    this.info
                )
                .then((res) => {
                    this.token = res.auth_token;
                });
        },
    },
}; 
</script>

<style scoped>
h1 {
    color: rgba(33, 33, 83, 1);
}

#app {
    display: flex;

}

#header {
    display: flex; 
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    color:rgba(33, 33, 83, 1) ;
}

.logo {
    width: 270px;
    height: 77px;
}

#navbar {
    display: flex;
    align-items: center;
    justify-content: center;
}
span  {
    list-style: none;
    padding: 0 20px;
    text-decoration: none;
    font-size: 30px;
    color: rgba(33, 33, 83, 1);
    transition: 0.3s ease;
}

#navbar li :hover {
    color: rgba(33, 33, 83, 1);
}
h1 {
  color: rgba(33, 33, 83, 1);
}


.abrow {
  margin: 20px auto;
  display: block;
  text-align: center;
  margin-left: 550px;
}

.abcolu {
  margin: 0 auto;
  display: block;
  text-align: center;
}

img {
  max-width: 99px;
  max-height: 99px;
}


.abp {
  margin: 0 auto;
  display: block;
  width: 670px;
  height: 100px;
}


.abp {
    margin: 0 auto;
    display: block;
    width: 670px;
    height: 100px;
}

.icon {
    width: 24px;
    height: 24px;
}

.btn {
    background-color: rgba(33, 33, 83, 1);
    border-radius: 20px;
    width: 280px;
    height: 50px;
    color: #ffffff;
}

input {
    border-radius: 20px;
    width: 350px;
    height: 50px;
    border-color: rgba(33, 33, 83, 1);
}

a {
    padding: 0 20px;
    text-decoration: none;
    font-size: 30px;
    color: rgba(33, 33, 83, 1);
    transition: 0.3s ease;
}

.lbtn1 {
    margin: 0 auto;
    display: block;
    width: 266px;
    height: 48px;
    border-radius: 30px;
    color: rgba(33, 33, 83, 1);
    background-color: rgba(253, 211, 149, 1);
    border: none;
    font-size: 15px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;

}

.lbtn2 {
    margin: 0 auto;
    display: block;
    width: 266px;
    height: 48px;
    border-radius: 30px;
    color: rgba(33, 33, 83, 1);
    background-color: rgba(253, 211, 149, 1);
    border: none;
    font-size: 15px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;

}
</style>