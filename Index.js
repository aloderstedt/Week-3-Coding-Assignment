//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Programmatically subtract the value of the first element in the array from the value in the last element of the array
//Do not use numbers to reference the last element, find it programmatically,
//ages[7] – ages[0] is not allowed!

console.log(ages.at(-1) - ages.at(0));

//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(127);
console.log(ages.at(-1) - ages.at(0));

//Use a loop to iterate through the array and calculate the average age.

let sum = 0;
for (let age of ages) {
    sum += age;
} console.log(sum / ages.length);

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Use a loop to iterate through the array and calculate the average number of letters per name.

let totalLetters = 0
for (let i = 0; i < names.length; i++) {
    const letters = names[i];
    totalLetters += letters.length;
} console.log(totalLetters / names.length);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let newIterationSpaced = "";
for (let i = 0; i < names.length; i++) {
    if (i > 0) {
        newIterationSpaced += ' ';
    }
    newIterationSpaced += names[i];
} console.log(newIterationSpaced);

//How do you access the last element of any array?

   //array.at(-1);

//How do you access the first element of any array ?

   //array.at(0);

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

/*Is the map method not okay?
let nameLengths = names.map(function (name) {
    return name.length;
})
Otherwise this is what I came up with*/

let nameLengths = [];
for (i = 0; i < names.length; i++) {
    let amountOfLetters = names[i];
    //console.log(amountOfLetters);
    nameLengths.push(amountOfLetters.length);
} console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sums = 0;
for (i = 0; i < nameLengths.length; i++) {
    sums += nameLengths[i]; 
} console.log(sums);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e.if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function repeatWord(word, n) {
    return (word.repeat(n));
} 
console.log(repeatWord('dog', 7));

//Write a function that takes two parameters, firstName and lastName, and returns a full name.
//The full name should be the first and the last name separated by a space.

function createFullName(firstName, lastName) {
    return (firstName + ' ' + lastName);
}
console.log(createFullName("Anthony", "Loderstedt"));

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let initialValue = 0;
function arrayIsGreaterThanHundred(array) {
    if (array.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue) > 100) {
        return true;
    } else {
        return false;
}
}
console.log(arrayIsGreaterThanHundred(ages));
let otherNumbers = [0, 12, 22, 1, 5];
console.log(arrayIsGreaterThanHundred(otherNumbers));

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function arrayAveraging(array) {
    for (i = 0; i < array.length; i++) {
        let sum = 0;
        sum += array[i];
    } return sum / array.length;
}
console.log(arrayAveraging(ages));

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the
//first array is greater than the average of the elements in the second array.

function firstArrayLarger(array1, array2) {
    let sum1 = 0
    let sum2 = 0
    let firstAverage = 0;
    let secondAverage = 0;
    for (i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    } firstAverage = (sum1 / array1.length);
    for (i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    } secondAverage = (sum2 / array2.length);
    if (firstAverage > secondAverage) {
        return true;
    } else {
        return false;
    }
}
console.log(firstArrayLarger(ages, otherNumbers));

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and 
//returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 50));

//Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.

function willPlayVideoGames(bored, noHomework, noPlans) {
    if ((bored === (true || false)) || (noHomework === (true || false)) || (noPlans === (true || false))) {
        return true;
    }
}

/* This function is based on my life in the real world. It always returns true because there is no circumstance under which I will not play video games. Thanks for coming!*/





