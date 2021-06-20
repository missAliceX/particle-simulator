function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
