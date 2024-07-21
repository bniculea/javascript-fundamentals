# Variables and data types

## Topics discussed

- Variables
    - var
    - let 
    - const
    - hoisting

- Data types
    - Numbers
    - Strings
    - Booleans
    - undefined/null
    - Objects

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
    - Getting back to `var` type, another characteristic (or limitation) is that you can always change its value, this means that if you will need a variable that should not change its value ever, you have to use another type (`const`), which we'll talk about in a moment

2. `let`
    - With let we define variables that are block scoped, this meaning the closest `{}` where it is defined.
    - You can optionally initialize it when you declare it.
    - Unlike `var`, you cannot access `let` variables before they are initialized.
    - For example, the snippet below will throw:
        ```javascript
            console.log(length);
            let length = 10;
        ```
        ```javascript
            console.log(length);
            ^
            ReferenceError: Cannot access 'length' before initialization
        ```
    

    ### Exercise 2.1:
        * What do you think will be the output of the following snippet:
            ```javascript
                let pet = 'dog'
                if (pet === 'dog') {
                    let pet = 'cat'
                    console.log(pet)
                }
                console.log(pet)
            ```

3. `const`
    - Now, what if we need to declare a variable with some value, and we do not want its value to change across the entire execution of our program?
        - For example, if we declare a variable like this:
            ```javascript
                let PI = 3.14159
            ```
            - the problem is that later maybe us, or someone else by mistake changes its value...thing which can mess up our program
    - For this, we have the `const` variable type which is pretty similar to the `let` variable type with this single difference: `it will not allow you or anyone else to change its value`.
    - For example, if we run the following code: 
        ```javascript
        ```
    - It will complain with the following message:
        ```javascript
            pi = 2;
                ^
            TypeError: Assignment to constant variable.
        ```
    ### Exercise 2.2:
        * What do you think will be the output of this snippet?
        ```javascript
            const myConst = 2.56;
            if (myConst === 2.56) {
                const myConst = 3.99;
                console.log(myConst);
            }
        ```
    
    
 - NOTE: always remember not to do this! Strive to use meaningfull names for variables
        - A short rule of thumb:
            - The larger the scope of a variable, the larger its name can be; the smaller the scope of a variable, the shorter its name can be.
        * We will see that when we will name functions, this will be quite the opposite

    ```javascript
        for(let n in numbers) {
            console.log(n)
        }
        //
        for (let u of users) {
            const annualSavingsRate = ((u.income - u.expenses) / u.income) * 100;
            const averageCreditScore = u.creditHistory.reduce((sum, score) => sum + score, 0) / u.creditHistory.length;

            const debtToIncomeRatio = (u.existingDebts / u.income) * 100;

            // 4. Calculate credit score based on income and savings
            const baseCreditScore = 721;
            const incomeFactor = u.income / 1000;
            const savingsFactor = u.savings / 1000;
            const calculatedCreditScore = Math.min(baseCreditScore + incomeFactor + savingsFactor, 850);

            const isEligibleForLoan = calculatedCreditScore >= 700 && u.existingDebts < 10000;

            const needsFinancialAdvice = u.savings < 0.5 * u.expenses || u.existingDebts > 0.3 * u.income;

            const financialSummary = {
                annualSavingsRate: annualSavingsRate.toFixed(2) + '%',
                averageCreditScore: averageCreditScore.toFixed(2),
                debtToIncomeRatio: debtToIncomeRatio.toFixed(2) + '%',
                calculatedCreditScore: calculatedCreditScore.toFixed(2),
                loanEligibility: isEligibleForLoan ? 'Eligible' : 'Not Eligible',
                needsFinancialAdvice: needsFinancialAdvice ? 'Yes' : 'No'
            };

            // 8. Print the results
            console.log('Financial Summary:', financialSummary);
        }
    ```
## Data types

- In Javascript, we have the following data types:
    * Numbers (e.g 1, 4.56, 34, etc.)
    * Strings ("Blue", "Car", "Popescu")
    * Booleans (true, false)
    * undefined
    * null
    * objects

