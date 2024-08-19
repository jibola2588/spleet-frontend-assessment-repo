<template>
  <section class="max-w-[1312px] mx-auto px-4 pt-16 relative">
    <div class="flex flex-col gap-4 sl:flex-row sn:gap-0 justify-between flex-wrap">
      <h3 class="text-[2rem] leading-[37.5px] text-black mb-0 font-gilroyBold">
        Trending events
      </h3>
      <span class="block sn:hidden">
      <label for="category" class="sr-only">Select a category</label>
      <Select
        id="category"
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Category"
        class="w-40 text-[#4F4F4F] text-base leading-[18.75px] font-gilroyRegular custom-select"
        @change="handleChange"
      />
    </span>
      <div class="cursor-pointer flex items-center gap-1">
        <h3
          class="text-base leading-[18.75px] text-primaryText mb-0 font-gilroyBold"
        >
          View all trending events
        </h3>
        <span
          aria-hidden="true"
          class="pi pi-arrow-up-right"
          style="color: #432361; width: 16px; height: 16px"
        ></span>
      </div>
    </div>
    
    <div v-if="isLoading" class="text-center my-5">
      <i
        class="pi pi-spin pi-spinner"
        style="font-size: 3rem; animation-duration: 0.5s; color: #432361"
      ></i>
    </div>
    <div v-else-if="paginatedEventsArray.length" class="py-5 sm:py-10">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-6"
      >
        <div v-for="(card, i) in paginatedEventsArray" :key="i">
          <Card :card="card" />
        </div>
      </div>
      <!-- Pagination Component -->
      <PaginationComponent
        :paginationData="paginationData"
        :handler="handlePagination"
      />
    </div>
    <EmptyTemplate v-else />
  </section>
</template>

<script>
import Card from "@/components/card.vue";
import EmptyTemplate from "@/components/empty.vue";
import PaginationComponent from "@/components/pagination.vue";
import eventService from "@/services/eventsServices";
import { useToast } from "vue-toastification";
import { EventBus } from "@/main";

export default {
  components: {
    Card,
    EmptyTemplate,
    PaginationComponent,
  },
  data() {
    return {
      isLoading: false,
      eventsArray: [],
      toast: useToast(),
      paginatedEventsArray: [],
      paginationData: {
        totalData: 0,
        pageLimit: 6,
        currentPage: 1,
        totalPages: 1,
      },
      filteredEventsArray: [],
      cities:[],
      selectedCity:''
    };
  },
  methods: {
    async getEvents() {
      this.isLoading = true;
      try {
        const res = await eventService.getAllEvents();
        if ((res.status = 200)) {
          this.isLoading = false;
          this.cities =  res?.data?.allEvents.map(item => { 
              return { 
                name:item.category
              }
            })
          this.eventsArray = res?.data?.allEvents;
          this.filteredEventsArray = this.eventsArray;
          this.paginationData.totalData = this.eventsArray.length;
          this.paginationData.totalPages = Math.ceil(
            this.paginationData.totalData / this.paginationData.pageLimit
          );
          this.updatePaginatedData();
        }
      } catch (err) {
        this.isLoading = false;
        this.toast.error("An error occurred");
      }
    },
    handlePagination(action, data) {
      if (action === "reset") {
        this.paginationData.pageLimit = data.newLimit;
        this.paginationData.totalPages = Math.ceil(
          this.paginationData.totalData / this.paginationData.pageLimit
        );
        this.paginationData.currentPage = 1;
      } else if (action === "change") {
        this.paginationData.currentPage = data.newPage;
      }
      this.updatePaginatedData();
    },
    updatePaginatedData() {
      const startIndex =
        (this.paginationData.currentPage - 1) * this.paginationData.pageLimit;
      const endIndex = startIndex + this.paginationData.pageLimit;
      this.paginatedEventsArray = this.filteredEventsArray.slice(
        startIndex,
        endIndex
      );
    },
    filterEvents(search) {
      if (search) {
        this.filteredEventsArray = this.eventsArray.filter(
          (event) =>
            event.city.toLowerCase().includes(search.toLowerCase()) ||
            event.title.toLowerCase().includes(search.toLowerCase()) ||
            event.category.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        this.filteredEventsArray = this.eventsArray;
      }
      this.paginationData.totalData = this.filteredEventsArray.length;
      this.paginationData.totalPages = Math.ceil(
        this.paginationData.totalData / this.paginationData.pageLimit
      );
      this.paginationData.currentPage = 1;
      this.updatePaginatedData();
    },
    async getEventsByCategory(category) {
      this.isLoading = true;
      try {
        const res = await eventService.searchEvent(category);
        if ((res.status = 200)) {
          this.isLoading = false;
          this.eventsArray = res?.data?.event;
          this.filteredEventsArray = this.eventsArray;
          this.paginationData.totalData = this.filteredEventsArray.length;
          this.paginationData.totalPages = Math.ceil(
            this.paginationData.totalData / this.paginationData.pageLimit
          );
          this.updatePaginatedData();
        }
      } catch (err) {
        this.isLoading = false;
      }
    },
   async handleChange(){ 
    this.isLoading = true;
      try {
        const res = await eventService.searchEvent(this.selectedCity.name);
        if ((res.status = 200)) {
          this.isLoading = false;
          this.eventsArray = res?.data?.event;
          this.filteredEventsArray = this.eventsArray;
          this.paginationData.totalData = this.filteredEventsArray.length;
          this.paginationData.totalPages = Math.ceil(
            this.paginationData.totalData / this.paginationData.pageLimit
          );
          this.updatePaginatedData();
        }
      } catch (err) {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.getEvents();
    EventBus.on("search-events", this.filterEvents);
    EventBus.on("filter-by-category", this.getEventsByCategory);
  },
};
</script>

<style scoped>
.custom-select {
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: 'Gilroy', sans-serif;
  border: 1px solid #D1D5DB;
  border-radius: 0.375rem;
  padding: 0.5rem;
}

</style>
