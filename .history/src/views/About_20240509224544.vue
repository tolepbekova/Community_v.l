<template>
  <div>
    <section id="header">
      <a href="about.html"><img class="logo" src="../assets/logo/log.svg"></a>
      <div class="navbar">
        <ul id="navbar">
          <li><a href="getstart.html">Chat</a></li>
          <li><a href="contact.html">Contact us</a></li>
          <li><a href="login.html">Log in</a></li>
        </ul>
      </div>
    </section>
    <br><br>

    <div class="abcolumn">
      <img src="../assets/logo/finalicon13.svg" alt="">

      <h1>Welcome to <br>Student Support chat</h1>

      <div class="abp">
        <p>It’s a web-based application for sorting through student inquiries and increasing advisor productivity by answering a stream of incoming questions.</p>
      </div>
      <div class="ai">
        <div class="column">
          <img src="C:\Users\LENOVO\Downloads\icons\Artificial Intelligence.png" class="icon">
        </div>
        <div class="column">
          <h5>AI can be inaccurate</h5>
        </div>
      </div>
      <div class="ai1">
        <div class="column">
          <img src="C:\Users\LENOVO\Downloads\icons\Secure.png" class="icon">
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

.abcolumn {
  margin: auto;
  display: grid;
  place-items: center;
  text-align: center;
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
