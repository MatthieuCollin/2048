import slideYArray from "../../sliderYArray/index.js";

function moveDown(game) {
  // cf slideYArray
  let newArray = slideYArray(game, game.length, true);

  game = newArray;

  return game;
}

export default moveDown;
