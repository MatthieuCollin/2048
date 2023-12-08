import addCubeColor from "../addCubeColor/index.js";

// TODO Mettre couleur  sur chaque case en  fonction du numéro

function populateCubes(game) {
  // pour chaque ligne
  for (let i = 0; i < game.length; i++) {
    // pour chaque cube
    for (let j = 0; j < game[i].length; j++) {
      // on recup le cube lié à la position ig
      let cube = document.getElementById("cube" + i + j);
      // si la position dans la matrice est différente de 0 alors on mets le chiffre correspondant
      if (game[i][j] !== 0) {
        cube.innerHTML = game[i][j];
        addCubeColor(cube, game[i][j]);
      } else {
        // sinon r
        cube.innerHTML = "";
        cube.style.backgroundColor = "lightgrey";
      }
    }
  }
}

export default populateCubes;
