import slideXArray from "../../sliderXArray/index.js";

function moveLeft(game) {
  // pour chaque ligne de la matrice
  for (var j = 0; j < game.length; j++) {
    game[j] = slideXArray(game[j], game.length);
  }
  return game;
}

export default moveLeft;
