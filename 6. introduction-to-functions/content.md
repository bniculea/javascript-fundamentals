# Introduction to functions

## Topics discussed

- Definition
- Invocation
- Function Expression
- Parameters and arguments
- Return statement
- Default parameters
- Rest parameters and spread operator
- Arrow functions
- Anonymous functions
- Higher-Order functions
- IIFEs

## Definition

- Understanding functions are crucial if you want to become a proficient JavaScript developer and that is because in JavaScript, functions are first class citizenz because:
    - they can be assigned to variables
    - can be passed as parameters to other functions
    - functions can return a function
    - etc.
- The simplest function you can write, will look something like this:
    ```JavaScript
        function display(){
            console.log('Hello world')
        }
    ```
    * Note: there are multiple ways to define a function, but we will see them as we advance in this topic.
    * If we declare functions as above, we have to use the keyword `function` followed by the name we want to give to that function
    * Remember that your functions need to obey the Single Responsibility Principle, which states that your function need to have only one reason to change. Also, try to keep it as short as possible, the fewer the lines, the less complicated logic will be inside it.
    * Note: use meaningfull names for functions when you declare them and keep in mind this rule of thumb:
        - The bigger the scope of the function, the shorter its name should be
        - The smaller the scope of the function, the longer its name should be
            * This is in contrast to naming variables.