//Yes, the answer is set long before the question is asked. You didn't expect a magic 8 ball to do research, did you?
randomNumber = Math.floor(Math.random() * 8);

let username = '';
username ? console.log(`Hello, ${username}!`) : console.log("Hello, stranger!");

let userq = "Why is the night sky beautiful?";

username ? console.log(`${username} asked ${userq}`) : console.log(`Anonymous asked ${userq}`) ;

//No default necessary because of constraints on the number generator
switch (randomNumber) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Signs point to yes');
    break;
}
