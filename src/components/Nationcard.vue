<template>
    <div v-if="nation" class="px-5 w-screen  items-center mb-5 md:px-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-12 mb-20" id="card-detail">
        <img class="w-full h-full md:h-5/6 object-fit shadow-xl " :src="nation.flag" alt="flag">
        <div class="py-1 md:py-12 flex flex-col">
        <div class="text-4xl font-bold">{{nation.name}}</div>
            <div class="my-10 flex flex-wrap md:flex-nowrap justify-between">
            <div class="w-full">
                <div class="py-1 font-medium text-md mb-1">Native Name: <span class="font-light">{{nation.nativeName}}</span></div>
                <div class="py-1 font-medium text-md mb-1">Population: <span class="font-light">{{nation.population}}</span></div>
                <div class="py-1 font-medium text-md mb-1">Region: <span class="font-light">{{nation.region}}</span></div>
                <div class="py-1 font-medium text-md mb-1">Sub Region: <span class="font-light">{{nation.subregion}}</span></div>
                <div class="py-1 font-medium text-md mb-1">Capital: <span class="font-light">{{nation.capital}}</span></div>
            </div>
            <div class="w-full mt-8 md:mt-0">
                <div class="py-1 font-medium text-md mb-1">Top Level Domain: <span class="font-light">{{nation.topLevelDomain[0]}}</span></div>
                <div class="py-1 font-medium text-md mb-1">Currencies: <span class="font-light">{{nation.currencies[0].code}}</span></div>
                <div class="py-1 font-medium text-md mb-1 space-x-4">Languages: 
                    <span v-for="language in nation.languages" :key="language" class="font-light">
                    {{language.name}}</span>
                    </div>
            </div>
            </div>
            <div class="flex flex-wrap md:flex-nowrap mt-3 items-baseline">
            <div class="md:w-2/6 font-medium text-md mb-3 md:mb-0">Border Countries:</div>
            <div class="md:w-4/6 flex flex-wrap font-light h-16">
                <div v-for="border in borders" :key="border">
                    <router-link :key="$route.fullPath" :to="{name: 'Details', params: {name: border}}" class="bg-gray-50 dark:bg-gray-700 dark:bg-opacity-95 shadow-lg py-1 px-4  text-xs mb-3 mr-3 hover:bg-gray-200">{{border}}</router-link>
                </div>
            </div>
            </div>
        </div>
    </div>
     <div v-else class="grid">
        <Spinner />
    </div>
    <div class="h-20"></div>
</template>


<script>
import { ref } from '@vue/reactivity'
import getNation from '../composables/getNation'
import Spinner from '../components/Spinner.vue'
import { watch, watchEffect } from '@vue/runtime-core'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

export default {
    props: ['name'],
    components: {Spinner},
    setup(props) {
        const nationCard = ref('')
        const route = useRoute()
        const router = useRouter()
        const { nation, borders, error, load} = getNation(route.params.name)

        load()
        watch(route, () => {
            if (route.params.name ) {
                router.go()
            }
        })
        return { nation, borders, error}
    }
}
</script>

<style>

</style>