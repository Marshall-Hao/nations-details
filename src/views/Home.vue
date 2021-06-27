<template>
  <Toolsbar />
  <Nationslist />
</template>

<script>
import Toolsbar from '../components/Toolsbar.vue'
import Nationslist from '../components/Nationslist.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Toolsbar,
    Nationslist
  }
}
</script>
