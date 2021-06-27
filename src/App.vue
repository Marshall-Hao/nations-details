<template>
<div class="bg-gray-100">
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
