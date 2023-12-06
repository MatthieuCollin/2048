function moveUp(game){
    // cf slideYArray
    let newArray = slideYArray(game, game.length)
    // on remet les valeurs du tableau mémoire à leur place dans la matrice
    for(let x = 0; x < size; x++){
        game[x][i] = newArray[x]
    }
    return game;
  }

  export default moveUp;