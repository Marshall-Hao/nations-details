<template>
    <router-link :to="{name: 'Details', params: {name: nation.name}}">
        <div  class="rounded-md no-underline text-gray-800 hover:text-black dark:text-white dark:bg-gray-700 dark:bg-opacity-95 hover:bg-gray-200 hover:dark:bg-gray-300 overflow-hidden shadow-lg hover:shadow-2xl">
            <img class="w-full h-auto md:h-48 object-cover" :src="nation.flag" alt="flag">
            <div class="px-6 p-4">
            <div class="font-bold text-2xl mb-2 name">{{nation.name}}</div>
            <div class="font-medium text-md mb-1 ">Population: {{nation.population}}</div>
            <div class="font-medium text-md mb-1 region">Region: {{nation.region}}</div>
            <div class="font-medium text-md mb-1">Capital: {{nation.capital}}</div>
            </div>
        </div>    
    </router-link> 
</template>

<script>
export default {
    props: ['nation'],
    setup(props) {

    }
}
</script>

<style>

</style>