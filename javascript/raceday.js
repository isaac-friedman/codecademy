let raceNumber = Math.floor(Math.random() * 1000);

let early = false;
let age = 12;

if (age >= 18) {
  if (early === true) {
    raceNumber += 1000;
    console.log(`Your number is ${raceNumber} and you will begin at 9:30 AM. Good luck!`);
  } else {
    console.log(`Your number is ${raceNumber} and you will begin at 11:00 AM. Good luck!`);
  }
} else {
  console.log(`It's great that you trained for your race. I hope you're excited to finally see your hard work pay off! Your number is ${raceNumber} and you will begin at 12:30 PM. Good luck!`);
}
