<template>
  <div class="app-container">
    <MenuBlock />
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import MenuBlock from './components/MenuBlock.vue';

export default {
  components: {
    MenuBlock
  }
}
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.content-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>