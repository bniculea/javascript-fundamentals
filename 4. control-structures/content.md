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

- The last type of condition we will talk (and it is quite popular if you are into `React`) is the `ternary` operator

#### Open question:
    - Can you imagine a situation when this kind of fall through is necessary, or at least helpful?

//TODO: talk about enumerating object's keys and values, entries, etc