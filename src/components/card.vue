<template>
    <article class="border border-[#E0E0E0] rounded-[10px] w-full">
      <figure class="h-[240px] w-full rounded-tr-[10px] rounded-tl-[10px]">
        <img alt="Promotional poster for ISWIS Live Show" :src="card.imageUrl" class="w-[100%] h-[100%] object-cover rounded-tr-[10px] rounded-tl-[10px]" />
      </figure>
      <div class="mt-4 px-4">
        <header>
          <h3 class="text-base leading-[18.75px] text-black mb-0 font-gilroyBold">{{ card?.title }}</h3>
          <div class="mt-1 flex items-center gap-2">
            <time datetime="2024-10-03T18:00" class="text-sm leading-[16.41px] text-black mb-0 font-gilroyMedium font-medium">{{ formattedDate(card?.date)}}</time>
            <span class="w-1 h-1 bg-black rounded-full"></span>
            <time datetime="2024-10-03T18:00" class="text-sm leading-[16.41px] text-black mb-0 font-gilroyMedium font-medium">{{ timeFormatter(card?.time) }}</time>
          </div>
        </header>
        <p class="mt-3 text-sm leading-[16.41px] text-black mb-0 font-gilroyRegular">
           {{ formateString(card?.description) }}
        </p>
        <router-link :to="`/${card.id}`"> 
        <button class="cursor-pointer mt-5 mb-10 flex items-center gap-1" aria-label="View details about ISWIS Live Show">
          <span class="text-primaryText mb-0 font-gilroyMedium">View details</span>
          <span aria-hidden="true" class="pi pi-arrow-up-right" style="color: #432361; width:16px; height:16px;"></span>
        </button>
      </router-link>
      </div>
    </article>
  </template>  

<script>
import moment from 'moment'

export default {
props:['card'],
  methods:{
    formattedDate(date) {
     if (date) return moment(date).format('ddd, MMM Do');
     else return ''
    },
    timeFormatter(time) {
      if (time) return moment(time, 'HH:mm').format('hA');
      else return ''
    },
    formateString(value){ 
      return value.substring(0,100) + '...'
    }
  }
}
</script>

<style>

</style>