### Numbers
- Unlike other programming languages, in JavaScript there are no different types for floating point numbers and integer numbers. Both of them can be represented by using `Number`
- When you declare a variable, you can find its type using the `typeof` operator like below:
    ```javascript
        const age = 32;
        console.log(typeof age)
        // it will display 'number'
    ```
- There are some special number values like:
    - `NaN (Not-a-Number)`
        - This type is used to represent ilegal math operations like:
            ```javascript
                let result = 'utv' - 21;
            ```
        - JavaScript allows you to check if something is a `NaN` or not using the:
            ```javascript
                Number.isNaN(NaN);//true
                Number.isNaN(21);//false
            ```
    - `Infinity`/ `-Infinity`
        - These types are used to represent scenarios like:
            - Division by zero (when you divide a positive number by 0, you get `Infinity`, if it is a negative, it is `-Infinity`)
            - Overflows (getting past the limit of `Number.MAX_VALUE`)  

### Strings

- Strings are very popular and there a lot of ways to represent and work with them
- As examples of String data type we can have:
    ```javascript
        'hello world',
        "hello world again"
    ```
    - you can see that unlike in other languages, a there is no difference between a string with `''` and one with `""` 
        - Some languages will treat `''` as simple chars and `""` as strings (e.g C/C++)
- We also have string interpolation, where you can interpolate variables when building a string
    ```javascript
        let applesCount = 10;
        let str = `Ana has ${applesCount} apples`
        console.log(str)
    ```
    - Note that when you want to interpolate, you have to:
        - Surround the entire string with ``
        - Surround the interpolated variable with `${}`
- We can create strings by concatenating them using the `+` operator
    ```javascript
        let str1 = 'I have 10 apples'
        let str2 = 'yet they are just fruits'
        let str3 = str1 + str2
        console.log(str3)
    ```
- Because string is an object (more on this later), we also have some built in methods to manipulate it:
    - Note: always go to MDN when you want to learn more about a certain type or method
    - Popular methods:
        - `replace`
            ```javascript
                const text = 'Lamborghini is a pretty neat car'
                const replacedString = text.replace("Lamborghini", "Dacia 1310")
                console.log(replacedString)
            ```
        - `substring`
            ```javascript
                const text = 'I have the Return of the King book by J.R.R Tolkien'
                const substring = text.substring(6);
                console.log(substring)
            ```
    - Some important stuff to notice:
        - We access the methods by using the `dot notation`: `<variable>.<method>/<property>`
            - We will use this exhaustively, as it is very common
    ### Exercise 2.3:

    - What will be the output of the following snippet
        ```javascript
            const str = 'I like feature phones more than the incomplete apples'
            str.replace("feature", "android")
            console.log(str)
        ```
- Note:
    -  Most of the string methods are immutable, meaning that they will not modify the initial string.

- Other important facts about Strings
    - Because JavaScript was also inspired from C/C++, we do share some similarities when it comes to accesing a certain character in a string
        - For example, if we want to access the second character in a given string we do it as:
        ```javascript
            const text = 'Two Tea To Two Two'
            console.log(text[1])
        ```
        - But we can also do it with some method like:
        ```javascript
            const text = 'Two Tea To Two Two'
            console.log(text.charAt(1))
        ```

    ### Exercise 2.4
    - What will be the output of the following snippet:
        ```javascript
            const text = 'Hello'
            console.log(typeof text.charAt(1))
        ```
    ### Exercise 2.5
    - Given a variable of type string, how can we retrieve its length?

### Booleans
- This is the simplest type, as it can only have two values:
    - `true`
    - `false`
- Usually, these types are used in conditionals and loops.
- We will learn more about them when we will get to the logical operators 


### Undefined and null

- `undefined` might be the most popular word you will see when your javascript program is failing
    - That is because `undefined` means that a variable has been declared but not initialized, so you can see it as a default value
    - When you access a property that does not exist, it will also give you `undefined`
    - Also functions that do not return an explicit value, will return `undefined`

- `null` is a bit similar with the `undefined`, as there is still no value there, but it has been explicitly set by the programmer. 
- As a short reminder:
    - `undefined` used by the JavaScript to say that something has not been initialized
    - `null` used by the developers to say that something has not been initialized.


### Objects

