import fetch from 'node-fetch'

const API = 'https://api.escuelajs.co/api/v1'

/* función que va a recibir como argumento la url que queremos 
llamar y esto retornará el llamado de fecth: una promesa */
function fetchData(urlAPI) {
    return fetch(urlAPI)
}

// Consultar API
fetchData(`${API}/products`)
    .then(response => response.json())
    // Obtener los productos
    .then(products => {
        console.log(products)
        // Consultar el primer producto
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    // Obtener el nombre del primer producto
    .then(product => {
        console.log(product.title)

        // Consultar la categoria del primer producto
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    // Obtener la categoria
    .then(catergory => console.log(catergory.name))
    // Mostrar posibles errores
    .catch(err => console.error(err))