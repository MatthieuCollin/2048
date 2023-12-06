import filterEmpty from '../filterEmpty/index.js'
import calculateArray from '../calculateArray/index.js'

// fonction pour slide sur l'axe Y
// en parametre l'array en cours de modification
// la taille de l'array (4)
// si la fonction est reverse (cad si vers haut ou bas)
function slideYArray(game, size, reverse){
    // pour chaque cellule dans la matrice
      // on déclare un nouveau tableau qui va servir de tableau "mémoire"
      let newArray = [];
      // pour chaque ligne dans la matrice
      for(let j = 0; j < size ;j++ ){
        // on ajoute la valeur qui est position 0,0 | 0,1 | 0,2, etc...
        newArray.push(game[j])
      }
        // cf filterEmpty
        newArray = filterEmpty(newArray);
        // cf calculateArray
        newArray = calculateArray(newArray)
        // cf filterEmpty
        newArray = filterEmpty(newArray);
  
        // on repeuple le tableau 
        while (newArray.length < size) {
          newArray.push(0);
        }      
        
        // si reverse on reverse le tableau 
        if(reverse){
          newArray = newArray.reverse();
        }
        return newArray;
  }

  export default slideYArray;