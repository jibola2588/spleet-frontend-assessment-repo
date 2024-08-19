<template>
  <section class="max-w-[1312px] mx-auto px-4 pt-16 mb:pb-6">
      <div class="flex items-center justify-between gap-4 flex-wrap">
         <h3 class="text-[2rem] leading-[37.5px] text-black mb-0 font-gilroyBold">Trending events</h3>
         <div class="cursor-pointer flex items-center gap-1"> 
            <h3 class="text-base leading-[18.75px] text-primaryText mb-0 font-gilroyBold">View all trending events</h3>
            <span aria-hidden="true" class="pi pi-arrow-up-right" style="color: #432361; width:16px; height:16px;"></span>
         </div>
      </div>
      <div v-if="isLoading" class="text-center my-5"> 
        <i class="pi pi-spin pi-spinner" style="font-size: 3rem ; animation-duration: 0.5s; color:#432361"></i>
      </div>
      <div v-else-if='paginatedEventsArray.length'>
      <div class="py-5 sm:py-10  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-6"> 
         <div  v-for="(card,i) in paginatedEventsArray" :key="i">
            <Card :card="card"/>
         </div>
      </div>
    <!-- Pagination Component -->
    <PaginationComponent
      :paginationData="paginationData"
      :handler="handlePagination"
    />
    </div>
      <EmptyTemplate v-else/>
  </section>
</template>

<script>
import Card from '@/components/card.vue'
import EmptyTemplate from '@/components/empty.vue'
import PaginationComponent from '@/components/pagination.vue'
import eventService from "@/services/eventsServices"
import { useToast } from "vue-toastification";
import { EventBus } from '@/main';

export default {
    components:{ 
        Card,
        EmptyTemplate,
        PaginationComponent
    },
    data(){ 
    return{ 
      isLoading:false,
      eventsArray:[],
      toast:useToast(),
      paginatedEventsArray: [],
      paginationData: {
        totalData: 0,
        pageLimit: 6,
        currentPage: 1,
        totalPages: 1,
      },
      filteredEventsArray:[]
    }
  },
  methods:{ 
    async getEvents(){ 
        this.isLoading = true
      try{ 
        const res = await eventService.getAllEvents();
        if(res.status = 200){ 
            this.isLoading = false
            this.eventsArray = res?.data?.allEvents;
            this.filteredEventsArray = this.eventsArray;
           this.paginationData.totalData = this.eventsArray.length;
           this.paginationData.totalPages = Math.ceil(this.paginationData.totalData / this.paginationData.pageLimit);
           this.updatePaginatedData();
        }
      }catch(err){ 
        this.isLoading = false
        this.toast.error('An error occurred')
      }
    },
    handlePagination(action, data) {
      if (action === 'reset') {
        this.paginationData.pageLimit = data.newLimit;
        this.paginationData.totalPages = Math.ceil(this.paginationData.totalData / this.paginationData.pageLimit);
        this.paginationData.currentPage = 1;
      } else if (action === 'change') {
        this.paginationData.currentPage = data.newPage;
      }
      this.updatePaginatedData();
    },
    updatePaginatedData() {
      const startIndex = (this.paginationData.currentPage - 1) * this.paginationData.pageLimit;
      const endIndex = startIndex + this.paginationData.pageLimit;
      this.paginatedEventsArray = this.filteredEventsArray.slice(startIndex, endIndex);
    },
    filterEvents(search){
      if(search){ 
        this.filteredEventsArray = this.eventsArray.filter(event =>  
           (event.city.toLowerCase().includes(search.toLowerCase())) || 
           (event.title.toLowerCase().includes(search.toLowerCase())) || 
           (event.category.toLowerCase().includes(search.toLowerCase()))
        );
      }else{ 
        this.filteredEventsArray = this.eventsArray
      }
      this.paginationData.totalData = this.filteredEventsArray.length;
      this.paginationData.totalPages = Math.ceil(this.paginationData.totalData / this.paginationData.pageLimit);
      this.paginationData.currentPage = 1;
      this.updatePaginatedData();
    }
  },
  mounted(){
     this.getEvents();
     EventBus.on("search-events", this.filterEvents)
  }

}
</script>

<style>

</style>