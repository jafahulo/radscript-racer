// define the number of key presses it takes to win the game.
// move the car at increments of 100% / the number of keypresses.
// when it goes to >= 100%, then display that there's a winner


// window.getComputedStyle(one).left  <=== returns the value of the left position.

let carPosition = document.getElementById("one").style.left;
let carMax = 100;

// Updates the carOnePosition variable. Enter the % of the race completed.
const updateCarPosition = (percent) => { // add the second param to define car
  carPosition = percent + "%";
}

// Checks to see if a car has crossed the finish line
const checkForWinner = () => {
  console.log(carPosition);
  if (carPosition > carMax) {
    alert("teh winner!");
  }
}

// this divides the number of button presses needed to win the game
const setPresses = (presses) => {

}

// function with initial settings for game
const initializeGame = () => {
updateCarOnePosition(0);
}

// inititialize the game
initializeGame();
