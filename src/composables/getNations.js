import { ref } from "@vue/reactivity"


const getNations = () => {
    const nations = ref([])
    const error = ref(null)
    const results = ref([])

    const load = async () => {
        try {
            let data = await fetch('https://restcountries.eu/rest/v2/all')
            if (!data.ok) {
                throw Error('no data available')
            }
            nations.value = await data.json()
            results.value = nations.value
            console.log('nations are', nations.value[1])
        } catch(err) {
            error.value = err.message
            console.log(error.message)
        }
    }

    return { nations, results, error, load}
}

export default getNations