// define the number of key presses it takes to win the game.
// move the car at increments of 100% / the number of keypresses.
// when it goes to >= 100%, then display that there's a winner


// window.getComputedStyle(one).left  <=== returns the value of the left position.

console.log("this is tstill working?");

const moveCar = (num) =>
{
  document.getElementById("one").style.left = num + "%";
}
