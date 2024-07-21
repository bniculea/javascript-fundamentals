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