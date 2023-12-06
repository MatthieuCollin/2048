import populateCubes from "../populateCubes/index.js";

// on génére l'html (dom) du jeu a l'aide de la matrice
function generateMap(game, frame) {
    // pour chaque ligne
    for (let i = 0; i < game.length; i++) {
      // on crée une ligne html
      let row = document.createElement("div");
      row.className = "row";
      row.id = "row" + i;
      // pour chaque element de cette ligne
      for (let j = 0; j < game[i].length; j++) {
        // on crée un cube
        let cube = document.createElement("div");
        cube.className = "cube";
        cube.id = "cube" + i + j;
        row.appendChild(cube);
      }
      // on ajoute tt au frame du jeu 
      frame.appendChild(row);
    }
    // on met les chiffres correspondant à leur place dans le jeu 
    populateCubes(game);
  }

export default generateMap;