<template>
    <Toolsbar />
    <Nationcard :name="name"/>
</template>

<script>
import Nationcard from '../components/Nationcard.vue'
import Toolsbar from '../components/Toolsbar.vue'

export default {
props: ['name'],
components: {
    Nationcard,
    Toolsbar
}
}
</script>

<style>

</style>