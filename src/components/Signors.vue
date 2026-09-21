<template>
  <div class="flex flex-col">
    <h3 class="pt-[2rem] font-bold text-2xl lg:text-4xl flex justify-center">ENDORSING ORGANIZATIONS</h3>
    <div class="endorsing-organizations grid grid-cols-2 gap-[0.5rem] pt-[5rem]">
      <div class="signor-names flex flex-col items-center ps-[3rem]">
        <div class="h-full flex flex-col justify-between">
          <p v-for="signOn in signOnsSorted" class="pb-[0.75rem] text-xl font-bold">
            {{ signOn.organizationName }}
          </p>
        </div>
      </div>
      <div class="signor-logos flex flex-wrap gap-[0.5rem]">
        <div 
          v-for="signOn in signOnWithLogos"
          class="
            signors-logos
            flex
            flex-col
            justify-center
            items-center
          "
        >
          <img 
            :src="getImageUrl(signOn.logo)"
            :alt="signOn.organizationName"
            class="signors-logo w-[12.4rem]"
            :style="{ 'width': `${signOn.width}` }"
          />
        </div>
      </div>
    </div>
    <div class="sign-on">
      <p class="text-2xl font-bold tracking-tight pt-[5rem] text-center">What to Support? Sign on here</p>
      <div class="flex justify-center">
        <a
          class="bg-black hover:bg-gray-800 text-white text-xl font-small py-2.5 px-5 rounded-full transition-colors duration-200 mt-[2rem]"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe34h1Wm-8ntkyng5zn5h6tGqa1ol3xqMBL-GtKqv4Ypv3PSg/viewform"
        >
          Sign On
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { signOns } from '@/utils/consts';
import { computed } from 'vue';
const getImageUrl = (name: string) => {
  return new URL(`../assets/sign-on-logos/${name}`, import.meta.url).href
}
const signOnsSorted = computed(() => signOns.sort((a,b) => a?.organizationName.localeCompare(b?.organizationName)));
const signOnWithLogos = computed(() => signOnsSorted.value.filter(signOn => signOn.logo))
</script>
<style scoped>
/* .signors-logo {
  width: 12.4rem;
} */
.signors-logo-wrapper {
  height: 18.75rem;
}
</style>
