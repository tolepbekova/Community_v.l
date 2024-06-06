<template>
  <div class="container">
    <div class="preview" v-if="showPreview">
      <img src="@/assets/iconBot.png" alt="Icon Bot" class="icon" />
      <h2 class="h2">FAQ</h2>
      <div class="question">
        <span
          class="questionSpan"
          v-for="(question, index) in questions"
          :key="index"
          @click="selectQuestion(question)"
        >
          {{ question }}
        </span>
      </div>
    </div>
    <div class="chat">
      <div v-for="(message, index) in messages" :key="index" :class="message.type">
        {{ message.text }}
      </div>
    </div>
    <div class="msgsend">
      <input v-model="msginput" class="msginput" type="text" placeholder="Write your message" />
      <div class="btn" @click="sendMsg">
        <img src="@/assets/send.png" alt="Send" class="send-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      questions: ['What is Vue?', 'How do I use Vue?', 'What is a component?'],
      messages: [],
      msginput: ''
    }
  },
  computed: {
    showPreview() {
      return this.msginput.length === 0 && this.messages.length === 0
    }
  },
  created() {
    if (this.$route.query.success) {
      console.log(this.$route.query.success)
      const chatHistoryJSON = localStorage.getItem('chatHistory')
      if (chatHistoryJSON) {
        this.messages = JSON.parse(chatHistoryJSON)
      }
    }
  },
  methods: {
    checkLoginCredentials(username, password) {
      axios
        .post(`https://sschat-production.up.railway.app/accounts/auth/token/login/`, {
          username,
          password
        })
        .then(() => {
          const chatHistoryJSON = localStorage.getItem('chatHistory')
          if (chatHistoryJSON) {
            this.messages = JSON.parse(chatHistoryJSON)
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    },
    selectQuestion(question) {
      this.msginput = question
    },
    sendMsg() {
      const userInput = this.msginput.trim()
      if (userInput) {
        this.messages.push({ text: userInput, type: 'user' })

        axios
          .post(`https://qabot-production.up.railway.app/process_query/`, {
            question: userInput
          })
          .then((res) => {
            if (res && res.data && res.data.response && res.data.response.content) {
              const botResponse = res.data.response.content
              this.messages.push({ text: botResponse, type: 'bot' })
              localStorage.setItem('chatHistory', JSON.stringify(this.messages));
            }
          })
          .catch((error) => {
            console.error('An error occurred:', error)
          })

        localStorage.setItem('chatHistory', JSON.stringify(this.messages))

        this.msginput = ''
      }
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
  padding-top: 60px; /* Space for MenuBlock */
}

.preview {
  text-align: center;
  margin-bottom: 20px;
}

.icon {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.question {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.questionSpan {
  cursor: pointer;
  color: #007bff;
  transition: color 0.3s;
}

.questionSpan:hover {
  color: #0056b3;
}

.chat {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
}

.user {
  align-self: flex-end;
  background-color: #d1e7dd;
  padding: 10px;
  border-radius: 10px;
  max-width: 60%;
  word-wrap: break-word;
}

.bot {
  align-self: flex-start;
  background-color: #f8d7da;
  padding: 10px;
  border-radius: 10px;
  max-width: 60%;
  word-wrap: break-word;
}

.msgsend {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.msginput {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.send-icon {
  width: 45px;
  height: 45px;
}
</style>
