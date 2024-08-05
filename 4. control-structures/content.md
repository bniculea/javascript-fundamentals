# Control flows

## Topics discussed

- Conditionals
    - `if`
    - `else if`
    - `switch case`
    - `ternary`
- Loops
    - `for`
    - `while`
    - `do while`


## Conditionals
- In very short words, conditionals are just a way of executing some instructions if a certain condition is true.
- If you are familiar with other programming languages, especially C-based ones, you will see a lot of conditional instructions are common:
    * `if / else if / else` statements
        ```javascript
            if(condition) {
                // instructions to be executed if and only if the condition is true
            }

            //e.g
            if (teenager.age >= 18) {
                console.log('he/she can register for getting his/her driving license')
            }
        ```
    - There are also situations when you want to do certain things if condition is true and other things if condition evaluates to `false`:
        ```javascript
            if (temperature > 25) {
                console.log('will go out in a shirt')
            } else {
                console.log('I will get a thicker blouse')
            }
        ```
    - Other scenarios will include cases when you want to do multiple things when different conditions evaluate to true
        ```javascript
            if (engine.cc <=  400) {
                console.log('tax is 100')
            } else if (engine.cc > 400 && engine.cc <=800) {
                console.log('tax is 200')
            } else if (engine.cc > 800 && engine.cc <= 1200) {
                console.log('tax is 300')
            } else {
                console.log('it will cost a lot')
            }
        ```
        - Note:
            - `else if instructions always follow an `if` instruction
                - you cannot have an `else if` without a prior `if`
                - the `else` clause is not mandatory but if you have it, it has to be the last block
                    - this means that you cannot have this kind of instructions:
                        ```javascript
                            if (condition) {
                                //some instructions
                            } else {
                                //some other instructions
                            } else if (otherCondition) { // error
                                //error!!! this is not possible
                            }
                        ```
                        - Also the `else` instruction needs to follow a prior `if`
    - Now even though the braces are optional, it is strongly recommended to use them even for one liners.
    - Now, just to prove some facts, let's see the following snippets and try to figure it out what will be the output:
#### Exercise 4.1. What will be the output of the following snippet:
```javascript
    const n = 4
    if(n > 5)
        console.log('n is bigger than 5, mate!')
        console.log('yep, n is bigger, not even equal')
```
#### Exercise 4.2 What will be the output of the following snippet:
```javascript
    const temp = 28
    if(temp < 10)
        console.log('it is a bit cold outside')
        console.log('grab some clothes, mate')
    else 
        console.log('it is just ok for running')
