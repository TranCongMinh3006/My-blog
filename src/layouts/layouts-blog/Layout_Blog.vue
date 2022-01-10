<template>
  <div>
    <Navbar></Navbar>
    <div>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
export default {
  name: "Layout",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
</style>