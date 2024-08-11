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
- Remember that whenever you have a piece of logic that is reused or can be reused, it has to be extracted in a function.

## Invocation

- We have defined our function but so far, it doesn't do anything.
- In order to properly make use of it, we have to `call` it.
- A function is called by using its name followed by the `()` (and parameters if any, see later)
- Thus, in our case, the previous defined function can be called (or invoked) like:
    ```JavaScript
        display()
    ```

## Function Expression

- Because functions are first class citizens in JavaScript we can also save a function in a variable:
    ```JavaScript
        const myFunctionReference = function(){
            console.log('This is a function expression')
        }

        myFunctionReference()
    ```
- As you noticed, when we invoke the function, we use the name of the `const` variable as there is no name written after the `function` keyword

## Parameters and arguments

- Of course having these kind of functions might be boring.. thus we need to make them more useful,that's why we have parameters.
- Think of parameters like the ingredients for making a cookie and the body of the function being like the recipe that makes use of these parameters
- For example, let's define a function that receives 2 parameters and displays their sum:
    ```JavaScript
        function sum(x, y) {
            console.log(x + y);
        }

        sum(4,6);
    ```
    - After we execute the function above, `10` will be displayed in the console.
- The `4` and `6` are called arguments and you might get a bit confused between which are the parameters and which are the arguments but don't worry, there will be literally no problem if you mix them up.
    - But, just so you know, arguments are the actual parameters, or, the values that you will pass when the function is called, so put it even simple:
        - Parameters -> the input variables used when you define the function
        - Arguments -> the values that you will pass when you will invoke the function

## Return statement

- Not all function will display some message. Most of the time we will need our functions to return some value that might be the result of some (maybe heavy) computation
- In order to do this, we use the `return` keyword followed by the value that we want to return:
    ```JavaScript
        function sum(x, y) {
            return x+y;
        }

        const result = sum(4,5);
        console.log(result)
    ```
    - Note: you can also use the `return` keyword without any values, this will mean that you simply want to exit the function. Because JavaScript is not a strong typed language, no error will be thrown  if someone is waiting for a value. And whoever waited for a concrete value and we used just the `return` keyword, the value received will be... the magnificent: `undefined`
    - Note: In JavaScript, all functions that do not return something, will return `undefined` by default.

Note: Before moving to exercises, keep in mind that functions can receive anything as parameters. Even other functions as we will see later.
## Exercises
- Now let's do a couple of exercises with what we learned so far:

1. Define a function named `hi`. The function should display `Hello, everyone` when invoked.
2. Define a function named `getRandomNumber`. The function should return a random number when invoked.
    - Remember that we used the `Math.floor(Math.random() * 10)` expression before.
3. Define a function named `getSpecificRandomNumber`. The function should receive one parameter and it should return a random number from `0` and up to the value received as a parameter, including this one.
4. Define a function in an expression. The function will receive three parameters as input and it should return the following concatenated message: `Hi! My name is <first_param>. I have <second_param> years and I live in <third>, a city in Romania.`

5. Define a function that receives an array as parameter. The array will contain only numerical values, thus there is no need for any validation. The function will return a new array which will contain only the odd values from the array received as parameter.

6. Define a function that receives two objects as parameters. The function will return `true` if the objects have at least one property in common, with the same value, `false` otherwise.
    Note: to not complicate the function, the objects received will not have other objects as values for their properties.

7. Define a function that receives a string containing a phrase where the words are separated by a space. The function will make each word start with a capital letter and it will eliminate the spaces between words if there is more than one space.

## Default parameters

- In JavaScript you can define functions that take parameters for which you can define the default value
- This value will be used if no other value is passed when it is invoked:
    ```JavaScript
        function getBookingPrice(nights, includeBreakfast = false) {
            const totalCost = nights * 100 + (includeBreakfast ? 17 * nights: 0);
            return totalCost
        }
        console.log(getBookingPrice(7) // total cost will be 700
        console.log(getBookingPrice(7, true))// total cost will be 819
    ```

- What to remember about functions and parameters, default parameters, and so on:
    - Because JavaScript is not a strong typed language, you can omit passing the parameters, and if you do so, by default they will have a value of `undefined`
    - You can pass the same value as you use as default for a certain parameters and it will be take into account
- As benefits for using these default parameters we have the following:
    - Our functions can handle scenarios where not all arguments are provided, without causing errors
    - The complexity of the code is reduced because we avoid writing additional logic to check if parameters are `undefined`

## Rest parameters and spread operator

- JavaScript allows us to pass an indefinite number of arguments which are captured into a single array.
- This is usefull when we do not know in advance how many arguments a function will receive
- Regarding the syntax, the `rest` parameters are represented by three dots `...` followed by the name of the array that will hold the arguments:
    ```JavaScript
        function fun(...args) {
            console.log(args)
        }
        fun() // []
        fun(1) // [1]
        fun(1,2) //[1,2]
        fun(1,2,3) // [1,2,3]
        fun('weird', 'function', 'call', 2) // ['weird', 'function', 'call', 2]
    ```
- Let's see an example for summing all the numbers received as parameters by a function:
    ```JavaScript
        function sum(...numbers) {
            return numbers.reduce((total, num) => total + num, 0)
        }
        console.log(sum(4, 3, 7));        // 14
        console.log(sum(4, 3, 7, 9));  // 23
    ```

- Another utility of rest parameters is, for example when you need to differentiate between mandatory and optional parameters like in the example below:
    ```JavaScript
        function introduce(name, age, ...hobbies) {
            console.log(`Hi! My name is ${name}, and I am ${age} years old.`);
            if (hobbies.length > 0) {
                console.log(`I enjoy doing : ${hobbies.join(', and ')}`);
            } else {
                console.log("I don't quite have any hobbies");
            }
        }

        introduce('Bogdan', 25);
        introduce('Andrei',28, 'reading', 'jumping', 'playing video games')
    ```

