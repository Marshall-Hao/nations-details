<template>
<div class="bg-gray-100 dark:bg-gray-800 dark:bg-opacity-95 dark:text-white">
  <Header />
  <router-view/>
</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {Header}
}

</script>
<style>
</style>
