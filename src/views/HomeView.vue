<template>
  <div>
    <Header />
    <Hero />
    <AllEvents />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue"
import Hero from "@/components/hero.vue"
import AllEvents from "@/components/eventCat.vue"
import Footer from "@/components/footer.vue"

export default {
  name: 'Home view',
  components:{ 
    Header,
    Hero,
    AllEvents,
    Footer
  },
}
</script>
