# Asynchronous programming

## Topics discussed

- Synchronous programming
- Asynchronous programming
- Callbacks
    - Callback hell
- Promises
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
        setTimeout(()=> console.log('I am the third statement'), 1740)
    ```
    - The output of the previous snippet cannot be deduced..and it can differ from run to run, because it is not ran in the order we want. The second parameter of the `setTimeout` function it tells that it should run only after that specific amount of time has passed (in milliseconds) but it is not a guarantee that it will run exactly after that specific amount of time. (we will learn more about this when we will get to the event loop)


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
    - Pending -> when it is waiting for a response
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