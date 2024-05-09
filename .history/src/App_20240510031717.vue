<script setup>
import HelloWorld from './components/HelloWorld.vue'
import router from './router/index.js'
import './assets/base.css'
</script>

<template>
    <div id="app">
        <v-app id="header">
            <v-card color="grey lighten-4" flat height="100px" tile>
                <v-toolbar dense>

                    <a href="about.html"><img class="logo" src="../src/assets/logo/log.svg"></a>

                    <v-spacer></v-spacer>

                    <li><router-link to="/getstart">Chat</router-link></li>
                        <li><router-link to="/contact">Contact us</router-link></li>
                        <li><router-link to="/auth">Login</router-link></li>

                    
                </v-toolbar>
            </v-card>
        </v-app>
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
li  {
    list-style: none;
    padding: 0 20px;
    text-decoration: none;
    font-size: 30px;
    color: rgba(33, 33, 83, 1);
    transition: 0.3s ease;
}

#navbar li :hover {
    color: rgb(237, 237, 167);
}
</style>