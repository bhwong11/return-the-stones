<template>
  <div class="main-page">
    <nav class="nav-bar">
      <img src="./assets/logo.png" alt="Heritage Without Erasure" width="150"/>
      <ul class="nav-buttons">
        <li>
          <RouterLink to="/" v-if="currentPath !== '/'">
            <button class="bg-black hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200">Go to Open Letter</button>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/sign-on/" v-if="currentPath !== '/sign-on/'">
            <button class="bg-black hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200">Go to Sign On</button>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import { useRoute } from 'vue-router'
const route = useRoute()

const currentPath = computed(() => route.path);
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
  padding: 1rem;
  .nav-buttons {
    display: flex;
    gap: 0.5rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
</style>
