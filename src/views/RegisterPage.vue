<template>
  <div class="container">
    <img src="@/assets/iconBot.png" alt="Icon Bot" />

    <h1 class="head-txt">Create your account</h1>

    <div class="input">
      <input v-model="email" class="login-password" type="text" placeholder="SDU email address" />
      <input
        v-model="password"
        class="login-password"
        type="password"
        placeholder="Your password"
      />
    </div>

    <div class="btn" @click="signIn()">
      <span>Register</span>
    </div>

    <div class="createBtn">
      <span>Already have an account?</span>
      <span @click="onLogin()" class="signUp"> Log in</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      axios
        .post(`https://sschat-production.up.railway.app/accounts/auth/users/`, {
          email: this.email,
          password: this.password
        })
        .then((res) => {
          console.log(res.data)
          this.$router.push({
            name: 'LoginPage'
          })
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    },
    onLogin() {
      this.$router.push({
        name: 'LoginPage'
      })
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px); /* Subtract height of MenuBlock */
  overflow: hidden;
}
</style>
