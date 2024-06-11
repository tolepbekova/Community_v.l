<template>
  <div class="main-container">
    <div class="top-content">
      <img src="@/assets/iconBot.png" alt="Contact Icon" />
      <h1 class="head-txt">Dear users!</h1>
      <p class="description">
        Here you can write inquiries on technical issues, reviews and recommend improvements to the Site.
      </p>
    </div>
    <div class="form-content">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" placeholder="Your Name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Your Email" />
        </div>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" placeholder="Your Message"></textarea>
      </div>
      <div class="btn-container">
        <button class="btn-main" @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendMessage() {
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Message:", this.message);
      alert("Message sent!");
    }
  }
}
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
  overflow: hidden;
  padding: 20px;
}

.top-content {
  text-align: center;
  margin-bottom: 20px;
}

.description {
  margin-top: 10px;
  font-size: 16px;
}

.form-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
}

.form-row {
  display: flex;
  gap: 40px;
}

.form-group {
  margin-bottom: 20px;
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.btn-container {
  display: flex;
  justify-content: flex-start;
}

.btn-main {
  background-color: #212153;
  border-radius: 20px;
  color: #fff;
  padding: 10px 40px;
  cursor: pointer;
}
</style>
