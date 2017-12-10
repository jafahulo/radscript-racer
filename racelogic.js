// when it goes to >= 100%, then display that there's a winner
// debugger;
let carMax = 97;
let pressDistance = 0;
const carArray = ["one", "two"];
let staticPercentOne = 0;
let staticPercentTwo = 0;

// Updates the carOnePosition variable. Enter the % of the race completed.
const changeCarPosition = (num, car) => {
  if (car == 0) {
    staticPercentOne = num;
  } else if (car == 1) {
    staticPercentTwo = num;
  }
  document.getElementById(carArray[car]).style.left = num + "%";
}

// Checks to see if a car has crossed the finish line
const checkForWinner = () => {
  if (staticPercentOne > carMax) {
    alert("Red is teh winner!");
    initializeGame();
  } else if (staticPercentTwo > carMax) {
    alert("Blue is teh winner!");
    initializeGame();
  }
}

// this divides the number of button presses needed to win the game
const setPressNumber = (presses) => {
  let distance = carMax / presses;
  return pressDistance = distance;
}

// function that actually moves the car "press"
const moveCar = (car) => {
  if (car == 0) {
    changeCarPosition((staticPercentOne + pressDistance), car);
  } else if (car == 1) {
    changeCarPosition((staticPercentTwo + pressDistance), car);
  }
  checkForWinner();
}

document.addEventListener("keydown", (event) => {
  if (event.key == "d") {
    moveCar(1);
  } else if (event.keyCode == "39") {
    moveCar(0);
  }
});

// function with initial settings for game
const initializeGame = () => {
  // debugger;
changeCarPosition(0, 0);
changeCarPosition(0, 1);
setPressNumber(50);
}

// inititialize the game
// debugger;
initializeGame();
