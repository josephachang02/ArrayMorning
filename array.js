// Task 0
//Our company does a special bonus and all users get double points. DO NOT MAKE A NEW ARRAY. Change the points array so everyone has double points.
let points = [
  12,
  8,
  17,
  23,
  15
];

points.forEach((value, index, array) => {
  array[index] = value * 2;
});

console.log(points);

// Task 1:
// Task: Square each number in the array and create a new array with the squared values.
// call this new array squaredNumbers
let numbers = [
  25,
  36,
  49,
  64,
  81
];

let squaredNumbers = numbers.map((value) => {
  return value * value;
});

console.log(squaredNumbers);

// Task 3
// Task: I want to see each fruit in the console with an ! after each fruit.
let fruits = [
  'apple',
  'banana',
  'cherry',
  'date'
];


fruits.forEach((fruit, index, array) => {
  array[index] = fruit + '!';
});

console.log(fruits);

// Task 4
// Task: We only want to show big animal names on our site - filter out animals with names shorter than 4 characters from the array, creating a new array called longNameAnimals

let animals = [
  'dog',
  'elephant',
  'cat',
  'giraffe',
  'rabbit'
];

let longNameAnimals = animals.filter(animal => animal.length >= 4);

console.log(longNameAnimals);

// Task 5 
// Task: I want to have the total of the ages in a variable that I can use many times. Create and update a variable to store the sum of the ages in the array.

let ages = [
  18,
  25,
  37,
  12,
  30
];
let totalAge = 0;

for (let i = 0; i < ages.length; i++) {
  totalAge += ages[i];
}

console.log("Total Age:", totalAge);
  
// Task 6
// I need an array that has the lengths of each fruit's corresponding fruit in the array. Create a new array called fruitLengths with the modified values.

  let myFruits = [
    'apple',
    'banana',
    'cherry',
    'date'
  ];
  let fruitLengths = [];

for (let i = 0; i < myFruits.length; i++) {
  fruitLengths.push(myFruits[i].length);
}

console.log("Fruit Lengths:", fruitLengths);