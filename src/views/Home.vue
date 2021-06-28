<template>
  <Toolsbar  @searchNation ="handleSearch"/>
  <div v-if="results.length">
    <Nationslist  :nations="results"/>
  </div>
  <div v-else>
    <Nationslist  :nations="nations"/>
  </div>
</template>

<script>
import Toolsbar from '../components/Toolsbar.vue'
import Nationslist from '../components/Nationslist.vue'
import getNations from '../composables/getNations'
import { ref } from '@vue/reactivity'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Toolsbar,
    Nationslist
  },
  setup(props) {
    const {nations, error, load} = getNations()
    const results = ref('')

    load ()
    const handleSearch = (search) => {
      results.value = nations.value.filter((nation) => 
        nation.name.toUpperCase().includes(search.toUpperCase())
      )
     }
    
    return {nations, error,  handleSearch, results}
  }
}
</script>
