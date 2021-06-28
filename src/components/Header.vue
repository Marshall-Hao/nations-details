<template>
    <div class="w-screen bg-white dark:bg-gray-700 dark:bg-opacity-95 h-24 md:h-20 flex justify-between px-5 md:px-14 items-center shadow-sm " id="navbar">
      <div>
        <span class="text-2xl font-bold ">Where in the world?</span>
      </div>

      <div @click="handleClick" class="w-4/12 md:w-1/12 flex justify-around md:justify-between items-center mt-px">
        <i class="far fa-moon"></i>
        <span class="text-lg font-light">Dark Mode</span>
      </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const dark = ref(false)
    const html = document.querySelector("html");

    const handleClick = () => {
      dark.value = !dark.value
      toggleDarkMode()
    }
    const toggleDarkMode = () => {
      dark.value ? html.classList.add("dark") : html.classList.remove("dark");
    };
    return { handleClick }
  }
}
</script>

<style>

</style>