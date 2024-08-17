<template>
    <div class="main">
      <section
        class="max-w-[1312px] mx-auto px-4 h-full flex flex-col justify-between"
      >
        <nav aria-label="Main Navigation">
          <div
            class="rounded-[20px] px-6 py-3 navWrapper flex items-center justify-between"
          >
            <h2
              class="text-[2rem] leading-[37.5px] text-primaryText mb-0 font-gilroyBold font-bold"
            >
              rendezvous
            </h2>
            <span>
              <ul class="flex items-center gap-4 mb-0">
                <li><a href="#discover" class="list-item">Discover</a></li>
                <li><a href="#about" class="list-item">About us</a></li>
                <li><a href="#faqs" class="list-item">FAQs</a></li>
                <li><a href="#contact" class="list-item">Contact us</a></li>
              </ul>
            </span>
            <div class="flex items-center gap-6">
              <a href="#login" 
                 class="text-base leading-[18.75px] text-primaryText font-gilroyBold cursor-pointer"
              >
                Log in
              </a>
              <a href="#signup"
                 class="bg-primaryBg text-base leading-[18.75px] text-white font-gilroyBold px-6 py-3 rounded-[10px] font-semibold cursor-pointer"
              >
                Sign up
              </a>
            </div>
          </div>
        </nav>
        
        <div class="flex items-end justify-between">
          <div
            class="max-w-[531px] font-gilroyBold text-[2rem] leading-[37.5px] text-white pb-4"
          >
            Ready to Rock? Discover the Hottest Events Here – Your Calendar's New
            Best Friend!
          </div>
          <div class="bg-white rounded-[20px] py-6 h-[100px] w-[660px] grid grid-cols-2">
            <div class="flex items-center pl-10 pr-6 border-r-[2px] border-[#E0E0E0]">
              <span aria-hidden="true" class="pi pi-search" style="color: #4f4f4f"></span>
              <label for="search" class="sr-only">Search for an event</label>
              <input id="search" type="text" placeholder="Search for an event"  class="flex-1 bg-transparent outline-none pl-4 text-[#4F4F4F] text-base leading-[18.75px] font-gilroyRegular"/>
            </div>
            <div class="px-6 flex items-center justify-between">
              <label for="category" class="sr-only">Select a category</label>
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
      </section>
    </div>
  </template>
  
  <script>
  export default {
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
  