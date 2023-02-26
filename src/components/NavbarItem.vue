<!-- eslint-disable vue/no-parsing-error -->
<script lang="ts">
export default {
  data() {
    return {
      scrolled: 0,
      bgColor: '#ffffff'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.scrolled = scrollTop
      this.bgColor = `rgb(${scrollTop}, ${scrollTop}, ${scrollTop})`
    }
  }
}
</script>
<template>
    <header class="px-2 sm:px-4 py-2.5 fixed w-full z-20 left-0" :class="{ 'bg-slate-900/40 backdrop-blur-md transition duration-500' : scrolled > 60, 'bg-transparent' : scrolled <= 60 }">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center">
            <img src="/logo.png" alt="" class="w-8 h-8 mr-3"/>
            <img src="/crspy-logo.png" alt="" class="w-auto h-12"/>
        </a>
        <div class="flex md:order-2">
            <a href="https://github.com/crspy2" target="_blank" class="text-gray-300 hover:text-gray-600 text-xl px-2 py-1 text-center md:mr-0">
                <v-icon name="fa-github" scale="1.20" />
            </a>
            <a href="https://youtube.com/@crspytm" target="_blank" class="text-gray-300 hover:text-[#FF0000] text-xl px-2 py-1 text-center md:mr-0">
                <v-icon name="fa-youtube" scale="1.20" />
            </a>
            <a href="https://discord.crspy.cc" target="_blank" class="text-gray-300 hover:text-[#5865F2] text-xl pl-2 pr-2 py-1 text-center md:mr-0">
                <v-icon name="fa-discord" scale="1.20" />
            </a>
            <a href="https://store.crspy.cc/?browse=terms" target="_blank">
                <button type="button" class="text-gray-300 hover:text-gray-400 font-bold rounded-lg text-sm px-3 py-2.5 text-center md:mr-0 mr-3">
                    TOS
                </button>
            </a>
            <a href="https://www.buymeacoffee.com/crspy" target="_blank" class='group hidden md:inline-flex bg-gray-800/80 rounded-md gap-2 '>
                <span class="text-rose-600 text-xl pl-3 py-1 text-center md:mr-0 group-hover:animate-pulse">
                <v-icon name="bi-heart-fill" scale="1.25"/>
                </span>
                <button type="button" class="text-gray-300 group-hover:text-gray-400 font-bold rounded-lg text-sm pr-4 py-1 text-center md:mr-0 mr-3">
                Donate
                </button>
            </a>
        </div>
        <div class="absolute left-1/2 right-1/2 justify-center items-center hidden w-screen md:flex md:w-auto md:order-3">
            <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            <li>
                <a href="/#about" class="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:bg-transparent text-gray-200 hover:text-gray-300 uppercase font-bold">
                About
                </a>
            </li>
            <li>
                <a href="/#products" class="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:bg-transparent text-gray-200 hover:text-gray-300 uppercase font-bold">
                Purchase
                </a>
            </li>
            </ul>
        </div>
        </div>
        </header>
</template>