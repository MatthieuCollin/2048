import generateMap from "./frame/generateMap/index.js";
import populateCubes from "./frame/populateCubes/index.js";
import checkArray from "./functions/checkArray/index.js";

import moveDown from "./functions/movements/moveDown/index.js";
import moveLeft from "./functions/movements/moveLeft/index.js";
import moveRight from "./functions/movements/moveRight/index.js";
import moveUp from "./functions/movements/moveUp/index.js";

import populateArray from "./functions/populateArray/index.js";

let game = [];

const frame = document.getElementById("frame");
const form = document.getElementById("form");
const popup = document.getElementById("popup");

form.addEventListener("submit", function (event) {
  // quand input clavier
  event.preventDefault();
  let difficulty = event.target.children.difficulty.value;
  console.log(difficulty);
  for (let i = 0; i < difficulty; i++) {
    game.push([]);
    for (let j = 0; j < difficulty; j++) {
      console.log(game);
      game[i].push(0);
    }
  }
  game = populateArray(3, game);

  generateMap(game, frame);
  popup.remove();
  document.addEventListener("keydown", function (event) {
    // on check l'event
    handleNav(event);
  });
});

function handleNav(event) {
  //en fonction de la touche on change de direction
  //on sauvegarde l'état de la partie avant de faire n'importe qu'elle action
  localStorage.setItem("prevGame", game);

  switch (event.key) {
    case "z":
      game = moveUp(game);
      // je compare l'état précedent contre le nouvel état du jeu
      if (checkArray(localStorage.getItem("prevGame"), game)) {
        game = populateArray(1, game);
        populateCubes(game);
      }
      break;
    case "s":
      game = moveDown(game);
      if (checkArray(localStorage.getItem("prevGame"), game)) {
        game = populateArray(1, game);
        populateCubes(game);
      }
      break;
    case "q":
      game = moveLeft(game);
      if (checkArray(localStorage.getItem("prevGame"), game)) {
        game = populateArray(1, game);
        populateCubes(game);
      }
      break;
    case "d":
      game = moveRight(game);
      if (checkArray(localStorage.getItem("prevGame"), game)) {
        game = populateArray(1, game);
        populateCubes(game);
      }
      break;
  }
}
