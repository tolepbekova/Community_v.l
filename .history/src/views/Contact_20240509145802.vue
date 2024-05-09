<template><div>
    
    <div class="abrow">
    <div class="abcolu">
      <img src="C:\Users\суопак\Desktop\Community\src\img\finalicon13.png" alt="">
    </div>
    <div class="abcolu">
      <h1>Contact Us</h1>
      <div class="abp">
        <p>Dear users!</p>
        <p>Here you can write inquiries on technical issues, reviews and recommend improvements to the Site</p>
      </div>
      <div class="inputs">
        <form id="contactForm">
          <label for="name">Name</label>
          <br>
          <input type="text" name="name" id="name" placeholder="">
          <br>
          <label for="mail">Email</label>
          <br>
          <input type="email" name="mail" id="mail" placeholder="">
          <br>
          <label for="message">Message</label>
          <br>
          <input type="text" name="message" id="message">
          <br><br><br>
          <button class="btn" @click="sendMessage">Send</button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'HeaderSection' // You can name it as per your requirement
}
</script>

<style scoped>
h1 {
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