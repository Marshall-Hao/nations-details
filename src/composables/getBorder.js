const getBorder = async (borderName) => {
    try {
        let data = await fetch(`https://restcountries.eu/rest/v2/alpha/${borderName}`)
        if (!data.ok) {
            throw Error('no data available')
        }
        const res = await data.json()
        const border = res.name
        return border
    } catch(err) {
        console.log(err.message)
    }
}


export default getBorder