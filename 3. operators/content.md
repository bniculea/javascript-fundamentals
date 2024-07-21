# Operators

## Topics discussed

- Arithmetic operators
- Logical operators
- Comparison operators
    - Type coercion
- Ternary operator
- Spread  and rest operator
- falsy/truthy values

## Arithmetic operators

- JavaScript  supports the arithmetic operators you are used to:
    - `+,-,*,/` and `++, --` plus the modulus operator `%`
    - it also supports shorthand notations for assignment operations like `+=, *=, -=, /=, etc.`

- They are very common and thus easy to understand how to use them:
    ```javascript
        let number = 10;
        let number2 = number + 1; // number2 = 11
        number2 += 10; // number2 = 21
        number2 -= 3; // number2 = 18
        number2 =  number2 / 3; // number2 = 6
        number2 *=2; number2 = 12
        let remainder = number2 % 5; // remainder = 2
        remainder++;// remainder = 3
        remainder--; //remainder = 2;
    ```

### Exercise 3.1
    - What will be the output of the following snippet:
        ```javascript
            let x = 10;
            let y = x++ * 2;
            let z = x + 3;
            let w = ++y
            console.log(x);
            console.log(y);
            console.log(z);
            console.log(w)
        ```

## Logical operators

- As you might expect, the logical operators available in JavaScript are: 
    - `||` -> Logical `OR`
    - `&&` -> Logical `AND`
    - `!` -> Logical Not

- When we are using these operators, the end result will either be a `true` or a `false` value: 
    * `||` -> we will get `true` when at least on of the operands are `true`:
        ```javascript
            console.log(true || false); // true
            console.log(true || true); // true
            console.log(false || true); // true
            console.log(false || false); // false
        ```
    * `&&` -> we will get `true` IF AND ONLY IF, both operands are `true` and `false` otherwise
        ```javascript
            console.log(true && false); // false
            console.log(true || true); // true
            console.log(false && true); // false
            console.log(false && false); // false
        ```
    * `!` -> It will negate the current value of an expression. Meaning that if an expression is `true`, the result will be `false`:
        ```javascript
            const expression = true;
            console.log(!expression) // false
        ```
- When working with the `||` and `&&` operators, we should know about the short-circuit scenarios.
    - This means that JavaScript will skip evaluating part of the expression if it's knowing the answer already:
        ```javascript
            const expr = 5 > 3;
            const expre2 = 4 > 5
            console.log(expr1 || expr2); // true and the right handside of the operation will not get even executed because JS knows it is already true, as for || you only need one true value.
        ```
    - In order to better demonstrate this, let's consider the following snippet:
        ```javascript
            let obj;
            console.log(obj.age); // this will throw an error
            /*
                Something like:
                TypeError: Cannot read properties of undefined (reading 'age')
                at <anonymous>:1:17
            */
           //but this will not:
           console.log(5 > 1 || obj.age > 18); // it will print true
        ```
    - The same thing applies for the `&&` operator.

## Comparison operators

- Most of the operators are pretty common in other programming languages but also in math, like:
    * `>` -> greater than
        ```javascript
            console.log(4 > 3); // true
        ```
    * `>=` -> greather than or equal to
        ```javascript
            console.log(4 >= 4); // true
            console.log(4 >= 5); // false
        ```
    
    * `<` -> less than
        ```javascript
            console.log(4 < 4); // false
        ```

    * `<=` -> less than or equal
        ```javascript
            console.log(4 <= 4); // true
        ```
    * `==` -> Equal to
        ```javascript
            console.log(4 == 4); // true
        ```
    * `!=` -> Not equal to
        ```javascript
            console.log(4 != 4); // false
        ```
- But we also have some special operators for equality like:
    * `===` -> Strict equal to
    * `!==` -> Strict not equal to

    - These operators are recommended to be used (most of the times) instead of `==` and `!=` because of the `type coercion` feature in JavaScript
        - Note: there might also be scenarios where you might need the `==` instead of the more strict one, in cases when you are only interested in value but not also in type. See below more details.
    
    - Let s see how the type coercion works in JavaScript:
        ```javascript
            let oneDigit = 1;
            let oneString = '1';
            console.log(oneDigit == oneString) // true
            // it is true because Js will try to see if it has the same value in the end
            // but if we also check the type with ===, it will result in a false value:
            console.log(oneDigit === oneString); // false
        ```
    - Note that type coercion applies to arithmetic and logical operators also:
        ```javascript
            console.log('5' + 3); // 53 and that is because js will try to see if it can find a common type and it will convert the result in a string, because strings do have the + operator
            console.log('5' - 3); // 2. Again, js will try to see if it can find a common type and it will convert the 5 to a number and then use the subtract operation 
        ```
### Exercise 3.2
- What do you think will be the output of the following snippet:
    ```javascript:
        console.log(54 == '54');
        console.log(54 === '54');
        console.log(undefined == null);
        console.log(undefined === null);
        console.log(true == '1');
        console.log(false == 0);
    ```