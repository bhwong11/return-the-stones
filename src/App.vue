<template>
  <div class="main-page">
    <nav class="nav-bar">
      <img src="./assets/logo.png" alt="Heritage Without Erasure" width="150"/>
      <ul class="nav-buttons">
        <li><RouterLink to="/">Go to Open Letter</RouterLink></li>
        <li><RouterLink to="/sign-on">Go to Sign On</RouterLink></li>
      </ul>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav-bar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  .nav-buttons {
    display: flex;
    gap: 0.5rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
</style>
