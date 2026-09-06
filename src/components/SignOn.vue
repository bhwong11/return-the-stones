<template>
  <div class="flex flex-col">
    <h1 class="text-4xl font-bold tracking-tight pt-[2rem] text-center">Want to support? Sign on here!</h1>
    <a
      class="text-blue-600 hover:underline font-medium pt-[2rem] text-2xl text-center"
      href="https://docs.google.com/forms/d/e/1FAIpQLSe34h1Wm-8ntkyng5zn5h6tGqa1ol3xqMBL-GtKqv4Ypv3PSg/viewform?usp=sharing&ouid=111430167125586998476"
    >
      Sign On Here
    </a>
    <h3 class="pt-[2rem] font-bold text-xl flex justify-center">Signers</h3>
    <div class="sign-on-wrapper flex flex-wrap justify-center px-[2rem]">
      <div v-for="signOn in signOns" class="sign-on">
        <div class=
        "
          sign-on-logo-wrapper
          flex
          flex-col
          justify-center
        "
        >
          <img :src="signOn.logo" :alt="signOn.organizationName" class="sign-on-logo">
        </div>
        <p class="text-center">{{ signOn.organizationName }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { signOns } from "@/utils/consts"
</script>
<style scoped>
.sign-on {
  width: 250px;
}
.sign-on-logo-wrapper {
  height: 300px;
}
</style>