```

   * `switch-case`
        - Now, let's talk about the situations when we want to check against a set of fixed values, like for example days of the week, or even month names. We can try and do something like:
        
        ```javascript
            const day = ''// imagine here we put some day like Friday
            if (day === 'Monday') {
                console.log('the week just started')
            } else if (day === 'Tuesday') {
                console.log('We are getting used to it)
            }
            ...
            else {
                console.log('It is sunday, let s chill)
            }
        ```
        * Now let's rewrite this with a `switch-case`:

        ```javascript
            const day = 'Tuesday'
            switch(day) {
                case 'Monday':
                    console.log('The week just started');
                    break
                case 'Tuesday':
                    console.log('We are getting used to it')
                    break
                case 'Wednesday':
                    console.log('Almost there...')
                    break
                default:
                    console.log('What has been tough, has passed')
                    
            }
        ```
    - Remember, the `break` keyword is used to prevent falling through the cases that matched. Let s see the next exercise to practice it:

#### 4.3 What will be the output of the following snippet:
```javascript
        const day = 'Tuesday'
        switch (day) {
            case 'Monday':
                console.log('It is monday')
            case 'Tuesday':
                console.log('It is Tuesday ')
            case 'Wednesday':
                console.log('Is it also Wednesday??')
            default:
                console.log('I am actually a bit confused right now?')
        }
 ```

#### Open question:
    - Can you imagine a situation when this kind of fall through is necessary, or at least helpful?


- The last type of condition we will talk (and it is quite popular if you are into `React`) is the `ternary` operator
- The ternary operator can be seens as a syntactic sugar for the `if else` statement and it looks like:
    `condition ? doWhenTrue : doWhenFalse`
- For example:
    ```javascript
        let color = '#4444'
        const isDarkMode = true
        color = isDarkMode ? '#5555' : '#6656'
    ```

## Loops

### The classic `for` loop

- If you have background in other programming languages, the basic `for` might look familiar to you:
    ```javascript
        for (let i = 0; i <= 10; i++) {
            console.log(i);
        }
    ```
    - What is worth to know here is the fact that this `for` has three important parts:
        * `let i = 0` -> this is the assignment part and it takes place only once, at the beginning of the loop
        * `i <= 10` -> this is the verification part, if it evaluates to true, it will execute whatever is in its body and it takes place at each iteration
        * `i++` -> this is the incrementation part and it takes place at each iteration but after you execute the body of the `for`
- Its most common usage is when iterating over a list of values and doing something with them.
    - It works great with the `index operator -> []`

### The `for.. of`

- This is a more special construct but in the end it does have the same scope, namely looping through the elements of a certain data structure:
    ```javascript
        const students = ["Johnny", "Dua Lipa", "Tayler Switfinho"]
        for (const student of students) {
            console.log(student)
        }
    ```
    - The important part here is the fact that you don' need to perform the initialization, condition and increment/decrement
    - Also, if you do need the index of the element, this `for` is not suitable
    - The best part is that it works by default with any iterable data structure
        * In JavaScript, these are the most common iterable data structures: 
            - Array
                ```javascript
                    const numbers = [1,2,3]
                    for(const number of numbers) {
                        console.log(number)
                    }
                ```
            - String
                ```javascript
                    const str = "albacazapada"
                    for(const char of str) {
                        console.log(str)
                    }
                ```
            - Set
                ```javascript
                    const numbersSet = new Set([1,2,3,1,2])
                    for(const number of numbersSet) {
                        console.log(number)
                    }
                ```
            - Map
                ```javascript
                    const map = new Map([
                        ['key1', 1],
                        ['key2', 2],
                        ['key3', 3]
                    ])
                    for(const [key, value] of map) {
                        console.log(key, value)
                    }
                ```

### The `for in`

- This loop is used most commonly to iterate over the keys of an object:
    ```javascript
        const car = {
            brand: 'Skoda',
            model: 'Octavia',
            year: 2024,
            cc: 1498
        }
        for(const key in car) {
            console.log(key)
        }
    ```
    * Note: this for will iterate through all the enumerable keys, including those inherited through the prototype chain:
    ```javascript
        const car = {
            color: 'graphite grey',
            doors: 5
        }

        const octavia = {
            brand: 'Skoda',
            model: 'Octavia',
            year: 2024,
            cc: 1498
        }

        octavia.__proto__ = car
        for(const key in car) {
            console.log(key)
        }

        //now if you want to iterate only through the octavia's properties, use the hasOwnProperty / hasOwn method:
        for(const key in octavia) {
            if(octavia.hasOwnProperty(key)) {
                console.log(key)
            }
        }

        for(const key in car) {
            if(Object.hasOwn(octavia,key)) {
                console.log(key)
            }
        }
    ```
### Bonus: iterating through an object keys and values

- There are also a couple of helper methods that allow you to iterate through the keys and values of on object
    ```javascript
        const octavia = {
            brand: 'Skoda',
            model: 'Octavia',
            year: 2024,
            cc: 1498
        }
        console.log(Object.keys(octavia))// will return an array containing only the keys ['brand', 'model', 'year', 'cc']
        console.log(Object.values(octavia)) // will return an array containing only the values ['Skoda', 'Octavia', 2024, 1498]
    ```

### `while loop`

- While the `for` loop is useful when you want to iterate over a finite set of values, there are cases when you don't know in advance how many items will be there to iterate, thus, we have the `while` loop
- The idea of it is that `while` condition is true, execute the body of it
    - NOTE in order to avoid getting into an infinit loop, each time the while's body execute, the closer should get to invalidate the condition:

    ```javascript
        let i = 0
        while (i <= 10) {
            console.log(i)
            i++
        }
    ```

- There is also a version of while, which first let's you evaluate the body and then the condition will execute:
    ```javascript
        let i = 0;
        do {
            console.log(i)
            i++
        } while (i <= 10)
    ```
    - This is useful when you need at least one execution of the body before continuing (e.g aws http calls)