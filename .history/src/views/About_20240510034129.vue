<template>
  <div>
    <!-- <section id="header">
      <a href="about.html"><img class="logo" src="../assets/logo/log.svg"></a>
      <div class="navbar">
        <ul id="navbar">
          <li><a href="getstart.html">Chat</a></li>
          <li><a href="contact.html">Contact us</a></li>
          <li><a href="login.html">Log in</a></li>
        </ul>
      </div>
    </section> -->
    <br><br>


    <div class="abcolumn">
      <img src="../assets/logo/finalicon13_1.svg" alt="">

      <h1>Welcome to <br>Student Support chat</h1>

      <div class="abp">
        <p>It’s a web-based application for sorting through student inquiries and increasing advisor productivity by
          answering a stream of incoming questions.</p>
      </div>
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
