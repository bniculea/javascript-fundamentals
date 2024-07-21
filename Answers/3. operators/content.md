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