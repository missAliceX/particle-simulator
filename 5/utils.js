function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

// I copied this from online, lol. It generates a random color in hex
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
