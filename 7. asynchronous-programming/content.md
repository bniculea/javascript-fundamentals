# Asynchronous programming

## Topics discussed

- Synchronous programming
- Asynchronous programming
- Callbacks
    - Callback hell
- Promises
    * Promise.all()
    * Promise.any()
    * Promise.race()
    * Promise.allSettled()
- Async/Await

## Synchronous programming

- In simple words, synchronous programming is when your code follows a certain order, for example if you have to do:
    - "Task-1"
    - "Task-2"
    - "Task-3"
    They will all happen in the order they have been defined, namely, `Task-3` will not happen before the `Task-2` will finish what it had to do

- Now, in JavaScript, this might look something like:
    ```JavaScript
        console.log('I am the first statement')
        console.log('I am the second statement')
        console.log('I am the third statement')
    ```
    * And, as you expected, the messages will be displayed exactly in the order we have written them

- The major problem with synchronous programming is that certain tasks might take a lot of time to complete, thus, it will make you application very laggy, or even frozen. For example, thinking about scenarios when you are reading a huge file, if you will do it synchronously, you will not be able to do anything until the file is read.
    - NOTE: this is why, this style of programming is also called `blocking`.
    - NOTE2: We will learn in a moment about asynchronous programming but do not be tempted to say that async will save anything and we should forgot about sync thingies


## Asynchronous programming

- Is a feature that allows your program to also start doing other things while it's main responsibility is still running unaffected by those. Basically your application will continue to do its job and when a certain task that was started in an async mode got a response, the application will use that response however it needed to. 
- Think to the following real life scenario, when you are uploading some files to the cloud (either Onedrive, GDrive, Dropbox, etc) from your local machine/smartphone/etc, your device will not be blocked until you upload all the files, rather you will use it as nothing happens because all of this is running in the background.
- Another example that does not imply programming to say so, is when you are watching a movie and eating some snacks and also sending some messages on whatsap and any other things. This is also a collection of asynchrnous tasks.
    - Note: you are switching between the tasks  and you might or might not do the  tasks in the same time. Basically this is the difference between asyncronous programming and parallel programming
        - Async: tasks are started and ran independently of each other (they can be done by the same thread)
        - Parallel: tasks are started and run in the same time (this implies multiple threads/cores)

- Now if we are to think about certain benefits:
    - Improved user experience
    - Improved application performance (might be able to do more stuff in the same amount of time or approximate ammount of time)
    
- Let's rewrite the console.log example in an asynchronous way using the setTimeout function (Remember, MDN is your friend: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
    ```JavaScript
        setTimeout(()=> console.log('I am the first statement'), 2000)
        setTimeout(()=>console.log('I am the second statement'), 1800)
        setTimeout(()=> console.log('I am the third statement'), 3000)
        setTimeout(()=> console.log('I am the fourth statement'), 1740)
    ```
    - The output of the previous snippet cannot be deduced..and it can differ from run to run, because it is not ran in the order we want. The second parameter of the `setTimeout` function it tells that it should run only after that specific amount of time has passed (in milliseconds) but it is not a guarantee that it will run exactly after that specific amount of time. (we will learn more about this when we will get to the event loop)

- What do you think will be the output of the following snippet:
    ```JavaScript
                setTimeout(()=> console.log('My Name is Bogdan'), 0)
                console.log('And I am a big fan of LOTR')
    ```

## Callbacks
- In order to fix the problem that we have, namely to get the output in the desired order, we can make use of something that is called a callback
    ```text
        A callback is simply a function that is passed as a parameter to another function, which will be called as soon as the function has a result.
    ```
    ```javascript
        function t1(callback) {
            setTimeout(()=> {
                console.log('I am the first statement')
                callback()
            }, 2000)
        }

        function t2(callback) {
            setTimeout(()=> {
                console.log('I am the second statement')
                callback()
         }, 1800)
        }


        function t3(callback) {
            setTimeout(()=>  {
                console.log('I am the third statement')
                callback()
            }, 3000)
            
        }

        function t4(callback) {
            setTimeout(()=> {
                console.log('I am the third statement')
                callback()
            }, 1740)           
        }        
        
        t1(()=> {
            t2(()=> {
                t3(()=> {
                    t4()
                })
            })
        })
    ```
    - In the example above, we solved one problem but we encountered a new one, namely `callback hell`
        * This refers to the fact that the code can become hard to read and unmanageable when a lot of callbacks are used.
