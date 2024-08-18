<template>
  <section class="max-w-[1312px] mx-auto px-4 pt-10  sm:mb-24">
    <Navbar type="b"/>
    <div class="mt-5">
      <img src="@/assets/svg/detailsImg.svg" alt="image of details" />
    </div>
    <section class="mt-6 grid mb:grid-cols-detail  gap-[2.5rem] mb:gap-[4.5%]">
      <article class="pt-5">
        <h3 class="text-2xl leading-[28.13px] text-black mb-0 font-gilroyBold">
          I said what I said Live Show
        </h3>
        <div class="mt-6 flex items-center gap-[6px] xs:gap-4 mb:gap-6">
          <span class="flex items-center gap-1 mb:gap-2">
            <img src="@/assets/svg/calender.svg" alt="image of a calender" />
            <time
              datetime="2024-10-03T18:00"
              class="leading-[16.41px] text-black mb-0 font-gilroyRegular font-medium"
              >Sunday, October 3rd, 2023</time
            >
          </span>
          <span class="flex flex-col xs:flex-row items-center flex-wrap gap-1 mb:gap-2">
            <img src="@/assets/svg/time.svg" alt="image of time" />
            <time
              datetime="2024-10-03T18:00"
              class="leading-[16.41px] text-black mb-0 font-gilroyRegular font-medium"
              >6PM</time
            >
          </span>
        </div>
        <div>
          <span class="mt-3 flex items-center gap-2">
            <img src="@/assets/svg/location.svg" alt="image of a location" />
            <p
              class="leading-[16.41px] text-black mb-0 font-gilroyRegular font-medium"
            >
              Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos
              Island 102273, Lagos
            </p>
          </span>
          <span class="mt-3 flex items-center gap-2">
            <img src="@/assets/svg/user.svg" alt="image of a user" />
            <p
              class="leading-[16.41px] text-black mb-0 font-gilroyRegular font-medium"
            >
              FK, Jollz
            </p>
          </span>
        </div>
        <section>
          <h3 class="leading-[18.75px] text-black mb-0 font-gilroyBold mt-12">
            Event description
          </h3>
          <p
            class="leading-[18.75px] text-black mb-0 font-gilroyRegular mt-6 font-medium"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h3
            class="leading-[18.75px] text-black mb-0 font-gilroyBold mt-8 font-bold"
          >
            Tickets Pricing
          </h3>
          <div class="mt-6 flex items-center gap-16">
            <span>
              <h3
                class="text-xl leading-[23.44px] text-black mb-0 font-gilroyMedium"
              >
                Single
              </h3>
              <p
                class="leading-[18.75px] mb-0 font-gilroyBold text-[#9B51E0] mt-3"
              >
                NGN 5,000
              </p>
            </span>
            <span>
              <h3
                class="text-xl leading-[23.44px] text-black mb-0 font-gilroyMedium"
              >
                Pair
              </h3>
              <p
                class="leading-[18.75px] mb-0 font-gilroyBold text-[#9B51E0] mt-3"
              >
                NGN 9,000
              </p>
            </span>
          </div>
          <button
            type="button"
            class="bg-primaryBg text-base leading-[18.75px] text-white font-gilroyRegular px-6 py-3 rounded-[10px] cursor-pointer mt-6 mb:mt-12 w-[154px]"
          >
            Buy now
          </button>
        </section>
      </article>
      <div class="flex flex-col-reverse mb:flex-col">
        <div class="mb-10 mb:mb-0">
        <h3
          class="leading-[18.75px] text-black mb-0 font-gilroyBold mt-10 mb:mt-24 font-bold"
        >
          Contact Organizers
        </h3>
        <div class="mt-6 flex items-center gap-6">
          <img src="@/assets/svg/envelope.svg" alt="image of an envelop" />
          <img src="@/assets/svg/twitter.svg" alt="twitter icon" />
          <img src="@/assets/svg/camera.svg" alt="camera icon" />
        </div>
      </div>
        <div>
          <h3
            class="leading-[18.75px] text-black mb-0 font-gilroyBold mb:mt-[43px] font-bold"
          >
            Directions
          </h3>
          <div class="mt-6">
            <GoogleMap
              api-key="AIzaSyAQZqhVhDI1s0-YCuK6YpXxuE_CMlMrU5c"
              style="width: 100%; height: 500px"
              :center="center"
              :zoom="15"
            >
              <Marker :options="{ position: center }" />
            </GoogleMap>
          </div>
        </div>
      </div>
    </section>
  </section>
  <Footer />
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: {
    Navbar,
    Footer,
    GoogleMap,
    Marker,
  },
  data() {
    return {
      center: {
        lat: 0,
        lng: 0,
      },
    };
  },
 methods: {
  getLocation() {
    if (navigator.geolocation) {
      const options = { enableHighAccuracy: true };
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.markers = [
            {
              position: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
            },
          ];
        },
        (error) => {
          console.error('Error getting location', error);
        },
        options
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  },
},
mounted() {
  this.getLocation();
},

};
</script>

<style></style>
