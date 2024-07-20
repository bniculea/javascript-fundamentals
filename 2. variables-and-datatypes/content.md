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
