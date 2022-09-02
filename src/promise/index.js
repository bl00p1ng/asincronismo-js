/* Contar el número de vacas y con base a eso saber si se puede
cumplir con los litros de leche requeridos */

const cows = 15;

// Definir Promise
const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`Se tienen ${cows} vacas en la granja`)
    } else {
        reject('No hay vacas suficientes en la granja')
    }
})

// Ejecutra promise
countCows
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Fin de la ejecución de la promesa'))