// define the number of key presses it takes to win the game.
// move the car at increments of 100% / the number of keypresses.
// when it goes to >= 100%, then display that there's a winner


// window.getComputedStyle(one).left  <=== returns the value of the left position.

let carOnePosition = document.getElementById("one").style.left;

// Updates the carOnePosition variable. Enter the % of the race completed.
const updateCarOnePosition = (percent) => {
  carOnePosition = percent + "%";
}

//
const checkForWinner = () => {
  let carPos = document.getElementById("one").style.left;
  console.log(carPos);
  if (carPos > 100) {
    alert("teh winner!");
  }
}

// Set initial car positions
updateCarOnePosition(0);
