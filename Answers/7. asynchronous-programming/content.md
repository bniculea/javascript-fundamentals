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
            const randomNumber = Math.floor(Math.random() * 10 + 1)
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

4. 
    ```JavaScript
        const p1 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve('Hello friend')
            }, 1500)
        })

        const p2 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve('Where are you from')
            }, 2300)
        })

        const p3 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve('What do you want')
            }, 3300)
        })

        Promise.all([p1,p2,p3]).then(values => {
            console.log(values.join(','))
        })

    ```