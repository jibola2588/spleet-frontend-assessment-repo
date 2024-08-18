<template>
    <div class="flex justify-between items-center my-4">
      <p class="font-quietSans text-grey600 mb-0 hidden xs:block">
        1 -
        {{
          +pageLimit * +currentPage > totalData
            ? totalData
            : +pageLimit * +currentPage
        }}
        of {{ totalData }}
      </p>
      <div class="flex items-center">
        <span @click="handlePrevPage" class="cursor-pointer">
          <img src="@/assets/svg/arrowtinyLeft.svg" />
        </span>
        <div class="mx-3 font-quietSans text-grey600">
          {{ currentPage }} - {{ totalPages }}
        </div>
        <span @click="handleNextPage" class="cursor-pointer">
          <img src="@/assets/svg/arrow-right.svg" />
        </span>
        <select
          :value="pageLimit"
          @change="handleResetPage"
          class="font-quietSans text-grey600 border border-grey400 rounded px-2 py-1 ml-5"
        >
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["paginationData", "handler"],
    data() {
      return {
        totalData: this.paginationData?.totalData ?? 0,
        pageLimit: this.paginationData?.pageLimit ?? 0,
        currentPage: this.paginationData?.currentPage ?? 0,
        totalPages: this.paginationData?.totalPages ?? 0,
        currentPageData: this.paginationData?.currentPageData ?? 0,
      };
    },
    methods: {
      handleNextPage() {
        if (this.currentPage < this.totalPages) {
          this.handler("change", { newPage: this.currentPage + 1 });
        }
      },
      handlePrevPage() {
        if (this.currentPage > 1) {
          this.handler("change", { newPage: this.currentPage - 1 });
        }
      },
      handleResetPage(e) {
        const chosenLimit = +e.target.value;
        this.pageLimit = chosenLimit;
        if (chosenLimit >= this.totalData) {
          this.handler("reset", { newLimit: this.totalData, newPage: 1 });
        } else {
          this.handler("reset", { newLimit: chosenLimit, newPage: 1 });
        }
      },
    },
    watch: {
      paginationData: {
        handler(newVal) {
          this.totalData = newVal.totalData;
          this.pageLimit = newVal.pageLimit;
          this.currentPage = newVal.currentPage;
          this.totalPages = newVal.totalPages;
        },
        deep: true,
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  