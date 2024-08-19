<template>
  <section class="max-w-[1312px] mx-auto px-4 pt-10 sm:mb-24">
    <Navbar type="b" />
    <div v-if="isLoading" class="text-center my-5">
      <i
        class="pi pi-spin pi-spinner"
        style="font-size: 3rem; animation-duration: 0.5s; color: #432361"
      ></i>
    </div>
    <div v-else-if="eventsObj">
      <div class="mt-5">
        <img :src="eventsObj.imageUrl" alt="image of details" class="mb:h-[480px] rounded-[20px] w-full object-cover"/>
      </div>
      <section class="mt-6 grid mb:grid-cols-detail gap-[2.5rem] mb:gap-[4.5%]">
        <article class="pt-5">
          <h3
            class="text-2xl leading-[28.13px] text-black mb-0 font-gilroyBold"
          >
            {{ eventsObj.title }}
          </h3>
          <div class="mt-6 flex items-center gap-[6px] xs:gap-4 mb:gap-6">
            <span class="flex items-center gap-1 mb:gap-2">
              <img src="@/assets/svg/calender.svg" alt="image of a calender" />
              <time
                datetime="2024-10-03T18:00"
                class="leading-[16.41px] text-black mb-0 font-gilroyRegular"
                >{{ formattedDate(eventsObj.date) }}</time
              >
            </span>
            <span
              class="flex flex-col xs:flex-row items-center flex-wrap gap-1 mb:gap-2"
            >
              <img src="@/assets/svg/time.svg" alt="image of time" />
              <time
                datetime="2024-10-03T18:00"
                class="leading-[16.41px] text-black mb-0 font-gilroyRegular"
                >{{ timeFormatter(eventsObj.time) }}</time
              >
            </span>
          </div>
          <div>
            <span class="mt-3 flex items-start gap-2">
              <img src="@/assets/svg/location.svg" alt="image of a location" />
              <p class="leading-[16.41px] text-black mb-0 font-gilroyRegular">
                {{ eventsObj.address }}
              </p>
            </span>
            <span class="mt-3 flex items-center gap-2">
              <img src="@/assets/svg/user.svg" alt="image of a user" />
              <p class="leading-[16.41px] text-black mb-0 font-gilroyRegular">
                {{ eventsObj.organizer.name }}
              </p>
            </span>
          </div>
          <section>
            <h3
              class="leading-[18.75px] text-black mb-0 font-gilroyBold font-bold mt-12"
            >
              Event description
            </h3>
            <p
              class="leading-[18.75px] text-black mb-0 font-gilroyRegular mt-6"
            >
              {{ eventsObj.description }}
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
                  {{ eventsObj.price ? currency : '' }} {{ eventsObj.price ? formateNum(eventsObj.price) : "Free" }}
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
                  {{ eventsObj.secPrice ? currency :'' }} {{ eventsObj.secPrice ? formateNum(eventsObj.secPrice) : "Free" }}
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
              <span class="cursor-pointer">
                <a :href="`mailto:${eventsObj.organizer.email}`">
                  <img
                    src="@/assets/svg/envelope.svg"
                    alt="Image of an envelope"
                  />
                </a>
              </span>
              <span class="cursor-pointer">
                <a
                  :href="eventsObj.organizer.twitterUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="@/assets/svg/twitter.svg" alt="Twitter icon" />
                </a>
              </span>
              <span class="cursor-pointer">
                <a
                  :href="eventsObj.organizer.instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="@/assets/svg/camera.svg" alt="Instagram icon" />
                </a>
              </span>
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
                :api-key="apiKey"
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
    </div>
    <EmptyTemplate v-else />
  </section>
  <Footer />
</template>

<script>
// components
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
import { GoogleMap, Marker } from "vue3-google-map";
import EmptyTemplate from "@/components/empty.vue";
// API
import eventService from "@/services/eventsServices";
//toast
import { useToast } from "vue-toastification";
import moment from "moment";

export default {
  components: {
    Navbar,
    Footer,
    GoogleMap,
    Marker,
    EmptyTemplate,
  },
  data() {
    return {
      center: {
        lat: 0,
        lng: 0,
      },
      apiKey: process.env.VUE_APP_GOOGLE_MAP_API_KEY,
      isLoading: false,
      eventsObj: null,
      toast: useToast(),
      eventId: "",
      currency:'NGN'
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
            console.error("Error getting location", error);
          },
          options
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
    async getSingleEvents() {
      this.isLoading = true;
      try {
        if (this.eventId) {
          const res = await eventService.getSingleEvent(this.eventId);
          if (res.status == 200) {
            this.isLoading = false;
            this.eventsObj = res.data.event;
            if(this.eventsObj.lat && this.eventsObj.lng){ 
              this.center = {
                lat: this.eventsObj.lat,
                lng: this.eventsObj.lng,
              },
                this.markers = [
                  {
                    position: {
                      lat: this.eventsObj.lat,
                      lng: this.eventsObj.lng,
                    },
                  },
                ];
            } else { 
              this.getLocation();
            }
          }
        }
      } catch (err) {
        this.isLoading = false;
        this.toast.error("An error occurred");
      }
    },
    formattedDate(date) {
      if (date) return moment(date).format("dddd, MMMM Do, YYYY");
      else return "";
    },
    timeFormatter(time) {
      if (time) return moment(time, "HH:mm").format("hA");
      else return "";
    },
    formateNum(num){ 
     if (num) return num.toLocaleString();
     else return '' 
    }
  },
  mounted() {
    this.eventId = this.$route.params.id;
    this.getSingleEvents();
  },
};
</script>

<style></style>
