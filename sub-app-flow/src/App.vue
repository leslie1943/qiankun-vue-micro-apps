<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="sub-container">
    This is Workflow Sub Application</div>

</template>

<style scoped>
.sub-container {
  height: 300px;
  padding: 1rem;
  background-color: rgb(104, 144, 51);
  border: 1px solid greenyellow;
  border-radius: 12px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
