<template>
    <div>
        <section id="header">
            <a href="about.html"><img class="logo" src="C:\Users\суопак\Desktop\Community\src\img\log.png"></a>
            <div>
                <ul id="navbar">
                    <li><a href="getstart.html">Chat</a></li>
                    <li><a href="contact.html">Contact us</a></li>
                    <li><a href="login.html">Log in</a></li>
                </ul>
            </div>
        </section>
        <br><br><br><br>

        <div class="abrow">
            <div class="abcolu">
                <img src="C:\Users\суопак\Desktop\Community\src\img\finalicon13.png" alt="">
            </div>
            <div class="abcolu">
                <h1>Welcome Back</h1>
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

#header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 80px;

}

#header img {
    width: 218px;
    height: 77px;
}

#navbar {
    display: flex;
    align-items: center;
    justify-content: center;
}

#navbar li {
    list-style: none;
    padding: 0 20px;
}

#navbar li a {
    text-decoration: none;
    font-size: 30px;
    color: rgba(33, 33, 83, 1);
    transition: 0.3s ease;
}

#navnar li a:hover {
    color: rgb(237, 237, 167);
}

.abrow {
    margin: 0 auto;
    display: block;
    text-align: center;
}

.abcolu {
    margin: 0 auto;
    display: block;
    text-align: center;
}

img {
    width: 115px;
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
    width: 280px;
    height: 45px;
    border-color: rgba(33, 33, 83, 1);
}

a {
    color: gold;
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