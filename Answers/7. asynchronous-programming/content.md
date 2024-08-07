1. 
    ```JavaScript
        const promise = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve('Hello world')
            }, 2000)
        })
        promise.then(value => {
            console.log(value)
        })

    ```
2. 
    ```JavaScript
        const promise = new Promise((resolve, reject) => {
            reject('Something went wrong')
        })

        promise.catch(err => {
            console.log(err)
        })
    ```

3. 
    ```JavaScript
        const promise1 = new Promise((resolve, reject) =>{
            resolve(5)
        })

        const promise2Fun = (number) => {
            return new Promise((resolve, reject) => {
                resolve(number*2)
            })
        }

        promise1
        .then(value => {
            return promise2Fun(value)
        })
        .then(value => {
            console.log(value)
        })

    ```