- The solution to this, is something that is called a `Promise`

## Promises

- A promise is like a guarantee that we will get some kind of answer in the end. We will not know for sure when but a response will come.
    - This response can be some data that we expect or an error in case things go wrong.
- Think for example when you are clicking on a certain video when you are on your favorite social network. The video will either start after a certain amount of time, or it will fail (hopefully with a friendly message)'
- Before seeing them at work, let s just speak a bit about a characteristic of the Promises, namely its states.
- A Promise can be in one of the following states:
    - Pending -> when it is waiting for a response. It is also the state in which is put automatically when you create the promise
        * a promise is usually in this state when it takes a bit more for the result to be computed
    - Fulfilled -> when it got a response and everything went ok. This is also called "resolved"
    - Rejected -> When something bad happened.

- Let's now play a bit with them in JavaScript
    ```JavaScript
        const promise = new Promise((resolve, reject) => {
            const isOk = true
            if (isOk) {
                resolve('Everythinhg is ok, mate!')
            } else {
                reject('Something bad happened :(')
            }
        })

        console.log(promise)
    ```
    - Play with the value of the `isOk` variable in order to get different results.
    - If you want to simulate the status of pending, add a setTimeout call, something like:
    ```JavaScript
        const promise = new Promise((resolve, reject) => {
            setTimeout(()=> {
            const isOk = true
            if (isOk) {
                resolve('Everythinhg is ok, mate!')
            } else {
                reject('Something bad happened :(')
            }
            }, 10000)
            
        })

        console.log(promise)
    ```

- Now that we know what are the states of a promise, let's see about the scenarios that we want to do on resolved and on rejected. For this, we will introduce the `then/catch` methods that are present on any Promise.
    - `then()` -> this is the function that is called when the promise succeded and as an argument it receives what has been passed when the `resolve` was called.
        - In the scenario above, the `then` function will receive the `Everythinhg is ok, mate!` message.
    - `catch()` -> this is similar to `then` only that it represents the `reject` call.
- Let's play a bit with them now:
    ```JavaScript
        const promise = new Promise((resolve, reject) => {
            const value = Math.floor(Math.random() * 10)
            if (value % 2 === 0) {
                resolve(value)
            } else {
                reject(value)
            }
        })

        promise
        .then(value => {
            console.log(`Success: We have received: ${value}`)
        })
        .catch(value => {
            console.log(`Error and we received: ${value}`)
        })
    ```
    - Note: usually on catch you will get an instance of an Error. We will see more when we will learn about the
### Chaining promises

- We can also connect multiple promises and use the `then` keyword multiple times, this is called `chaining promises`:
    ```JavaScript
        const promise1 = new Promise((resolve, reject) => {
            resolve('This is the first promise')
        })
        const promise2 = new Promise((resolve, reject) => {
            resolve('This is the second promise')
        })
        const promise3 = new Promise((resolve, reject) => {
            resolve('This is the third promise')
        })
        const promise4 = new Promise((resolve, reject) => {
            reject('This is the fourth promise')
        })

        promise1
        .then(value => {
            console.log(`Success: We have received: ${value}`)
            return promise2
        })
        .then(value => {
            console.log(`Success: We have received: ${value}`)
            return promise3
        })
         .then(value => {
            console.log(`Success: We have received: ${value}`)
            return promise4
        })
        .catch(value => {
            console.log(`Error and we received: ${value}`)
        })
    ```
### Common pitfall when using promises

- When starting to play with Promises you might be tempted to do the following:
    ```JavaScript
        const promise1 = new Promise((resolve, reject) => {
            resolve('This is the first promise')
        })
        const promise2 = new Promise((resolve, reject) => {
            resolve('This is the second promise')
        })
        const promise3 = new Promise((resolve, reject) => {
            resolve('This is the third promise')
        })
        const promise4 = new Promise((resolve, reject) => {
            reject('This is the fourth promise')
        })

        promise1
        .then(value => {
            console.log(value)
            promise2.then(value => {
                console.log(value)
                promise3.then(value => {
                    console.log(value)
                    promise4
                    .catch(err => {
                        console.log("Error is "+err)
                    })
                })
            })
        })
    ```
