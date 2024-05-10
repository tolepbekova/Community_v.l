<template>
    <div>
        <v-app id="header">
            <v-card color="grey lighten-4" flat height="100px" tile>
                <v-toolbar dense>

                  <router-link   to="/home"> <img class="logo" src="../assets/logo/log.svg"></router-link>

                    <v-spacer></v-spacer>

                    <span class="fir"><router-link to="/getstart">Chat</router-link></span>
                        <span><router-link to="/contact">Contact us</router-link></span>
                        <span><router-link to="/auth">Login</router-link></span>

                    
                </v-toolbar>
            </v-card>
        </v-app>

        <br><br><br><br>

        <div class="abrow">
            <br><br><br><br>
            <div class="abcolumn">
                
                <img class="final" src="../assets/logo/finalicon13_1.svg" alt="">
            </div>
            <div class="abcolumn">
                <h1>Let’s create</h1>
                <h3>Get Started</h3>

                <br>
                <router-link to="/sign"> <button class="lbtn1"> Sign in</button></router-link>
                <br>
                <router-link to="/"><button class="lbtn2">Log in</button></router-link>
                <br><br><br>
            </div>
        </div>

        <!-- <v-footer class="section">

            <img src="../assets/logo/logo-white.svg" alt="SDU University" width="100" height="100">
            <br><br>
            <span class="elementor-icon-list-text">2024 All rights reserved</span>

        </v-footer> -->
    </div>
</template>

<script>
export default {
    name: 'Auth'
}
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
    height: 87px;
    margin-left: 230px;
}

#navbar {
    display: flex;
    align-items: center;
    justify-content: center;
}
.fir {
  margin-left: 480px;
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



.abcolu {
  margin: 0 auto;
  display: block;
  text-align: center;
}

.final {
  max-width: 99px;
  max-height: 99px;
}


.abrow {
    margin: 0 auto;
    display: block;
    text-align: center;
    margin-left: 650px;
}

.abcolumn {
    margin: 0 auto;
    display: block;
    text-align: center;
    color: rgba(33, 33, 83, 1);
}

img {
    width: 109px;
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

.section {
    border-radius: 50px 50px 0 0;
    background-color: rgba(33, 33, 83, 1);
    color: #fff;
    padding: 10px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 19%;
}

a {
    color: rgba(33, 33, 83, 1);
    font-style: none;
    text-decoration: none;
}
.lbtn1 {
    margin: 0 auto;
    display: block;
    width: 320px;
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
     width: 320px;
    height: 48px;
    border-radius: 30px;
    color: rgba(33, 33, 83, 1);
    background-color: rgba(253, 211, 149, 1);
    border: none;
    font-size: 15px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    
  }
</style>