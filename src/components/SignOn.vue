<template>
  <div class="flex flex-col">
    <h1 class="text-4xl font-bold tracking-tight pt-[2rem] text-center">Want to support? Sign on here!</h1>
    <div class="flex justify-center">
      <a
        class="text-blue-600 hover:underline font-medium pt-[2rem] text-2xl text-center"
        href="https://docs.google.com/forms/d/e/1FAIpQLSe34h1Wm-8ntkyng5zn5h6tGqa1ol3xqMBL-GtKqv4Ypv3PSg/viewform"
      >
        Sign On Here
      </a>
    </div>
    <h3 class="pt-[2rem] font-bold text-xl flex justify-center">Signers</h3>
    <div class="sign-on-wrapper flex flex-wrap justify-center px-[2rem] pb-[3rem] items-center">
      <div v-for="signOn in signOns" class="sign-on">
        <div 
        v-if="signOn.logo" 
          class=
          "
            sign-on-logo-wrapper
            flex
            flex-col
            justify-center
          "
        >
          <img :src="getImageUrl(signOn.logo)" :alt="signOn.organizationName" class="sign-on-logo">
        </div>
        <p class="text-center">{{ signOn.organizationName }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { signOns } from "@/utils/consts"
const getImageUrl = (name: string) => {
  return new URL(`../assets/sign-on-logos/${name}`, import.meta.url).href
}
</script>
<style scoped>
.sign-on {
  width: 15.625rem;
}
.sign-on-wrapper {
  min-height: 18.75rem;
}
.sign-on-logo-wrapper {
  height: 18.75rem;
}
</style>
