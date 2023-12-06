const frame = document.getElementById("frame");

// quand input clavier
document.addEventListener("keydown", function (event) {
  // on check l'event
  handleNav(event);
});

// tableau matrice 
let game = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

function handleNav(event) {
  //en fonction de la touche on change de direction 
  switch (event.key) {
    case "z":
      moveUp();
      break;
    case "s":
      moveDown();
      break;
    case "q":
      moveLeft();
      break;
    case "d":
      moveRight();
      break;
  }
  populateCubes();
}

// on génére l'html (dom) du jeu a l'aide de la matrice
function generateMap() {
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
  populateCubes();
}

function populateCubes(){
  // pour chaque ligne
  for (let i = 0; i < game.length; i++) {
    // pour chaque cube
    for (let j = 0; j < game[i].length; j++) {
      // on recup le cube lié à la position ig 
      let cube = document.getElementById("cube" +i +j );
      // si la position dans la matrice est différente de 0 alors on mets le chiffre correspondant
      if(game[i][j] !== 0){
        cube.innerHTML = game[i][j];
      }else{
        // sinon r
        cube.innerHTML = "";
      }
    }
  }
}

// fonction pour retirer les 0 d'un tableau
function filterEmpty(a) {
  return a.filter((x) => x != 0);
}

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
  if(reverse){
    array = array.reverse();
  }
  return array;
  
}


// fonction pour slide sur l'axe Y
// en parametre l'array en cours de modification
// la taille de l'array (4)
// si la fonction est reverse (cad si vers haut ou bas)
function slideYArray(array, size, reverse){
  // pour chaque cellule dans la matrice
  for(let i = 0; i < size; i++){
    // on déclare un nouveau tableau qui va servir de tableau "mémoire"
    let newArray = [];
    // pour chaque ligne dans la matrice
    for(let j = 0; j < size ;j++ ){
      // on ajoute la valeur qui est position 0,0 | 0,1 | 0,2, etc...
      newArray.push(game[j][i])
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
      // on remet les valeurs du tableau mémoire à leur place dans la matrice
      for(let x = 0; x < size; x++){
        game[x][i] = newArray[x]
      }
  }
}

function moveDown(){
  // cf slideYArray
  slideYArray(game, game.length, true)
}
function moveLeft(){
  // pour chaque ligne de la matrice
  for(var j = 0; j < game.length; j++){
    game[j] = slideXArray(game[j], game.length)
  }
} 
function moveRight(){
    // pour chaque ligne de la matrice
  for(var j = 0; j < game.length; j++){
    game[j] = slideXArray(game[j], game.length, true)
  }
} 
function moveUp(){
  // cf slideYArray
  slideYArray(game, game.length)
}


generateMap();
