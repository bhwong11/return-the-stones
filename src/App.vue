<template>
  <div class="main-page">
    <nav>
      <img href="/logo.png"/>
      <ul class="nav-buttons">
        <li><RouterLink to="/">Go to Open Letter</RouterLink></li>
        <li><RouterLink to="/about">Go to Sign On</RouterLink></li>
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
.nav-buttons {
  display: flex;
  gap: 0.5rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
