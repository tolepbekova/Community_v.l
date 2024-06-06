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
    </div>

    <div class="btn" @click="login()">
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
      }
    }
  },
  methods: {
    login() {
      axios
        .post(`https://sschat-production.up.railway.app/accounts/auth/token/login/`, this.info)
        .then((res) => {
          this.token = res.data.auth_token
          localStorage.setItem('auth_token', this.token)

          const userData = {
            username: this.info.email,
            password: this.info.password,
            chatHistory: []
          }
          localStorage.setItem('userData', JSON.stringify(userData))

          const userDataJSON = localStorage.getItem('userData')
          if (userDataJSON) {
            this.$router.push({ name: 'HomePage', query: { success: true } });
          } else {
            console.error('Пользователь не найден.')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
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
}

.login-password {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}

.createBtn {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.signUp {
  color: #007bff;
  cursor: pointer;
  transition: color 0.3s;
}

.signUp:hover {
  color: #0056b3;
}
</style>
