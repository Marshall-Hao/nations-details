import { ref } from "@vue/reactivity"
import getBorder from './getBorder'

const getNation = (name) => {
    const nation = ref('')
    const borders = ref([])
    const error = ref('')

    const load = async () => {
        try {
            let data = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
            if (!data.ok) {
                throw Error('no data available')
            }
            const res = await data.json()
            nation.value = res[0]
            const borderCountries = res[0].borders
            borderCountries.forEach(async borderCountry => {
                const border =await getBorder(borderCountry)
                borders.value.push(border)
            }); 
        } catch(err) {
            error.value = err.message
            console.log(error.message)
        }
    }

    return { nation,  borders, error, load}
}

export default getNation