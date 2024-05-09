<script setup>
import HelloWorld from './components/HelloWorld.vue'
import router from './router/index.js'
import './assets/base.css'
</script>

<template>
  <div id="app">
    <header>

      <section id="header">
        <a href="about.html"><img class="logo" src="../src/assets/logo/log.svg"></a>
        <div>
            <ul id="navbar">
             <li><router-link to="/getstart">Chat</router-link></li>
                <li><router-link to="/contact">Contact us</router-link></li>
               <li><router-link to="/login">Login</router-link></li>
            </ul>
        </div>
    </section>
      
    </header>

    <router-view />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;

}
#header {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
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
    text-decoration: none;
    font-size: 30px;
    color: rgba(33, 33, 83, 1);
    transition: 0.3s ease;
}
#navnar li :hover { 
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
    background-color:  rgba(33, 33, 83, 1) ;
    border-radius: 20px;
    width: 280px;
    height:50px;
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
</style>