<template>
  <div class="bg-[#F8FAFC] text-[#0F172A] mh-1vh">
    <div class="actions-wrapper flex flex-col px-[3rem]">
      <section class="flex flex-col" v-for="actionDetail in actionsDetails">
        <div class="border-1 mt-[3rem] mb-[1rem]"></div>
        <div class="action-info">
          <p class="text-2xl font-bold pb-[0.5rem]">{{ actionDetail.titleHeader }}</p>
          <p class="text-lg pb-[0.25rem]" v-if="actionDetail.subHeader">{{ actionDetail.subHeader }}</p>
          <div class="pb-[0.25rem]" v-if="actionDetail.subHeader">
            <span class="font-bold">Date:</span> <span>{{ actionDetail.date }}</span>
          </div>
          <div class="pb-[0.25rem]" v-if="actionDetail.subHeader">
            <span class="font-bold">Location:</span> <span>{{ actionDetail.location }}</span>
          </div>
          <img v-if="actionDetail.imageUrl" class="action-image pt-[1rem]" :src="getImageUrl('../assets/actions', actionDetail.imageUrl)" :alt="actionDetail.titleHeader"/>
        </div>
        <div class="border-1 mt-[2rem] mb-[3rem]"></div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/utils/helpers';
type ActionDetails = {
  titleHeader: string,
  subHeader?: string,
  date?: string,
  location?: string,
  imageUrl?: string,
}
const actionsDetails: ActionDetails[] = [
  {
    titleHeader: "Public Reading of the Open Letter To the Museum Of the Bible",
    subHeader: "Join us in a call for an end to the Partnership with the Israeli Antiquities Authority and a call to restore the Megiddo Church",
    date: "October 24th, 11am",
    location: "In Front of the Muesum of The Bible",
    imageUrl: "Open-letter-reading.png",
  }
]
</script>

<style scoped>
.action-image {
  width: 25rem;
}
</style>