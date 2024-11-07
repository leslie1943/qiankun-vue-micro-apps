<script setup lang="ts">
import { start } from 'qiankun';
import { onMounted } from 'vue';

onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true;
    start({ sandbox: { experimentalStyleIsolation: true } });
  }
});
</script>


<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <el-link href="/flow-graph">Graph Sub application</el-link>
        <br>
        <el-link href="/data-source">Data Source application</el-link>
      </ul>
    </div>
    <div class="content">
      <div id="subApp" class="sub-app-container" />
    </div>
  </div>
</template>


<style scoped>
.container {
  /* display: flex; */
}

.sidebar {
  /* width: 200px; */
  background-color: #f0f0f0;
  padding: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
