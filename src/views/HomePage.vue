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
      <input v-model="msginput" class="msginput" type="text" placeholder="Write your message" @keyup.enter="sendMsg"/>
      <div class="btn" @click="sendMsg">
        <img src="@/assets/send.png" alt="Send" class="send-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      questions: [
        'How to open the portal if it is closed?',
        'What period is it possible to make a drop?',
        'How the GPA is counted?',
        'What is FX?',
        'If I lost my scholarship, from what month will it not be received?'
      ],
      messages: [],
      msginput: ''
    };
  },
  computed: {
    showPreview() {
      return this.msginput.length === 0 && this.messages.length === 0;
    }
  },
  mounted() {
    const userEmail = this.$route.query.email;
    if (userEmail) {
      const chatHistoryJSON = localStorage.getItem(`chatHistory_${userEmail}`);
      if (chatHistoryJSON) {
        this.messages = JSON.parse(chatHistoryJSON);
      }
    }
  },
  methods: {
    selectQuestion(question) {
      this.msginput = question;
    },
    sendMsg() {
      const userInput = this.msginput.trim();
      if (userInput) {
        this.messages.push({ text: userInput, type: 'user' });

        axios
          .post('https://qabot-production.up.railway.app/process_query/', { question: userInput })
          .then((res) => {
            if (res && res.data && res.data.response && res.data.response.content) {
              const botResponse = res.data.response.content;
              this.messages.push({ text: botResponse, type: 'bot' });

              const userEmail = this.$route.query.email;
              localStorage.setItem(`chatHistory_${userEmail}`, JSON.stringify(this.messages));
            }
          })
          .catch((error) => {
            console.error('An error occurred:', error);
          });

        const userEmail = this.$route.query.email;
        localStorage.setItem(`chatHistory_${userEmail}`, JSON.stringify(this.messages));

        this.msginput = '';
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: calc(100vh - 60px);
  overflow: hidden;
  padding-top: 60px;
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
  color: #000;
  transition: color 0.3s;
  background-color: #F4F4F4;
  padding: 10px 24px;
  border-radius: 24px;
}

.questionSpan:hover {
  color: #0056b3;
}

.chat {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 20px;
}

.user {
  align-self: flex-end;
  background-color: #212153;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  max-width: 60%;
  word-wrap: break-word;
}

.bot {
  align-self: flex-start;
  background-color: #FFD5987A;
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
  padding: 10px;
  background-color: white;
  position: sticky;
  bottom: 80px;
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
