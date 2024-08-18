<template>
  <section class="bg-primaryText pt-16 pb-28" aria-labelledby="rendezvous-heading">
    <div class="max-w-[1312px] mx-auto px-4 flex flex-col gap-6 sl:flex-row justify-between sm:gap-5"> 
      <div class="pt-1"> 
        <h2
          id="rendezvous-heading"
          class="text-[2rem] leading-[37.5px] text-white mb-2 font-gilroyBold font-bold"
        >
          rendezvous
        </h2>
        <p 
          class="mb-0 max-w-[332px] leading-[18.75px] font-gilroyRegular text-white"
          aria-label="Tagline"
        >
          Your Personal Event Sherpa: Curating Awesome, One Click at a Time.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-3 mb:gap-8" aria-label="Footer navigation">
        <div>
          <h3 class="footerHeading" id="features-heading">Feature</h3>
          <ul class="mb-0" aria-labelledby="features-heading">
            <li class="footerList"><a href="#" class="text-white">Events discovery</a></li>
            <li class="footerList"><a href="#" class="text-white">Ticketing</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footerHeading" id="company-heading">Company</h3>
          <ul class="mb-0" aria-labelledby="company-heading">
            <li class="footerList"><a href="#about" class="text-white">About us</a></li>
            <li class="footerList"><a href="#faqs" class="text-white">FAQs</a></li>
            <li class="footerList"><a href="#careers" class="text-white">Careers</a></li>
            <li class="footerList"><a href="#support" class="text-white">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footerHeading" id="contact-heading">Contact us</h3>
          <ul class="mb-0" aria-labelledby="contact-heading">
            <li class="footerList"><a href="mailto:info@events.com" class="text-white">info@events.com</a></li>
            <li class="footerList"><a href="tel:+2347013456789" class="text-white">+234 701 345 6789</a></li>
            <li class="footerList max-w-[240px]"><a href="https://maps.google.com/?q=Race+Course,+8/9+Marina,+Onikan,+Lagos+Lagos,+4aa+Force+Rd,+Lagos+Island+102273,+Lagos" class="text-white">Race Course, 8/9 Marina, Onikan, Lagos, Lagos Island 102273, Lagos</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
/* Add your styles here */
</style>
