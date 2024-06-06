<template>
  <div class="header">
    <img src="@/assets/uni-logo.png" alt="Uni Logo" class="logo" />
    <div class="menu-block">
      <span>Contact us</span>
      <span>Sign in</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
}

.menu-block span {
  cursor: pointer;
}
</style>
