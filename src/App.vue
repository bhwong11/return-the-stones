<template>
  <div class="main-page">
    <nav class="nav-bar text-[#0F172A] bg-[#ACBDA1] font-sans-serif text-center">
      <!-- <img src="./assets/logo.png" alt="Heritage Without Erasure" width="150"/> -->
      <p class="font-bold">HERITAGE WITHOUT ERASURE</p>
      <ul class="nav-buttons items-center">
        <li v-for="navLink in navLinks">
          <RouterLink :to="navLink.linkPath" v-if="shouldShowNavLink(navLink)">
            <button :class="navLink.isPrimaryButton ? primaryButtonStyle : navLinkStyle">
              {{ navLink.linkText }}
            </button>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <main class="w-full flex justify-center flex-col">
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

const shouldShowNavLink = (navLink: NavLink): boolean => {
  if(navLink.isPrimaryButton) return true;
  const replaceRegex = navLink.linkPath!=='/' ? /\/+$/ : '';
  return currentPath.value.replace(replaceRegex, '') !== navLink.linkPath
}

type NavLink = {
  isPrimaryButton?: boolean;
  linkText: string;
  linkPath: string;
}

const primaryButtonStyle = "bg-[#2563EB] hover:bg-blue-800 text-white font-small py-2.5 px-5 rounded-full transition-colors duration-200";
const navLinkStyle = "text-black hover:text-gray-500"

const navLinks = computed<NavLink[]>(() => [
  {
    linkText: 'Home',
    linkPath: '/'
  },
  {
    isPrimaryButton: true,
    linkText: 'Open Letter',
    linkPath: '/open-letter'
  },
  {
    linkText: 'Endorsing Organizations',
    linkPath: '/endorsing-organizations'
  }
].sort(
    (a,b) => Number(a?.isPrimaryButton || 0) - Number(b?.isPrimaryButton || 0)
  )
)
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
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  align-items: center;
  .nav-buttons {
    display: flex;
    gap: 0.75rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}

@media (min-width: 23.438rem) {
  .nav-bar {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
