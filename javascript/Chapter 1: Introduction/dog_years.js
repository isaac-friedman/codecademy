//This script converts the initial hardcoded value for myAge into dog years
const myAge = 29;

//The first two years of a dog's life are equivalent to 10.5 human years each.
let earlyYears = 2;
earlyYears *= 10.5;

let laterYears = myAge - 2;
laterYears *= 4;
let dogYears = earlyYears + laterYears;

console.log(`You (or whoever's age you hardcoded in this really simple script) is ${dogYears} dog years old.`);
