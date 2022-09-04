import fetch from 'node-fetch'

const API = 'https://api.escuelajs.co/api/v1'

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI)
    const data = await response.json()
    return data
}

async function requestWrapper(urlAPI) {
    try {
        const products = await fetchData(`${urlAPI}/products`)
        const product = await fetchData(`${urlAPI}/products/${products[206].id}`)
        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`)

        console.log(products)
        console.log(product)
        console.log(category)
    } catch(error) {
        console.error(error)
    }
}

requestWrapper(API)