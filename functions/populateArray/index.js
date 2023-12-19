function populateArray(number, game) {
  for (let i = 0; i < number; i++) {
    //on génére un chiffre rond entre 0 et 3 pour x
    var xdecimal = Math.random();
    var xscaled = xdecimal * game.length;
    var xrounded = Math.floor(xscaled);

    //on génére un chiffre rond entre 0 et 3 pour y
    var ydecimal = Math.random();
    var yscaled = ydecimal * game.length;
    var yrounded = Math.floor(yscaled);

    // si la place est egal à 0, alors j'applique un chiffre de 2
    if (game[xrounded][yrounded] == 0) {
      game[xrounded][yrounded] = 2;
    } else {
      // sinon je decremente pour chercher une nouvelle place
      number--;
    }
  }

  // je retourne la tableau avec la nouvelle disposition
  return game;
}

export default populateArray;
