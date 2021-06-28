<template>
  <Toolsbar  @searchNation ="handleSearch" @filterRegion = "handleFilter"/>
  <Nationslist  :nations="results"/>
</template>

<script>
import Toolsbar from '../components/Toolsbar.vue'
import Nationslist from '../components/Nationslist.vue'
import getNations from '../composables/getNations'
import { ref } from '@vue/reactivity'
import { onMounted, watchEffect } from '@vue/runtime-core'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Toolsbar,
    Nationslist
  },
  setup(props) {
    const {nations, results, error, load} = getNations()

    load()

    const handleSearch = (search) => {
      results.value = nations.value.filter((nation) => 
        nation.name.toUpperCase().includes(search.toUpperCase())
      )
     }
     const handleFilter = (region) => {
       if ( region === "All") {
         results.value = nations.value
       } else {
          results.value = nations.value.filter((nation) => 
          nation.region === region
         )
       }
     }
    
    return {nations, error,  handleSearch, results, handleFilter}
  }
}
</script>
