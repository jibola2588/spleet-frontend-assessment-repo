<template>
    <div class="main">
      <section
        class="max-w-[1312px] mx-auto px-4 h-full  flex flex-col justify-between"
      >
      <Navbar type="a"/>

        <div class="flex flex-col items-center md:flex-row md:items-end md:justify-between">
          <div
            class="max-w-[600px] mb:max-w-[650px] md:max-w-[450px] lg:max-w-[531px] font-gilroyBold text-2xl sl:text-[2rem] leading-[37.5px] text-white pb-4"
          >
            Ready to Rock? Discover the Hottest Events Here – Your Calendar's New
            Best Friend!
          </div>
          <div class="hidden sm:block"> 
            <div class="bg-white rounded-[20px] py-6 h-[100px] max-w-[660px] grid grid-cols-2">
              <div class="flex items-center pl-4 xl:pl-10 pr-4 xl:pr-6 border-r-[2px] border-[#E0E0E0]">
                <span aria-hidden="true" class="pi pi-search" style="color: #4f4f4f"></span>
                <label for="search" class="sr-only">Search for an event</label>
                <input id="search" type="text" placeholder="Search for an event"  class="flex-1 bg-transparent outline-none pl-4 text-[#4F4F4F] text-base leading-[18.75px] font-gilroyRegular"/>
              </div>
              <div class="px-4 xl:px-6 flex items-center justify-between gap-2">
                  <label for="category" class="sr-only ">Select a category</label>
                  <Select id="category" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Category" class="w-40 text-[#4F4F4F] text-base leading-[18.75px] font-gilroyRegular" />
                <button
                  type="button"
                  class="bg-primaryBg text-base leading-[18.75px] text-white font-gilroyRegular px-6 py-3 rounded-[10px] font-semibold cursor-pointer"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div class="block sm:hidden w-full mt-6"> 
            <div class="bg-white w-full rounded-[20px] sm:py-4 h-[60px] sl:h-20 flex items-center">
            <div class="flex-1 flex items-center pl-2 sl:pl-4  sl:pr-4">
              <span aria-hidden="true" class="pi pi-search" style="color: #4f4f4f"></span>
              <label for="search" class="sr-only">Search for an event</label>
              <input id="search" type="text" placeholder="Search for an event"  class="flex-1 bg-transparent outline-none  pl-1 sl:pl-4 text-[#4F4F4F] text-base leading-[18.75px] font-gilroyRegular"/>
            </div>
            <div class="px-2 sl:px-4">
              <button
                type="button"
                class="bg-primaryBg text-sm sl:text-base leading-[18.75px] text-white font-gilroyRegular px-2 sl:px-6 py-2 sl:py-3 rounded-[10px] font-semibold cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/navbar.vue";

  export default {
    components: {
    Navbar,
  },
    data() {
      return {
        cities: [
          { name: "New York", code: "NY" },
          { name: "Rome", code: "RM" },
          { name: "London", code: "LDN" },
          { name: "Istanbul", code: "IST" },
          { name: "Paris", code: "PRS" },
        ],
        selectedCity: "",
      };
    },
  };
  </script>
  
  <style>
  /* Screen reader only class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  </style>
  