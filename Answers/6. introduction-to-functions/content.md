1. 
    ```JavaScript
        function hi() {
            console.log('Hello, everyone')
        }
    ```
2. 
    ```JavaScript
        function getRandomNumber() {
            return Math.floor(Math.random()*10)
        }

        const result = getRandomNumber()
        console.log(result)
    ```

3. 
    ```JavaScript
        function getSpecificRandomNumber(limit) {
            return Math.floor(Math.random()*(limit +1))
        }

        const result = getSpecificRandomNumber(10)
        console.log(result)
    ```

4. 
    ```JavaScript
        const introduceMe = function(name, age, romanianCity) {
            return `Hi! My name is ${name}. I have ${age} years and I live in ${romanianCity}, a city in Romania.`
        }

        const str = introduceMe('Bogdan', 31, 'Timisoara')
        console.log(str)
    ```

5. 
    ```JavaScript
        function getOddValues(arr) {
            return arr.filter(val => val %2 !== 0);
        }
        const numbers = [1,2,3,4,5,6,7,8,9,10]
        const oddValues = getOddValues(numbers)
        console.log(oddValues)
    ```

6. 
    ```JavaScript
        function haveACommonProperty(obj1, obj2) {
            for(const key in Object.keys(obj1)) {
                console.log(key)
                if (Object.hasOwn(obj2, key) && obj2[key] === obj1[key]){
                return true;
                }
            }
            return false
        }

        const car1 = {
        brand: 'Volkswagen',
        model: 'Arteon',
        color: 'blue',
        cc: 1200
        }

        const car2 = {
        brand: 'Skoda',
        model: 'Superb',
        color: 'blue',
        cc: 1900
        }

        console.log(haveACommonProperty(car1, car2))
    ```

7. With arrow functions 
    ```JavaScript
        const capitalizeWords = function(phrase) {
        const words = phrase
        .split(' ')
        .filter(word => word)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        return words
        }

        const str = "Ana    are    ac cu ata"

        console.log(capitalizeWords(str))
    ```

7. Without arrow functions
    ```JavaScript
        const capitalizeWords = function(phrase) {
        const words = phrase
        .split(' ')
        .filter(function(word) {
            return word
        })
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(' ')

        return words
        }

        const str = "Ana    are    ac cu ata"
        console.log(capitalizeWords(str))
    ```

8. 
    ```JavaScript
        function merge(usersArr1, usersArr2) {
            const resultArr = [...usersArr1]
            for(let i = 0; i < usersArr2.length; i++) {
                let matchingUserIndex = resultArr.findIndex(u =>  u.cnp === usersArr2[i].cnp)
                if(matchingUserIndex != -1){
                    resultArr[matchingUserIndex] = {
                    ...usersArr2[i],
                    active: true
                    }
                } else {
                    resultArr.push({...usersArr2[i], active: true})
                }

                resultArr[i]['active'] = true
            }
            return resultArr
            }

            const usersArray1 = [
            { cnp: 1921011111114, name: 'Andrei', email: 'andrei@example.com' },
            { cnp: 2912121212125, name: 'Marius', email: 'marius@example.com' },
            { cnp: 3342334234322, name: 'johnny', email: 'johnny@example.com' }
            ];

            const usersArray2 = [
            { cnp: 3342334234322, name: 'Robert', email: 'robert@example.com' },
            { cnp: 4324234324245, name: 'David', email: 'david@example.com' },
            { cnp: 1232323245453, name: 'Popovici', email: 'popovici@example.com' },
            ];

            const mergedArr = merge(usersArray1, usersArray2);
            console.log(mergedArr)
    ```