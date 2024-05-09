<template>
    <div>
     
      
      <br><br><br><br>
      <section id="hero">
        <div class="abrow">
          <div class="abcolu">
            <img   src="../assets/logo/" alt="">
          </div>
  
          <div class="abcolu">
            <h1>Create your account</h1>
            <form id="signin-form" @submit.prevent="signIn" name="myForm" method="post"> 
              <input type="email" v-model="email" placeholder="SDU email address" required>
              <br><br>
              <input type="password" v-model="password" placeholder="Password" required>
              <br><br>
              <button class="btn" type="submit">Continue</button>
            </form>
            <br><br>
            <p>Already have an account? <router-link to="log">Login</router-link></p>
          </div>  
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      signIn() {
        axios.post(`https://sschat-production.up.railway.app/accounts/auth/users/`, {
          email: this.email,
          password: this.password
        })
        .then((response) => {
          console.log(response.data); 
          localStorage.setItem('id', response.data.id);
          this.$router.push('/getstart');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
    }
  }
  </script>
  
  <style scoped>h1 {
    color: rgba(33, 33, 83, 1) ;
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
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    
  }
  </style>