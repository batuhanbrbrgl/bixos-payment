<script setup>
import { Icon } from '@iconify/vue'
</script>
<template>
  <div class="">
    <div
      class="w-full bg-cover max-2xl:pt-10 max-lg:py-9 pt-36 pb-20 text-white bg-[url('@/assets/backgrounds.png')] h-[850px] max-sm:bg-[url('@/assets/smbg.png')] max-sm:h-[275px] max-2xl:bg-[url('@/assets/max2xl.png')] max-2xl:bg-cover max-2xl:max-h-[550px]"
    >
      <div
        class="flex flex-col-reverse lg:flex-col ml-[150px] max-2xl:ml-[95px] max-sm:ml-[15px] max-lg:ml-[10px]"
      >
        <div
          class="flex flex-col items-center space-y-5 max-sm:mt-[180px] lg:items-start lg:space-y-7"
        >
          <img class="mb-6 max-sm:mb-1 max-sm:w-44" src="./assets/bixos-logo.png" alt="" />
          <h1
            class="text-center text-4xl font-black lg:text-start sm:text-[40px] lg:text-7xl text-themeColor"
          >
            Next-gen crypto <br />
            payment solution.
          </h1>
          <div class="flex items-center space-x-4">
            <div class="relative">
              <img src="./assets/Group.png" alt="" class="max-sm:w-10 max-sm:h-10" />
              <Icon
                icon="ion:rocket-sharp"
                class="absolute top-1/2 left-1/2 max-sm:w-5 max-sm:h-5 -translate-x-1/2 -translate-y-1/2 text-white"
                height="28"
              />
            </div>
            <span class="text-iconColor text-lg max-sm:text-[14px] max-sm:mt-4"
              >Experience the future of crypto <br />
              payments with us.</span
            >
          </div>
          <button
            class="bg-themeColor text-white rounded-3xl hover:bg-btnhvr px-20 max-sm:px-28 py-2 max-sm:t-4 shadow-themeColor shadow-2xl text-lg"
          >
            JOIN WAITLIST
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-full flex flex-col justify-between max-sm:mt-80 text-iconColor lg:flex-row px-12 py-6 max-sm:mb-12 mb-16"
  >
    <div class="flex flex-col items-center justify-center text-lg lg:ml-28 max-sm:text-sm">
      Don't forget to follow us on social media.
    </div>
    <div
      class="flex flex-row lg:ml-3 lg:mr-60 lg:mt-6 max-sm:flex justify-between max-sm:px-1 max-lg:px-32 max-sm:mt-4 max-lg:mt-14"
    >
      <button>
        <Icon icon="akar-icons:telegram-fill" class="static max-sm:w-10" height="50" />
      </button>
      <button>
        <Icon icon="akar-icons:facebook-fill" class="static ml-10 max-sm:w-10" height="50" />
      </button>
      <button>
        <Icon icon="akar-icons:twitter-fill" class="static ml-10 max-sm:w-10" height="50" />
      </button>
      <button>
        <Icon icon="akar-icons:instagram-fill" class="static ml-10 max-sm:w-10" height="50" />
      </button>
    </div>
  </div>

  <div
    class="w-full flex items-center justify-center text-xs bottom-0 fixed max-lg:fixed bg-themeColor h-12 text-white"
  >
    <span>© Copyright 2023 BIXOS | All rights reserved</span>
  </div>
</template>