- In JavaScript, an object is simply a collection of key-value pairs
- Is important to know that the keys are always strings but the values can be any other type, including other objects
- A small example of a variable that points to an object that represents a student:
    ```javascript
        let student = {
            name: 'Andrei',
            age: 21, 
            overallExamScore: 87
        }
    ```
- You can also create objects using the `new` operator like:
    ```javascript
        const object = new Object()
        object.prop1 = 21;
        object.prop2 = 'someValue'
    ```
- Note: `typeof someObject = 'object'`

    ### Exercises 2.6
    - Considering the initial definition of thed pet `object`, which of the statements are legal and which are not and why:
        ```javascript
            const pet = {
                type: 'dog',
                breed: 'Malinois',
                age: 3 
            }

            // Statement #1
            pet = {
                type: 'cat',
                age: 2
            }

            // Statement #2
            pet.age = 1.4

            // Statement #3
            pet.type = 4.5
        ```

- Now, if we recall we spoke a bit about the 'dot notation' when we accessed the methods on the string variables (behind the scene, every string variable is an object), the same thing also applies when we access the properties of an object.
- Let's say we have the following object:
    ```javascript
        const octavia = {
            make: 'skoda',
            model: 'octavia',
            year: 2024,
            cc: 1500
        }
    ```
- If  we want to access the year property we can do it as:
    ```javascript
        octavia.year
    ```
- There is also another way to access a property, using the index operator or the bracket operator (if you know it as this) namely:
    ```javascript
        octavia['year']
    ```
    - The usefulness of this way of accessing a property is for cases when you eiter do not know the key in advance, or you have keys with spaces in name (they look uglu though)
        ```javascript
            const obj = {
                'some weird key': 'some-value'
            }

            console.log(obj.some weird key) // syntax error
            console.log(obj["some weird key"]) // valid
        ```
- It is very important to know that you can add and remove properties to/from an object at any time
    ```javascript
        const obj = {
            age: 2,
            name: 'some object'
        }
        obj.newProp = 'some-other-value'
        console.log(obj)// the new property will be displayed, toghether with the others.
        delete obj.age
        console.log(obj) // the age property is no longer present in the obj, thus will not be displayed
    ```

- If you want to see if an object has a certain property there are a couple of ways to do it:
    1. `hasOwnProperty`
        ```javascript
            const obj = {
                age: 2,
                name: 'some object'
            }
            console.log(obj.hasOwnProperty('age')); // true
            console.log(obj.hasOwnProperty('height'));//false

        ```
    2. `hasOwn`
        ```javascript
            const obj = {
                age: 2,
                name: 'some object'
            }

            console.log(Object.hasOwn(obj, 'age')); // true
            console.log(Object.hasOwn(obj,'height')); // false
        ```
        - Note: this might not be supported in all the browesers as it is a relative new method
    3. `in` operator
        ```javascript
            const obj = {
                age: 2,
                name: 'some object'
            }

            console.log('name' in obj); // true
            console.log('height' in obj) // false
        ```
- Another very important topic, when speaking about objects is the 'prototype'
- The `prototype` is the object from which other objects inherit from, can be seen as a template that is taken as is by other objects and/or extended with other properties/methods
- When you try to access a property or method on an object, first the JavaScript will look in the object's definition and if it cannot be found there, it will look into its prototype, and then to the prototype's prototype until it either finds it or not.
- In JavaScript, all of the objects in the end inherit from the `Object.prototype`, is similar to the `Object` class in the Java (somehow)
- You can assign a prototype to an object using the `__proto__` property:
    ```javascript
        const car = {
            brand: 'n/a',
            make: 'n/a',
            color: 'n/a',
        }

        const porsche = {    
            cc: 5000
        }

        porsche.__proto__ = car;
        porsche.color = 'dark grey';
        console.log(porsche.color)
    ```
- NOTE: the prototype of an object is also an object ;)

    ### Exercises 2.7
    
    - Consider the following snippet, what will be the output:
        ```javascript
            let pet = {
                type: 'dog',
                breed: 'malinois'
            }

            let myDog = pet
            myDog.age = 3;
            myDog.breed = 'Doberman'

            console.log(pet.age);
            console.log(pet.breed);
        ```