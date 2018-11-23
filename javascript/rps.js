const chooseWinner = () => {
  let user = getUserChoice('paper');
  let confuser = confuserChoice();
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
}
