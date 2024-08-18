<template>
  <section>
    <nav aria-label="Main Navigation" class="hidden mb:block">
      <div
        class="px-6 py-3 navWrapper flex items-center justify-between h-20 rounded-[20px]">
        <h2
          class="text-[2rem] leading-[37.5px] text-primaryText mb-0 font-gilroyBold font-bold"
        >
          rendezvous
        </h2>
        <span>
          <ul class="flex items-center gap-4 mb-0">
            <li><a href="#discover" class="list-item p-[6px]">Discover</a></li>
            <li><a href="#about" class="list-item p-[6px]">About us</a></li>
            <li><a href="#faqs" class="list-item p-[6px]">FAQs</a></li>
            <li><a href="#contact" class="list-item p-[6px]">Contact us</a></li>
          </ul>
        </span>
        <div class="flex items-center gap-6">
          <a
            href="#login"
            class="text-base leading-[18.75px] text-primaryText font-gilroyBold cursor-pointer p-[6px] hover:border-b-[3px] border-primaryText"
          >
            Log in
          </a>
          <a
            href="#signup"
            class="bg-primaryBg text-base leading-[18.75px] text-white font-gilroyBold px-6 py-3 rounded-[10px] font-semibold cursor-pointer"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
    <nav class="block mb:hidden">
      <div class="py-3 navWrapper flex items-center justify-between h-20 rounded-[20px]" :class="{'text-white px-3 sl:px-6' : type == 'a', 'text-black':type == 'b' }">
        <h2 class="text-[2rem] leading-[37.5px] mb-0 font-gilroyBold font-bold" >
          rendezvous
        </h2>
        <span @click="toggleSidebar">
          <img src="@/assets/svg/menu.svg" alt="menu icon" class="cursor-pointer" />
        </span>
      </div>
    </nav>
    <div class="sidebar mb:hidden" :class="{ open: isSidebarOpen }">
        <div  @click="toggleSidebar" class="text-white flex justify-end"> 
            <i class="pi pi-times" style="font-size: 1.5rem"></i>
        </div>
      <ul class="text-white space-y-5">
        <li  class="list-item-resp"><a href="#discover" class="block py-3">Discover</a></li>
        <li class="list-item-resp"><a href="#about" class="block py-3">About us</a></li>
        <li class="list-item-resp"><a href="#faqs" class="block py-3">FAQs</a></li>
        <li class="list-item-resp"><a href="#contact" class="block py-3">Contact us</a></li>
    </ul>
    <div class="mt-5 flex flex-col space-y-7"> 
        <button
            type="button"
            class=" border border-white text-base leading-[18.75px] text-white font-gilroyBold px-6 py-3 rounded-[10px] cursor-pointer w-[100%]  sl:w-[70%] sm:w-[50%]"
          >
            Login
          </button>
        <button
            type="button"
            class="bg-white text-base leading-[18.75px] text-primaryText font-gilroyBold px-6 py-3 rounded-[10px] cursor-pointer  w-[100%] sl:w-[70%] sm:w-[50%]"
          >
            Sign up
          </button>

    </div>
    </div>
  </section>
</template>

<script>
export default {
  props:['type'],
  data(){ 
    return{ 
        isSidebarOpen: false,
    }
  },
  methods:{ 
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  }
};
</script>

<style>

</style>
