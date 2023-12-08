function addCubeColor(cube, value) {
  switch (value) {
    case 2:
      cube.style.backgroundColor = "white";
      break;
    case 4:
      cube.style.backgroundColor = "beige";
      break;
    case 8:
      cube.style.backgroundColor = "orange";
      break;
    case 16:
      cube.style.backgroundColor = "rgb(255, 133, 85)";
      break;
    case 32:
      cube.style.backgroundColor = "salmon";
      break;
    case 64:
      cube.style.backgroundColor = "red";
      break;
    case 128:
      cube.style.backgroundColor = "rgb(255, 255, 137)";
      break;
    case 256:
      cube.style.backgroundColor = "yellow";
      break;
    case 512:
      cube.style.backgroundColor = "rgb(255, 183, 0)";
      break;
    case 1024:
      cube.style.backgroundColor = "lightblue";
      break;
    case 2048:
      cube.style.backgroundColor = "lightskyblue";
      break;
  }
}

export default addCubeColor;
