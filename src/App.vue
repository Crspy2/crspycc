<script setup lang="ts">
import About from './components/AboutItem.vue';
import Footer from './components/FooterItem.vue'
import Header from './components/HeaderItem.vue';
import Product from './components/ProductItem.vue'
import Navbar from './components/NavbarItem.vue';
import Review from './components/ReviewItem.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar />
      <Header />

      <section id="about">
        <About />
      </section>

      <Review />
  
      <section id="products">
        <Product />
      </section>
      <Footer />
    </div>
  </header>

</template>