- Does this look familiar to you? Well.. this is the callback hell.. only that now we are using promises.

### Topic for self reading
    - Search over the internet about the `thenable` functions.

### Exercise 7.1
Create a simple promise that resolves with a message "Hello, World!" after 2 seconds. Log the message to the console when the promise resolves.

### Exercise 7.2
Create a promise that rejects with an error message "Something went wrong!". Handle the rejection and log the error message to the console.

### Exercise 7.3
Create a promise that resolves with a random number between 1 and 10. Create a function that receives a numbers as a parameter and then returns a function that resolves with the parameter multiplied by 2. Chain the first promise with the promise returned by the function.

### Promise.all()

- Let's speak about the scenario when we want to trigger multiple promises in the same time and use the results when all of them are resolved (or rejected)
- For this, we have the `Promise.all()` method which receives an array of promises as parameter and then it resolves when all of them resolve or it will fail, if any of the promises rejects.
    * Again, MDN is your friend (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

- Now let's see the following example:
    ```JavaScript
        const promise1 = new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve('First Promise')
            }, 1000)
        })

        const promise2 = new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve('First Promise')
            }, 5000)
        })

        const promise3 = new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve('Third Promise')
            }, 3000)
        })

        Promise.all([promise1, promise2, promise3])
        .then(values => {
            for(const value of values) {
                console.log(value)
            }
        })
    ```
    - The values parameter of the `then` will be an array with 3 values, each corresponding to the promises passed as an array:
        - the first value is from the first promise
        - the second value is from the second promise
        - the third value is from the third promise
        - etc.
    ```bash
        //expected output
        First Promise
        Second Promise
        Third Promise
    ```

### Exercise 7.4
Create three promises that resolve with different messages after different durations (for example 1.5, 2.3, and 3.3 seconds). Use Promise.all to wait for all promises to resolve and then create a string from all the answers, joined by a comma

### Promise.any()

- Another helper method that exists for promises is the `Promise.any()` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
- Unlike the `Promise.all`, the `Promise.any()` method, resolves when any of the promises received as input, resolves
- The syntax is simillar to the one for Promise.all() so let's see an example:
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

        Promise.any([p1,p2,p3]).then(value => {
            console.log(value)
        })
    ```
    - Now, because it had the shorter time to wait, the first promise is the first one to resolve, thus, in the `then` method, we now have only one value corresponding to the result received from the promise that resolved the first, namely: `Hello friend`
        - Note: having the shorter time to wait is not a guarantee that it will be the first one to be executed. There are other factors that are taken into account here.

- From MDN: `Promise.any()` fulfills with the first promise to fulfill, even if a promise rejects first. This is in contrast to `Promise.race()`, which fulfills or rejects with the first promise to settle.

- Before talking about `Promise.race()` let's understand the previous statement with an example:
    ```JavaScript
        const p1 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                reject('Hello friend')
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

        Promise.any([p1,p2,p3]).then(value => {
            console.log(value)
        })
    ```
    - Now, we will get the output from the second promise, even though the first promise rejected first, we ignored the result as we are only interested in the promise that succeeds first.

### Promise.race()

- Time now to speak about the before mentioned `Promise.race()` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) 
- Again, all the functions (`.all()`, `.any()`, `.race()`, `.allSettled()`) have a similar syntax when they are called, namely they receive a list of promises that will be started, and the difference is in their output.
- The `Promise.race()` will output a promise that will have the state of the first promise that settles (even if that one rejects)
- Now, to better understand this topic, let s see some example below:
    ```JavaScript
        const p1 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                reject('Hello friend')
            }, 100)
        })

        const p2 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve('Where are you from')
            }, 500)
        })

        const p3 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve('What do you want')
            }, 800)
        })

        Promise
        .race([p1,p2,p3])
        .then(value => {
            return value
        })
        .then(value => {
            console.log(`Value: ${value})`)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    ```
    - The output will be the one from the `p1` as it is the first one to fulfill, even if it is a rejection

- From MDN: The Promise.race() method is one of the promise concurrency methods. It's useful when you want the first async task to complete, but do not care about its eventual state (i.e. it can either succeed or fail).
- Now a good example for when you can use this, imagine that you are creating a certain API that allows the user to receive some data. And if you want to protect yourself (and your user) in case that the request takes longer than expected, you can use `Promise.race()` with two promises:
    - One that is responsible for gathering the data that will be sent to the user
    - One that is like a safeguard, so if for example in 30 seconds the first promise doesn't set a response, then the second promise will reject and you can tell the user that something happened, etc.
    ```JavaScript
        function someApiRequest() {
            return new Promise((resolve, reject) => {
                // someOperation()-> imagine this can take a lot of time, let s say more than 30seconds
                resolve()
            });
        }

        function safeguard() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(new Error("Request timed out"));
        
                }, 30000);
            });
        }

        Promise.race([someApiRequest(), safeguard()])
            .then(response => {
                console.log(response); // if the api provides a response in less than 30 seconds, then all good, we return the result to the user
            })
            .catch(error => {
                console.error(error.message); // Otherwise we throw an error
            });

    ```


### Promise.allSettled()

- The last concurrency method we will talk about is the `Promise.allSettled()`
- More about it, again, can be found on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled 
- This method fulfills when all the promises settle (even if they reject or succeed) and the result will be an array which will contain the status for each of the promises received as an input
- Let's conclude these part with an example to emphasize the use of `Promise.allSettled()`
    ```JavaScript
        const p1 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                reject('Reject from p1')
            }, 100)
        })

        const p2 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve('Resolve from p2')
            }, 500)
        })

        const p3 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve('Resolve from p3')
            }, 800)
        })

        Promise
        .allSettled([p1,p2,p3])
        .then(values => {
            console.log(values)
        })
    ```
    - The output for the previous snippet will be:
    ```bash
        [
            { status: 'rejected', reason: 'Reject from p1' },
            { status: 'fulfilled', value: 'Resolve from p2' },
            { status: 'fulfilled', value: 'Resolve from p3' }
            ]
    ```
- One use case scenario for `Promise.allSettled()` is for situations when you need all of your promises to have a response, disregarding if they succeed or reject.
    - For example let s say you are creating a dashboard for monitoring various services and you want to know if they are healthy or not so you are interested in the output from all of them.


### Async/Await

- The async/await is just a syntactic sugar for working with promises
- It replaces the need for using the `.then()` method when `waiting` for a response
- Basically, you place an `await` in front of a promise, to say to you are waiting for the promise to return an answer and will continue as soon as the promise succeeds.
- The async is used to mark a function that returns a Promise.
- In order to better understand the utility of the `async/await` let's see some basic operations witht `promises` using first the `.then` method and then replacing it with `async/await`
    ```JavaScript
        const promise1 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                const randomNumber = Math.floor(Math.random()*10+10)
                resolve(randomNumber)
            },1500)
        })
        const promise2 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                const randomNumber = Math.floor(Math.random()*10)
                resolve(randomNumber)
            },1500)
        })

        let total = 0;
        promise1.then(value => {
            total += value
            return promise2
        })
        .then(value => {
            total += value
        })
    ```
    - Now, in order to make use of `async/await` we need to also create a function:
    ```JavaScript
        const promise1 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                const randomNumber = Math.floor(Math.random()*10+10)
                resolve(randomNumber)
            },1500)
        })
        const promise2 = new Promise((resolve, reject) => {
            setTimeout(()=> {
                const randomNumber = Math.floor(Math.random()*10)
                resolve(randomNumber)
            },1500)
        })


        async function run(){
            const firstNumber = await promise1
            const secondNumber = await promise2
            console.log(`Total is: ${firstNumber + secondNumber}`)
        }

        run()
    ```
    - Just look how simple to understand is the code now that we are using `async/await`