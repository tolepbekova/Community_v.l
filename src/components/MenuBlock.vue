<template>
  <div class="header">
    <img src="@/assets/uni-logo.png" alt="Uni Logo" class="logo" />
    <div class="menu-block" :class="{ 'menu-open': menuOpen }">
      <span v-if="isContactUsPage" :class="{ active: $route.name === 'HomePage' }" @click="goChat()">Chat</span>
      <span :class="{ active: $route.name === 'ContactUsPage' }" @click="goContactUs()">
        Contact us
      </span>
      <span :class="{ active: $route.name === 'LoginPage' }" @click="logoutOrSignIn()">
        {{ $route.name === 'HomePage' ? 'Log out' : 'Sign in' }}
      </span>
    </div>
    <button class="menu-toggle" @click="toggleMenu">Menu</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  computed: {
    isContactUsPage() {
      return this.$route.name === 'ContactUsPage'
    }
  },
  methods: {
    goChat() {
      this.$router.push({ name: 'HomePage' })
    },
    goContactUs() {
      this.$router.push({ name: 'ContactUsPage' })
    },
    logoutOrSignIn() {
      if (this.$route.name === 'HomePage') {
        this.$router.push({ name: 'LoginPage' })
      } else {
        this.$router.push({ name: 'LoginPage' })
      }
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
}

.logo {
  height: 40px;
}

.menu-block {
  display: flex;
  gap: 20px;
  align-items: center;
}

.menu-block span {
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 10px 20px;
  border-radius: 24px;
}

.menu-block span.active {
  background-color: #ffd5987a;
}

.menu-block span:hover {
  background-color: #ffd5987a;
}

.menu-toggle {
  display: none;
}

@media only screen and (max-width: 768px) {
  .menu-block {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-out;
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .menu-block.menu-open {
    max-height: 200px;
  }

  .menu-toggle {
    display: block;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }

  .menu-toggle:focus {
    outline: none;
  }
}
</style>
