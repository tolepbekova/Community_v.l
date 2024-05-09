<template>
  <div>
    
    <br><br>
    <div class="chat-container">
      <div class="chat-box" id="chat-box">
        <p v-for="(message, index) in messages" :key="index"
          :class="{ 'user-message': message.type === 'user', 'bot-message': message.type === 'bot' }">{{ message.content
          }}</p>
      </div>
      <div class="input">
        <input type="text" v-model="userInput" placeholder="Write your message...">
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInput: '',
      messages: []
    };
  },
  methods: {
    sendMessage() {
      if (this.userInput.trim() === '') return;

      const headers = {

        'Content-Type': 'application/json',
      };
      axios.defaults.withCredentials = false
      console.log(this.userInput)
      // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.post(`https://qabot-production.up.railway.app/process_query/posts/api/v1/get_keywords`, { text: this.userInput })
        .then(response => {
          if (response) {
            console.log('Ответ от сервера:', response);
            this.addUserMessage(this.userInput);
            this.userInput = ''; // Clear input field
          }


          // Simulate bot response after a short delay
          setTimeout(() => {
            const botResponse = getResponse();
            addBotMessage(botResponse);
          }, 500);

        })
        .catch(error => {
          console.error('Произошла ошибка:', error);
        });


    },
    addUserMessage(message) {
      const chatBox = document.getElementById('chat-box');
      const userMessage = document.createElement('p');
      userMessage.textContent = message;
      userMessage.classList.add('user-message');
      chatBox.appendChild(userMessage);
    },

    addBotMessage(message) {
      const chatBox = document.getElementById('chat-box');
      const botMessage = document.createElement('p');
      botMessage.textContent = message;
      botMessage.classList.add('bot-message');
      chatBox.appendChild(botMessage);
    },
    getResponse() {
      const chatResponses = [
        "Hello! How can I assist you today?",
        "Sure, I can help you with that.",
        "I'm sorry, I didn't quite understand that.",
        "I'm here to assist you. Ask me anything!",
        "Let me check on that for you.",
        "FX is a global decentralized or over-the-counter (OTC) market for the trading of currencies.",
        "That's an interesting question! Let me find an answer for you."
      ];
      const randomIndex = Math.floor(Math.random() * chatResponses.length);
      return chatResponses[randomIndex];
    }
  }
};
</script>

<style>
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

.chat-container {
  width: 900px;
  height: 550px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;
  overflow-y: auto;

}

::-webkit-scrollbar {
  width: 05px;
}

::-webkit-scrollbar-track {
  box-shadow: inset #fff;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 5px;
}


.chat-box {
  height: 450px;
  overflow-y: auto;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}

.user-message {
  color: white;
  background-color: rgba(33, 33, 83, 1);
  max-width: 450px;
  margin-left: 450px;
  text-align: center;
  border-radius: 15px 15px 0px 15px;
  min-height: 30px;
  padding: 15px 0;
  margin-right: 20px;
}

.user-message p {
  margin: 10px 0;
  margin-left: 400px;

}

.bot-message {
  color: rgba(33, 33, 83, 1);
  background-color: rgba(255, 213, 152, 0.48);
  margin-right: 450px;
  max-width: 450px;
  text-align: center;
  border-radius: 15px 15px 15px 0px;
  min-height: 30px;
  padding: 15px 0;
  margin-left: 20px;
}

.bot-message p {
  margin: 10px 0;
  margin-right: 400px;

}

.input {
  display: flex;
  align-items: center;
  padding: 10px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
}

input[type="text"] {
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 15px;
  background-color: rgba(33, 33, 83, 0.55);
  color: white;
}

::placeholder {
  color: #fff;
}

button {
  padding: 10px 20px;
  background-color: rgba(33, 33, 83, 1);
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-left: 5px;
}

.chat-input button:hover {
  background-color: #0056b3;
}
</style>