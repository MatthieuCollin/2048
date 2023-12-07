import slideYArray from "../../sliderYArray/index.js";

function moveUp(game) {
  // cf slideYArray
  let newArray = slideYArray(game, game.length);
  // on remet les valeurs du tableau mémoire à leur place dans la matrice
  game = newArray;
  return game;
}

export default moveUp;
