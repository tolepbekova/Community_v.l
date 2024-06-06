<template>
  <div class="main-container">
    <div class="top-content">
      <img src="@/assets/iconBot.png" alt="Icon Bot" />
      <h1 class="head-txt">
        Welcome to <br />
        Student Support chat
      </h1>
      <span class="span-txt">
        It’s a web-based application for sorting through student inquiries and <br />
        increasing advisor productivity by answering a stream of incoming questions.
      </span>
      <div style="margin: auto; display: flex; justify-content: center; gap: 10px">
        <div class="info-content">
          <div class="info">
            <img src="@/assets/brain.png" alt="Brain" />
            <span>AI can be inaccurate</span>
          </div>
          <div class="info">
            <img src="@/assets/secure.png" alt="Secure" />
            <span>Don’t share sensitive info</span>
          </div>
        </div>
      </div>
    </div>

    <div class="btn" @click="getStart()">
      <span>Get Started</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    getStart() {
      this.$router.push({
        name: 'LoginPage'
      })
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
}

.top-content {
  text-align: center;
  margin-bottom: 20px;
}

.info-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 20px 0px 20px 0px;
}

.info {
  display: flex;
  align-items: center;
}

.info img {
  height: 40px;
}
.btn {
  background-color: aquamarine;
  width: 30%;
  border-radius: 24px;
  color: #fff;
  text-align: center;
}
</style>
