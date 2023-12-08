import generateMap from "./frame/generateMap/index.js";
import populateCubes from "./frame/populateCubes/index.js";

import moveDown from "./functions/movements/moveDown/index.js";
import moveLeft from "./functions/movements/moveLeft/index.js";
import moveRight from "./functions/movements/moveRight/index.js";
import moveUp from "./functions/movements/moveUp/index.js";

import populateArray from "./functions/populateArray/index.js";

const frame = document.getElementById("frame");
const start = document.getElementById("start");
const popup = document.getElementById("popup");

start.addEventListener("click", function (event) {
  // quand input clavier
  popup.remove();
  document.addEventListener("keydown", function (event) {
    // on check l'event
    handleNav(event);
  });
});

// tableau matrice
let game = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

function handleNav(event) {
  //en fonction de la touche on change de direction
  switch (event.key) {
    case "z":
      game = moveUp(game);
      break;
    case "s":
      game = moveDown(game);
      break;
    case "q":
      game = moveLeft(game);
      break;
    case "d":
      game = moveRight(game);
      break;
  }
  game = populateArray(1, game);
  populateCubes(game);
}

game = populateArray(3, game);

generateMap(game, frame);
