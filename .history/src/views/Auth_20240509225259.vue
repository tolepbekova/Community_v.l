<template>
    <div>
     
  
      <br><br><br><br>
  
      <div class="abrow">
        <div class="abcolumn">
          <img src="@/assets/finalicon13.png" alt="Final Icon">
        </div>
        <div class="abcolumn">
          <h1>Let’s create</h1>
          <h3>Get Started</h3>
  
          <br>
          <router-link to="/signin"><button class="lbtn1">Sign in</button></router-link>
          <br>
          <router-link to="/login"><button class="lbtn2">Log in</button></router-link>
          <br><br><br>
        </div>
      </div>
  
      <div class="section">
        <img src="@/assets/logo-white.png" alt="SDU University" width="100" height="100">
        <br><br>
        <span class="elementor-icon-list-text">2024 All rights reserved</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Auth'
  }
  </script>
  
  <style scoped>
  .abrow {
    margin: 0 auto;
    display: block;
    text-align: center;
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
  </style>