### Spread operator

- JavaScript also has an operator which is kinda the reverse of the rest one, (they have the same syntax), meaning that it allows us to spread out the elements of something that is iterable (array, object, anything iterable) into individual elements.
- It is a very common operator in JavaScript and you will see it a lot when:
    - copying arrays into other arrays
    - combining arrays
    - combining objects
    - copying objects
    - etc.

- Now let s see below an example of how we might use it for the scenarios listed above:
    ```JavaScript
        // copying one array into another
        const numbers1 = [6,7,8,9];
        const numbers2 =[1,2,3,4,5, ...numbers1] // numbers2 = [1,2,3,4,5,6,7,8,9]
    ```
    ```JavaScript
        // combining two arrays
        const numbers1 = [6,7,8,9];
        const numbers2 =[1,2,3,4,5]
        const combinedArray = [...numbers2, ...numbers1]
    ```
    ```JavaScript
        // copying one object into another
        const car1 = {
            brand: 'Volkswagen',
            model: 'Golf IV',
            cc: 1998,
            color: 'blue'
        }

        const car2 = {
            brand: 'Volkswagen',
            model: 'Jetta',
            ...car1
        }

        console.log(car2)
    ```
    ```JavaScript
        //combining two objects
        const carParts = {
            brand: 'Volkswagen',
            model: 'Golf IV',
            cc: 1998,
            color: 'blue'
        }

        const remainingParts = {
            doors: 5,
            kw: 123,
        }

        const completeCar = {
            ...carParts,
            ...remainingParts
        }

        console.log(car2)
    ```


### Spread operator exercises

8.  Given two arrays of user objects, where each user object contains information about a person such as their `cnp`, `name`, `email`, create a JavaScript function  that will merge the two arrays into a single array of unique users. If a user with the same `cnp` appears in both arrays, the user from the second array should overwrite the user from the first array. Additionally, you need to add a new property `status` to each user from the first array, which should be set to `active`



## Arrow functions

- As you might have seen a lot on the internet, JavaScript also allows us to define function in a more concise way, using something that is called an arrow function.
- Even though they are not a 1:1 replacement for traditional functions, they allow us to write code which is a bit easier to read.
- Now let's see how simple you can combine a normal function to an arrow function

    ```JavaScript
        const sum = function(x,y) {
            return x+y;
        }

        const sumArrow = (x, y) => {
            return x+y;
        }

        //you can even do this if you have like a one-line code that only returns a value
        const sumArrowPretty = (x,y) => x+y;
    ```
    - When we are calling them, we'll do it as we do for the normal ones, we just use the name followed by the paranthesis (and params if any)

- Another nice thing is that if your function only has like one parameter, you can skip the paranthesis altogether
    ```JavaScript
        const doubleTheValue  = value => value * 2; // again, remember that this is an implicit return
    ```

- Arrow functions are used most often as callbacks. And you will use them a lot with the methods like `.map`, `.find`, `.filter`, etc

- But, as we said, they are not a 1:1 replacement to an usual function, thus they have some drawbacks:

    1. Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding scope at the time they are defined. This is one of the most significant differences from traditional functions. Don't worry, we will learn more about `this` very soon. If you're familiar with other programming languages, it will be quite easy to understand it but stay tuned
    2. Arrow functions do not have their own arguments object. If you need access to the arguments, you'll need to use a traditional function or rest parameters.
        * Normal functions allow you to access the parameters that will be passed to the function, they can be accessed under the `arguments` param. See MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments  
    3. Arrow functions cannot be used as constructors. Attempting to use them with the new keyword will result in an error.
        * if you recall, when we talked about objects, we specified that you can use a function as a constructor, if not, feel free to rewatch or even better, search on MDN

    
## Anonymous functions + IIFEs

- These are functions that do not have any name and they have a couple of faces (some of them might look familiar, some of them will see right now)
    ```JavaScript
        setTimeout(function() {
            console.log('It will take a whole second to see me');
        }, 1000);

        const add = function(x, y) {
            return x+y
        }
        // arrow functions are also anonymous functions
        const multiply = (x, y) => x * y
    ```

- The one sintax which is new so far (and maybe weird) is the `Immediately Invoked Function Expression` or `IIFE` which does exactly what its name says: it declares and also invoke a function at the same time:
    ```JavaScript
        (function() {
            console.log('This runs immediately');
        })();
    ```

- There are a couple of benefits for using IIFE and they are greatly explained on MDN: https://developer.mozilla.org/en-US/docs/Glossary/IIFE


## Higher Order Functions

- In JavaScript, a Higher Order function is a function which does at least one of the following things:
    - Accepts one or more functions as a parameter
    - Returns a function as its result
    Note: You will use a lot of Higher Order functions when you will be playing with frameworks like React (e.g useEffect hook) and also when you will be playing with middlewares on the backend side

- As a common example of a higher order function is the `.map` function available on arrays for example as it receives a function which will be called on each of the element from the array.

- Other examples include:
    - `filter`
    - `reduce`
    - `some`
    - `every`

- Now let's create a custom higher order function that returns a function that multiples a number by a given multiplier
    ```JavaScript
        function createMultiplier(multiplier) {
            return function(number) {
                return number * multiplier
            }
        }

        const double = createMultiplier(2)
        console.log(double(10))

        const quadruple = createMultiplier(4)
        console.log(quadruple(10))
    ```