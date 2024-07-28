1. If without braces exercise
    ```javascript
        const n = 4
        if(n > 5)
            console.log('n is bigger than 5, mate!')
            console.log('yep, n is bigger, not even equal')
    ```
    - Even though we might get confused by the indent of the second console.log, it doesn't belong to the `if`, as, when there are no braces, only the first line after the `if` belongs to it.
    - Thus, the output will be:
    ```json
        yep, n is bigger, not even equal
    ```
2. `If else-if without braces`
    ```javascript
            const temp = 28
            if(temp < 10)
                console.log('it is a bit cold outside')
                console.log('grab some clothes, mate')
            else 
                console.log('it is just ok for running')
    ```
    - Here the output will be: 
   `Uncaught SyntaxError: Unexpected token 'else'`
    - We said the when there are no braces, only the next line after the `if` belongs to it. In our case, the second `console.log` was outside the `if` statement and then we had an `else` statement which was disconnected from the `if` thus the error that we got

3. Falling through switch cases when there is no break
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
    - The output here will be:
    ```json
        It is Tuesday 
        Is it also Wednesday??
        I am actually a bit confused right now?
    ```
    - And that is because, our variable matched the second case and then, because there were no `break` statements, it went through all of them until it either reaches some `break` statement or the end of the instruction

- Open question example:
    - When you want to group multiple values to be matched like below:
        ```javascript
            const day = 'Wednesday'
            switch (day) {
                case 'Monday':
                case 'Tuesday':
                case 'Wednesday':
                case 'Thursday':
                case 'Friday':
                    console.log('You have to work today....')
                    break
                case 'Saturday':
                case 'Sunday':
                    console.log('Relax mate, it is weekend!!!')
                    break
                default:
                    console.log('You typed a wrong day, amigo...')
            }
        ```