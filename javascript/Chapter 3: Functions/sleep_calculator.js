const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'sunday':
      return 6.5;
      break;
    case 'monday':
      return 6;
      break;
    case 'tuesday':
      return 3.5;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 5.5;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 5;
      break;
    default: return "Not a day";
  }
}

const getActualSleepHours = () => getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday');

const getIdealSleepHours = (idealHours) => {
  return idealHours*7;
}

const sleepDebt = () => {
  let realSleep = getActualSleepHours();
	let idealSleep = getIdealSleepHours(8);
  if (realSleep > idealSleep) {
    console.log("You got more sleep than needed.");
    console.log("You are " + realSleep - idealSleep + " hours over target");
  } else if (realSleep < idealSleep) {
    console.log("You are ", (idealSleep - realSleep), " hours under target");
    console.log("You are racking up sleep debt and you'll be a nervous wreck like this programmer soon. :(");
  } else { //real == actual
    console.log("You got the perfect amount of sleep, but not really because this script doesn't account for unbalanced nights of sleep.");
  }
}

sleepDebt();
