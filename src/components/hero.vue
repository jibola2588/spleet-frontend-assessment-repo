<template>
  <section class="max-w-[1312px] mx-auto px-4 pt-16 pb-6">
      <div class="flex items-center justify-between gap-4 flex-wrap">
         <h3 class="text-[2rem] leading-[37.5px] text-black mb-0 font-gilroyBold">Trending events</h3>
         <div class="cursor-pointer flex items-center gap-1"> 
            <h3 class="text-base leading-[18.75px] text-primaryText mb-0 font-gilroyBold">View all trending events</h3>
            <span aria-hidden="true" class="pi pi-arrow-up-right" style="color: #432361; width:16px; height:16px;"></span>
         </div>
      </div>
      <div class="py-5 sm:py-10  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-6"> 
         <Card />
         <Card />
         <Card />
      </div>
  </section>
</template>

<script>
import Card from '@/components/card.vue'

export default {
    components:{ 
        Card
    }

}
</script>

<style>

</style>