<template>
  <div v-if="currentRouterName === 'Home'" class="w-screen flex flex-wrap md:flex-nowrap justify-between px-5 md:px-14 items-center my-7" id="function-bar">
    <div class="bg-white dark:bg-gray-700 dark:bg-opacity-95 shadow-lg p-3 flex rounded-md w-full my-3 md:w-5/12">
      <span class="w-auto flex justify-end items-center text-gray-500 p-2">
          <i class="fas fa-search"></i>
      </span>
      <input class="w-full dark:bg-gray-700 rounded p-1 focus:outline-none" @keyup="handleKeydown" v-model="search" type="text" placeholder="Search for a country..." >
    </div >

    <select v-model="select" @change="handleChange"  class="select2 bg-white dark:bg-gray-700 dark:bg-opacity-95 shadow-lg rounded-md px-3 w-7/12 h-16 my-3 md:w-2/12 focus:outline-none"  name="region" data-allow-clear="false">
      <option value="All" >Filter by Region</option>
      <option value="Africa" >Africa</option>
      <option value="Americas" >Americas</option>
      <option value="Asia" >Asia</option>
      <option value="Europe" >Europe</option>
      <option value="Oceania" >Oceania</option>
    </select>
  </div>
  <div v-else>
    <div @click ="handleClick" class="w-screen flex justify-between px-5 md:px-14 items-center my-7 " id="function-bar">
        <router-link  :to="{name: 'Home'}" class="text-gray-500 hover:text-gray-600 bg-gray-50 hover:bg-gray-200 shadow-lg px-11 py-3 flex justify-between items-center  rounded-md my-3 w-40 dark:bg-gray-700 dark:bg-opacity-95 dark:text-white">
          <i class="fas fa-arrow-circle-left "></i>
          <div class=" font-medium" >Back</div>
        </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  setup(props, context) {
    const router = useRouter()
    const search = ref('')
    const select = ref('All')
    const currentRouterName = router.currentRoute.value.name

    const handleClick = ()=> {
      router.push({name: 'Home'})
    }
    const handleKeydown = ()=> {
      context.emit('searchNation', search.value)
      select.value = 'All'
    }
    const handleChange = ()=> {
      context.emit('filterRegion', select.value)
      search.value = ''
    }
    return { currentRouterName,handleClick, handleKeydown , search, handleChange, select}
  }
}
</script>

<style>

</style>