function moveRight(game){
    // pour chaque ligne de la matrice
  for(var j = 0; j < game.length; j++){
    game[j] = slideXArray(game[j], game.length, true)
  }
  return game;
} 

export default moveRight;