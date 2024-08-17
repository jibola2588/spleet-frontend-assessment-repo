<template>
    <article class="border border-[#E0E0E0] rounded-[10px] w-full">
      <figure class="h-[240px] w-full rounded-tr-[10px] rounded-tl-[10px]">
        <img alt="Promotional poster for ISWIS Live Show" src="@/assets/svg/card1img.svg" class="w-[100%] h-[100%] object-cover rounded-tr-[10px] rounded-tl-[10px]" />
      </figure>
      <div class="mt-4 px-4">
        <header>
          <h3 class="text-base leading-[18.75px] text-black mb-0 font-gilroyBold">ISWIS Live show</h3>
          <div class="mt-1 flex items-center gap-2">
            <time datetime="2024-10-03T18:00" class="text-sm leading-[16.41px] text-black mb-0 font-gilroyMedium font-medium">Sun, Oct 3rd</time>
            <span class="w-1 h-1 bg-black rounded-full"></span>
            <time datetime="2024-10-03T18:00" class="text-sm leading-[16.41px] text-black mb-0 font-gilroyMedium font-medium">6pm</time>
          </div>
        </header>
        <p class="mt-3 text-sm leading-[16.41px] text-black mb-0 font-gilroyRegular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button class="cursor-pointer mt-5 mb-10 flex items-center gap-1" aria-label="View details about ISWIS Live Show">
          <span class="text-primaryText mb-0 font-gilroyMedium">View details</span>
          <span aria-hidden="true" class="pi pi-arrow-up-right" style="color: #432361; width:16px; height:16px;"></span>
        </button>
      </div>
    </article>
  </template>  

<script>
export default {

}
</script>

<style>

</style>