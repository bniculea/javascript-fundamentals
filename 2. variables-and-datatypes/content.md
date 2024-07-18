# Variables and data types

## Topics discussed

- Variables
    - var
    - let 
    - const
    - hoisting

## Variables

- Variables in JavaScript, like in any other programming language are just a way to store values that we can easily reference them afterwards, by giving them a meaningfull name.

- As soon as a variable got its name, we can then manipulate it as we wish

- In JavScript there are three ways to declare variables:
    1. `var`
    2. `let`
    3. `const`
- Before getting to understand each of them, we can see that unlike other programming languages (e.g Java, C#< C, C++, etc.>), variables do not have types

- Now let s dig deeper in each of them:

1.  `var`
    - you can think of `var` like a global variable
        - `var` is also function-scoped but we will talk more about it when we get to the  functions topic
    ```javscript
        var x = 1
        console.log (x)
    ```
    - even though modern javascript developers do not currently use `var` (not directly) so much, we should talk a bit about hoisting 
        ```text
            hoisting simply means that variables and function declarations are moved to the top of their containing scope during the compilation phase.
            The implication of this is that you can use variables and functions before you declare them
        ``` 
    - Now let's see the following example:
        ```javascript
            console.log(age);
            var age = 31;
            console.log(age);
        ```
        - the output of the previous script will be:
        ```javascript
            undefined
            31
        ```
        - but if we just run `console.log(age)`, the error will be different:
        ```javascript
            console.log(age);
                        ^
            ReferenceError: age is not defined
        ```
        - The explanation here is that with hoisting, the declaration of the variables (and functions) are moved to the top but the assignment remains in place.  That's why in the first scenario, it knew who `age` was, though it didn't knew its value, because that was assigned in the next lines, but in the second scenario, it said that it didn't knew who `age` was.
    - Getting back to `var` type, another characteristic (or limitation) is that you can always change its value, this means that if you will need a variable that should not change its value ever, you have to use another type (`const`)

## Data types
