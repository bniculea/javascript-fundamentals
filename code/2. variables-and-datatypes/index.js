let pet = {
    type: 'dog',
    breed: 'malinois'
}

let myDog = pet
myDog.age = 3;
myDog.breed = 'Doberman'

console.log(pet.age);
console.log(pet.breed);