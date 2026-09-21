<template>
  <div class="flex flex-col justify-center text-[#0F172A]">
    <div class="
      bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(./assets/olive-tree.jpeg)] 
      w-full
      bg-no-repeat 
      bg-cover
      bg-center
      min-h-96
      flex
      flex-col
      items-center
      justify-center
      p-[2rem]"
    >
      <div class="header-text-wrapper px-[2rem] max-w-[40rem]">
        <p class="text-white font-bold text-2xl pb-[1rem]">
          Standing With Palestinian People. Defending Sacred Heritage.
        </p>
        <div class="text-white">
        <p class="pb-[0.5rem]">
          Heritage Without Erasure is built on a foundational principle: when sacred history is severed from the living communities who have preserved it across generations, it violates that sacred trust.
        </p>
      </div>
      </div>
    </div>
    <div class="bg-[#F8FAFC] text-[#0F172A] min-h-100 p-[2rem] flex flex-col">
      <div class="flex flex-col items-center justify-center h-full">
        <div class="pb-[1rem] max-w-[45rem]">
          <p class="pb-[0.5rem]">
            Palestinian cultural and spiritual erasure is not just a Palestinian issue—it is a crisis of conscience for everyone who values truth, faith, and human dignity. When museums partner with institutions that use archaeology to displace communities and families and bulldoze evidence of Christian and Muslim presence, they enable a system where living people are removed so ancient artifacts can be seized and misused.
          </p>
          <p class="pb-[0.5rem]">
            We are an interfaith, global coalition connecting and mobilizing justice networks, churches, scholars, archaeologists, and people of conscience to demand accountability. The Megiddo Church—one of the earliest known Christian spaces, inscribed to Jesus Christ—was discovered during prison expansion over a Palestinian village displaced in 1948. Today, the Mosaic from that nearly 1800-year-old church sits in the Museum of the Bible 6,000 miles away, while Israel’s Megiddo prison now operates in that space, notorious for its incarceration and torture of Palestinians, including children. This is not heritage. This is erasure.
          </p>
          <p class="pb-[0.5rem]">
            Ethical stewardship means consultation before acquisition, consent before removal, and partnership before display. When the Museum of the Bible partners with Israeli institutions operating without the consent of indigenous communities, it is not preserving heritage. It is facilitating dispossession. When the Museum of the Bible works with Israeli institutions that expel and displace people in order to provide the Museum with artifacts, it is not preserving or honoring religious heritage and the teachings of Jesus. It is facilitating dispossession, oppressing communities, and violating Christian principles of loving our neighbor, doing justice, and working for peace.  
          </p>
        </div>
        <RouterLink to="/open-letter">
          <button 
            class="bg-[#2563EB] hover:bg-blue-800 text-white font-small py-2.5 px-5 rounded-full transition-colors duration-200"
          >
            Open Letter
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="
      bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(./assets/olive-tree.jpeg)] 
      w-full
      bg-no-repeat 
      bg-cover
      bg-center
      min-h-96
      flex
      flex-col
      items-center
      justify-center
      p-[2rem]"
    >
      <div class="header-text-wrapper px-[2rem] max-w-[40rem]">
        <p class="text-white font-bold text-2xl pb-[1rem]">Partners</p>
        <p class="text-white pb-[1rem]">
          Anchored by justice networks, peace organizations, and churches, we work in multifaith solidarity to defend sacred heritage against erasure. Our coalition brings together faith communities, advocacy groups, and Palestinian-led organizations united by one conviction: heritage must remain rooted in the people who carry it.
        </p>
        <RouterLink to="/endorsing-organizations">
          <button 
            class="bg-blue-300 hover:bg-blue-800 text-black font-small py-2.5 px-5 rounded-full transition-colors duration-200"
          >
            Partners
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
