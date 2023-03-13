<script setup>
import { Icon } from '@iconify/vue'
</script>
<template>
  <div class="h-[100dvh] flex flex-col">
    <div
      class="w-full h-full custom-shadow bg-cover max-2xl:pt-10 max-lg:py-9 pt-36 pb-20 text-white bg-[url('@/assets/backgrounds.png')] max-sm:bg-[url('@/assets/smbg.png')] max-sm:bg-center max-sm:h-[300px] max-2xl:bg-[url('@/assets/max2xl.png')] max-2xl:bg-cover max-2xl:max-h-[550px]"
    >
      <div class="container mx-auto flex flex-col-reverse lg:flex-col">
        <div
          class="flex flex-col items-center space-y-5 max-sm:mt-[220px] lg:items-start lg:space-y-7"
        >
          <img class="max-sm:mb-1 lg:-ml-4 max-sm:w-44" src="./assets/bixos-logo.png" alt="" />
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
            <span
              class="text-textcolor font-light italic sm:text-lg leading-tight lg:leading-normal"
              >Experience the future of <br class="block lg:hidden" />
              crypto <br class="hidden lg:block" />
              payments with us.</span
            >
          </div>
          <a
            href="https://www.google.com"
            target="_blank"
            class="bg-themeColor cursor-pointer text-white rounded-3xl duration-300 hover:bg-btnhvr px-20 max-sm:px-28 py-2 max-sm:t-4 shadow-themeColor shadow-2xl text-lg"
          >
            JOIN WAITLIST
          </a>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto w-full flex flex-col lg:justify-between max-sm:mt-80 items-center text-iconColor lg:flex-row py-10 lg:py-0 lg:h-[169px]"
    >
      <span class="italic items-center font-light justify-center sm:text-lg text-sm">
        Don't forget to follow us on social media.
      </span>
      <div
        class="flex lg:ml-3 items-center max-sm:flex max-sm:px-1 max-lg:px-32 max-sm:mt-4 max-lg:mt-14"
      >
        <a href="https://t.me/ubxscommunity" target="_blank" class="duration-300 hover:text-btnhvr">
          <Icon icon="akar-icons:telegram-fill" class="static max-sm:w-10" height="50" />
        </a>
        <a
          href="https://www.facebook.com/bixosinc/"
          target="_blank"
          class="duration-300 hover:text-btnhvr"
        >
          <Icon icon="akar-icons:facebook-fill" class="static ml-10 max-sm:w-10" height="50" />
        </a>
        <a
          href="https://twitter.com/Bixosinc"
          target="_blank"
          class="duration-300 hover:text-btnhvr"
        >
          <Icon icon="akar-icons:twitter-fill" class="static ml-10 max-sm:w-10" height="50" />
        </a>
        <a
          href="https://www.instagram.com/bixosinc/"
          target="_blank"
          class="duration-300 hover:text-btnhvr"
        >
          <Icon icon="ant-design:instagram-filled" class="static ml-10 max-sm:w-10" height="58" />
        </a>
      </div>
    </div>
    <div
      class="w-full italic flex items-center justify-center text-xs bg-themeColor h-[61px] text-white"
    >
      <span>© Copyright 2023 BIXOS | All rights reserved</span>
    </div>
  </div>
</template>
<style>
.custom-shadow {
  box-shadow: 1px -58px 97px -10px rgba(255, 255, 255, 0.95) inset;
  -webkit-box-shadow: 1px -58px 97px -10px rgba(255, 255, 255, 0.95) inset;
  -moz-box-shadow: 1px -58px 97px -10px rgba(255, 255, 255, 0.95) inset;
}
</style>
