const asyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Async!!')
            }, 2000);
        } else {
            reject(new Error('Error!'))
        }
    })
}

const anotherFunction = async () => {
    const something = await asyncFunction()

    console.log(something)
    console.log('Hello!')
}

console.log('Before')
anotherFunction()
console.log('After  ')