<template>
  <AppHeader />
  <AppSidebar />
  <!-- 子路由出口 -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'
</script>

<style scoped></style>
