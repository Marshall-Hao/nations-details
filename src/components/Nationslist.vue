<template>
    <div v-if="nations.length" class="w-screen px-5 mb-5 md:px-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-12">
        <div  v-for="nation in nations" :key="nation.name">
            <Card :nation="nation"/>
        </div>
    </div>
    <div v-else class="grid">
        <Spinner />
    </div>
</template>

<script>
import { ref, watch } from '@vue/runtime-core'
import Card from '../components/Card.vue'
import Spinner from '../components/Spinner.vue'
import getNations from '../composables/getNations'

export default {
    props: ['search', 'nations'],
    components: {Card, Spinner},
    setup(props) {
 
    }
}
</script>

<style>

</style>