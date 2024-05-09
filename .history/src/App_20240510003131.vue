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
                <v-spacer></v-spacer>
                    <ul id="navbar">
                        <li><router-link to="/getstart">Chat</router-link></li>
                        <li><router-link to="/contact">Contact us</router-link></li>
                        <li><router-link to="/auth">Login</router-link></li>
                    </ul>
                
            </section>

        </header>

        <router-view />
    </div>
</template>

<style>
#app {
    display: flex;

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


</style>