const getUserChoice = (userInput) => {
  validInputs = ['rock', 'paper', 'scissors']
  userInput = userInput.toLowerCase();
  if (validInputs.includes(userInput)) {
    return userInput;
  } else {
    console.log("ERROR: Invalid input.");
  }
}

getConfuserChoice = () => {
  choice = Math.floor(Math.random()*3);
  switch (choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const chooseWinner = (user, confuser) => {

  if (user === confuser) {
    return "Tie!";
  }
  if (user === 'paper') {
    if (confuser === 'scissors') {
      return 'Confuser wins!!!';
    } else {
      return 'User wins!!!';
    }
  } else if (user === 'rock') {
    if (confuser === 'paper') {
      return 'Confuser wins!!!';
    } else {
      return 'User wins!!!';
    }
    } else { //user === scissors
      if (confuser === 'rock') {
    	  return 'Confuser wins!!!';
   		} else {
    	  return 'User wins!!!';
    	}
    }
  }

const play = () => {
  let user = getUserChoice('paper');
  let confuser = getConfuserChoice();
  console.log(chooseWinner(user, confuser));
}
