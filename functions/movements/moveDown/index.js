import slideYArray from '../../sliderYArray/index.js'

function moveDown(game){
    // cf slideYArray
    for(let x = 0; x < game.length; x++){
        let newArray = slideYArray(game[x], game[x].length, true)
        for(let i = 0; i < newArray.length; i++){
            game[i][x] = newArray[i]
        }
    }
    console.log(game)
    return game;
  }

  export default moveDown;