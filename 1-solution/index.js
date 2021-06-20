/*
  Challenge 1

  Goal:
    Draw a circle on HTML canvas

  Hint:
    Google it - "HTML canvas draw circle"
*/

function draw() {
  var ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 200, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = "blue";
  ctx.fill();
}

draw(); // This runs the draw() function
