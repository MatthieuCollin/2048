import filterEmpty from "../filterEmpty/index.js";
import calculateArray from "../calculateArray/index.js";

// fonction pour slide sur l'axe X
// en parametre l'array en cours de modification
// la taille de l'array (4)
// si la fonction est reverse (cad si vers gauche ou droite)
function slideXArray(array, size, reverse) {
  // cf filterEmpty
  array = filterEmpty(array);
  // cf calculateArray
  array = calculateArray(array);
  // cf filterEmpty
  array = filterEmpty(array);
  // on repeuple le tableau
  while (array.length < size) {
    array.push(0);
  }
  // si reverse on reverse le tableau
  if (reverse) {
    array = array.reverse();
  }
  return array;
}

export default slideXArray;
