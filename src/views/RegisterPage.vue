<template>
  <div class="container">
    <img src="@/assets/iconBot.png" alt="Icon Bot" class="img" />

    <h1 class="head-txt-register">Create your account</h1>

    <div class="input-reg">
      <input v-model="email" class="reg-password" type="text" placeholder="SDU email address" />
      <span v-if="emailError" class="error">{{ emailError }}</span>
      <input v-model="password" class="reg-password" type="password" placeholder="Your password" />
      <span v-if="passwordError" class="error">{{ passwordError }}</span>
    </div>

    <div class="btn-reg" @click="signIn()">
      <span>Register</span>
    </div>

    <div class="loginBtn">
      <span>Already have an account?</span>
      <span @click="onLogin()" class="logIn"> Log in</span>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      emailError: '', 
      passwordError: ''
    }
  },
  methods: {
    signIn() {
      this.emailError = ''
      this.passwordError = ''
      axios
        .post('https://sschat-production.up.railway.app/accounts/auth/users/', {
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
          if (error.response && error.response.data) {
            const errors = error.response.data
            if (errors.email) {
              this.emailError = errors.email[0]
            }
            if (errors.password) {
              this.passwordError = errors.password[0]
            }
          } else {
            console.error('An unexpected error occurred:', error)
          }
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
  height: calc(100vh - 60px);
  padding-top: 60px;
  overflow: hidden;
  text-align: center;
  gap: 20px;
}

.head-txt-register {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.img {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.input-reg {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 20%;
  border-radius: 14px;
}

.reg-password {
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

.btn-reg {
  background-color: #212153;
  color: white;
  padding: 10px 0px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 20%;
  border-radius: 14px;
}

.btn-reg:hover {
  background-color: #1d1d4f;
}

.loginBtn {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.logIn {
  color: #fdd395;
  cursor: pointer;
  transition: color 0.3s;
}

.logIn:hover {
  color: #fbc07a;
}
</style>
