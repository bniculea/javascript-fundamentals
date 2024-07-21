

//region  var, let and const
// var variable is hoisted and it will not complain
// that age is not defined, it will just log undefined
console.log(age);
var age = 28;
console.log(age)


// now it will complain that username is not defined
//console.log(username)

// console.log(length);
// let length;

// const

// const myConst = 2.56;
// if (myConst === 2.56) {
//     const myConst = 3.99;
//     console.log(myConst);
// }
// console.log(myConst);


// for(let n in numbers) {
//     console.log(n)
// }

const pet = {
    type: 'dog',
    breed: 'Malinois',
    age: 3 
}

// Statement #1
// pet = {
//     type: 'cat',
//     age: 2
// }

// Statement #2
pet.age = 1.4

// Statement #3
pet.type = 4.5