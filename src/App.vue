<script setup>
import { Icon } from '@iconify/vue'
</script>
<template>
  <div class="container bg-white">
    <div
      class="bg-white bg-cover lg:py-36 bg-no-repeat pt-2 pb-20 text-white bg-[url('@/assets/background.png')] max-md:bg-[url('@/assets/smbg.png')] max-md:bg-cover h-72 max-lg:bg-cover max-2xl:bg-contain"
    >
      <div class="container flex flex-col-reverse lg:flex-col lg:items-center">
        <div
          class="flex flex-col items-center space-y-5 lg:w-2/4 mx-auto max-sm:mt-64 max-sm: lg:items-start lg:space-y-7"
        >
          <img class="mb-6" src="./assets/bixos-logo.png" alt="" />
          <h1 class="text-center text-4xl font-black lg:text-start lg:text-7xl text-themeColor">
            Next-gen crypto payment solution.
          </h1>
          <div class="flex items-center space-x-4">
            <div class="relative">
              <img src="./assets/Group.png" alt="" />
              <Icon
                icon="ion:rocket-sharp"
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                height="28"
              />
            </div>
            <span class="text-iconColor text-lg"
              >Experience the future of crypto <br />
              payments with us.</span
            >
          </div>
          <button
            class="bg-themeColor text-white rounded-3xl hover:bg-btnhvr px-20 py-2 shadow-themeColor shadow-2xl text-lg"
          >
            JOIN WAITLIST
          </button>
        </div>
      </div>
    </div>

    <div class="fixed w-screen flex flex-col justify-between mt-1 text-iconColor lg:flex-row p-3">
      <div class="flex flex-col items-center justify-center text-lg lg:ml-28">
        Don't forget to follow us on social media.
      </div>
      <div class="flex flex-row lg:ml-3 lg:mr-60 lg:mt-6">
        <button><Icon icon="akar-icons:telegram-fill" class="static" height="50" /></button>
        <button><Icon icon="akar-icons:facebook-fill" class="static ml-10" height="50" /></button>
        <button><Icon icon="akar-icons:twitter-fill" class="static ml-10" height="50" /></button>
        <button>
          <Icon icon="akar-icons:instagram-fill" class="static ml-10" height="50" />
        </button>
      </div>
    </div>

    <div
      class="w-screen flex items-center justify-center text-xs bottom-0 fixed bg-themeColor h-12 text-white"
    >
      <span>© Copyright 2023 BIXOS | All rights reserved</span>
    </div>
  </div>
</template>
