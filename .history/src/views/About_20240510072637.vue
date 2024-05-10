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
    <div class="abcolumn">
      <br><br>
      <img src="../assets/logo/finalicon13_1.svg" alt="">

      <h1>Welcome to  Student Support chat</h1>

      <div class="abp">
        <p>It’s a web-based application for sorting through student inquiries and increasing advisor productivity by
          answering a stream of incoming questions.</p>
      </div>
      <br>
      <div class="ai">
        <div class="column">
          <!-- <img src="C:\Users\LENOVO\Downloads\icons\Artificial Intelligence.png" class="icon"> -->
        </div>
        <div class="column">
          <h5>AI can be inaccurate</h5>

        </div>
      </div>
      <div class="ai1">
        <div class="column">
          <!-- <img src="C:\Users\LENOVO\Downloads\icons\Secure.png" class="icon"> -->
        </div>
        <div class="column">
          <h5>Don’t share sensitive info</h5>
        </div>
      </div>

      <br>
      <router-link to="login"><button class="abbtn1">Get Started</button></router-link>
      <br><br><br>
    </div>
  </div>
</template>

<script>
export default {

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


.abcolumn {
  margin: auto;
  display: grid;
  place-items: center;
  text-align: center;
  margin-left: 550px;
}

.abbtn1 {
  margin: 0 auto;
  display: block;
  width: 266px;
  height: 48px;
  border-radius: 25px;
  color: #ffffff;
  background-color: rgba(33, 33, 83, 1);
  font-size: 18px;
}

img {
  width: 115px;
}

.abp {
  margin: 0 auto;
  display: block;
  width: 530px;
  text-align: center;
}

.icon {
  width: auto;
  height: auto;
}

.ai {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  justify-self: space;
}

.ai1 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}

@media (max-width: 1200px) {
  .abcolumn {
    width: 90%;
  }

  .abp {
    width: 70%;
  }

  .icon {
    width: 80px;
  }

  .abbtn1 {
    width: 200px;
  }
}

@media (max-width: 768px) {
  .abcolumn {
    width: 70%;
  }

  .abp {
    width: 90%;
  }

  .icon {
    width: 60px;
  }

  .abbtn1 {
    width: 150px;
  }

  #navbar li a {
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  .abcolumn {
    width: 50%;
  }

  .abp {
    width: 100%;
  }

  .icon {
    width: 50px;
  }

  .abbtn1 {
    width: 120px;
  }

  #navbar li a {
    font-size: 16px;
  }
}
</style>
