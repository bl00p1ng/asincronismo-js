const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI, callback) {
    // Instanciar XMLHttpRequest
    let xhr = new XMLHttpRequest()

    // Abrir conexión con la API
    xhr.open('GET', urlAPI, true)

    // Escuchar el estado de la solicitud
    xhr.onreadystatechange = function(event) {
        // Validar que el estado de la petición sea igual a completado
        if (xhr.readyState === 4) {
            // Validar que el estado de la solicitud sea OK
            if (xhr.status === 200) {
                // Procesar espuesta del servidor
                callback(null, JSON.parse(xhr.responseText))
            }
            // En caso de de ocurra un error en la petición
            else {
                const error = new Error(`Error ${urlAPI}`)
                return callback(error, null)
            }
        }
    }

    // Ejecutar petición a la API
    xhr.send()
}

// Llamar a la función que hace la petición a la API
fetchData(`${API}/products`, function(error1, data1) {
    // Si hay un error, mostrarlo y detener la ejecución
    if (error1) {
        return console.error(error1)
    }

    /* Si todo esta OK, obtener el ID del primer 
    producto que retorno la primera petición*/
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
        // Si hay un error, mostrarlo y detener la ejecución
        if (error2) {
            return console.error(error2)
        }

        /* Si todo esta OK, obtener la categoria a la que esta 
        asociada el producto de la primera posición*/
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
            // Si hay un error, mostrarlo y detener la ejecución
            if (error3) {
                console.error(error3)
            }

            // Si todo esta OK, se muestra la información resulante de las 3 peticiones
            console.log(data1[0])
            console.log(data2.title)
            console.log(data3.name)
        })
    })
})