<template>
  <div class="container">
    <img src="@/assets/iconBot.png" alt="Icon Bot" class="img" />

    <h1 class="head-txt">Welcome back</h1>

    <div class="input">
      <input
        v-model="info.email"
        class="login-password"
        type="text"
        placeholder="SDU email address"
      />
      <input
        v-model="info.password"
        class="login-password"
        type="password"
        placeholder="Your password"
      />
      <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
    </div>

    <div class="btn-login" @click="login()">
      <span>Login</span>
    </div>

    <div class="createBtn">
      <span>Don’t have an account?</span>
      <span @click="onSignUp()" class="signUp"> Sign up</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      token: '',
      info: {
        email: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    login() {
      this.errorMessage = ''
      axios
        .post(`https://sschat-production.up.railway.app/accounts/auth/token/login/`, this.info)
        .then((res) => {
          this.token = res.data.auth_token
          localStorage.setItem('auth_token', this.token)

          const userDataKey = `userData_${this.info.email}`
          const userData = {
            username: this.info.email,
            password: this.info.password,
            chatHistory: JSON.parse(localStorage.getItem(userDataKey))?.chatHistory || []
          }
          localStorage.setItem(userDataKey, JSON.stringify(userData))

          const userDataJSON = localStorage.getItem(userDataKey)
          if (userDataJSON) {
            this.$router.push({ name: 'HomePage', query: { success: true } })
          } else {
            console.error('User not found.')
          }
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            this.errorMessage = error.response.data.non_field_errors[0]
          } else {
            console.error('An unexpected error occurred:', error)
          }
        })
    },
    onSignUp() {
      this.$router.push({
        name: 'RegisterPage'
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
  height: calc(100vh - 60px);
  padding-top: 60px;
  overflow: hidden;
  text-align: center;
  gap: 20px;
}

.img {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.head-txt {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 20%;
  border-radius: 14px;
}

.login-password {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  border-radius: 14px;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: -10px;
  text-align: left;
  width: 100%;
}

.btn-login {
  background-color: #212153;
  color: white;
  padding: 10px 0px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 20%;
  border-radius: 14px;
}

.btn-login:hover {
  background-color: #1d1d4f;
}

.createBtn {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.signUp {
  color: #fdd395;
  cursor: pointer;
  transition: color 0.3s;
}

.signUp:hover {
  color: #fdd395;
}
</style>
