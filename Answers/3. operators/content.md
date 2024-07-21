1. Increment/Decrement operators example
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
    - The output will be:
    ```bash
        11
        21
        14
        21
    ```
    - Explanation:
        - when we assign to y, the old value of x is first used and then the increment take place, thus, when we do: `let y = x++ * 2`, first `y` takes the value of 20, then the `x` is incremented to 11
        - Next, when we do ` let z = x + 3;`, here `x` has the updated value of `11`, thus we set `z` to `14`
        - In the last operation `let w = ++y`, we first increment `y` to `21` and then we set `w` to `21`

2. Type coercion exercise

    ```javascript:
        console.log(54 == '54'); // true
        console.log(54 === '54'); // false
        console.log(undefined == null); // true
        console.log(undefined === null); // false
        console.log(true == '1'); // true
        console.log(false == 0); // true
    ```
    - First console.log will display `true` as JavaScript will convert both operands to numbers and will do the comparison, disregarding their type
    - Second console.log will display `false` as JavaScript will first try to see if the operands have the same type, thus it will say false as we have a string and a number
    - Third console.log will display `true`, and that's because both of the operands are what is called falsy values, thus if you try to see if two false values are equal, you will get `true`
    - Fourth console.log will display `false` as now we also check the type, not only if both of them are falsy values
    - Same applies also for the last two logs.
- Note:
    - Some of the popular falsy values:
        - `false`
        - `0` (zero)
        - `-0` (negative zero)
        - `0n` (BigInt zero)
        - `""` (empty string)
        - `null`
        - `undefined`
        - `NaN` (Not-a-Number)
    - Some of the popular truthy values:
        - `true`
        - `1` (non-zero numbers)
        - `-1` (negative numbers)
        - `42` (positive numbers)
        - `"hello"` (non-empty strings)
        - `" "` (strings with spaces)
        - `[]` (empty array)
        - `{}` (empty object)
        - `function()` {} (any function)
        - `new Date()` (date objects)
        - `Infinity` and `-Infinity`
        - `BigInt` values other than 0n