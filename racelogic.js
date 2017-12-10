// move the car at increments of 100% / the number of keypresses.
// when it goes to >= 100%, then display that there's a winner

let carMax = 100;
let pressDistance = 0;
const carArray = ["one", "two"];
let staticPercent = 0;

// Updates the carOnePosition variable. Enter the % of the race completed.
const changeCarPosition = (num, car) => {
  // debugger;
  staticPercent = num;
  document.getElementById(carArray[car]).style.left = num + "%";
}

// Checks to see if a car has crossed the finish line
const checkForWinner = () => {
  console.log(carPosition);
  if (carPosition > carMax) {
    alert("teh winner!");
  }
}

// this divides the number of button presses needed to win the game
const setPressNumber = (presses) => {
  let distance = carMax / presses;
  return pressDistance = distance;
}

// function that actually moves the car "press"
const moveCarOne = () => {
  // add event listener
  return changeCarPosition((staticPercent + pressDistance), 0);
}

const moveCarTwo = () => {
  // add event listener
  return changeCarPosition((staticPercent + pressDistance), 1);
}

// function with initial settings for game
const initializeGame = () => {
  // debugger;
changeCarPosition(0, 0);
changeCarPosition(0, 1);
setPressNumber(50);

}

// inititialize the game
initializeGame();
