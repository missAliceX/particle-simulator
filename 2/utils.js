// Can you figure out what randomInt() does?
function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

// Hint: Check the "inspector console" to see its output
console.log(randomInt(-2, 4));
