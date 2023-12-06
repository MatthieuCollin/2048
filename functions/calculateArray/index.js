// fonction pour vérifier si des calculs sont dispo dans le tableau
// et si oui alors on calcul
// array correspond a l'array qui est va être vérifier
function calculateArray(array){
    if (array.length > 0) {
      for (var i = 0; i < array.length - 1; i++) {
        if (array[i] == array[i + 1]) {
          array[i] *= 2;
          array[i + 1] = 0;
        }
      }
    }
    // on retourne l'array dans sa version calculé
    return array;
  }

  export default calculateArray;