1. Variable shadowing example:
    ```javascript
        let pet = 'dog'
        if (pet === 'dog') {
            let pet = 'cat'
            console.log(pet)
        }
        console.log(pet)
    ```
    - The program will output:
    ```javascript
        cat
        dog
    ```
    - And that is because, inside the `if` statement, another variable is defined, that has the same name with an outer variable. This will make the inner `pet` variable take precedence over the other one, defined outside (this is called `variable shadowing`), thus the `console.log` inside the `if` will display `cat`
    - When we go outside the `if` statement, the `pet` variable will contain the `dog` word, because, as we said, variables defined in a scop, are not available outside of it, thus, our `pet` variable defined inside the `if` will no longer exists, as soon as we exist the `if`

2. Variable shadowing exercise - const
    ```javascript
        const myConst = 2.56;
        if (myConst === 2.56) {
            const myConst = 3.99;
            console.log(myConst);
        }
        console.log(myConst)
    ```
    - This exercises is identical with the one above, as let and const share the same similarities (apart from the thing that const prevents you from changing the value)
    - And you might wonder why did it allow you to change its value in the `if`, but that it was not a value change, was a completely new `const` variable which unfortunately happened to share the same name, thus shadowing it the one above.
    - The program will output:
    ```javascript
        3.99
        2.56
    ```

3. String immutabilty exercise
    ```javascript
            const str = 'I like feature phones more than the incomplete apples'
            str.replace("feature", "android")
            console.log(str)
    ```
    - Will display: `I like feature phones more than the incomplete apples`
    - The initial string will be displayed because the replace method did not alter it, instead it returned a new string, though we didn't saved it.

4. Typeof string character is still a character
    - What will be the output of the following snippet:
        ```javascript
            const text = 'Hello'
            console.log(typeof text.charAt(1))
        ```
    - The output will be `string` because there is no such type as `char` in JavaScript
5. Retrieving the length of a string
    ```javascript
        const str = 'This is a random text'
        console.log(str.length)
    ```