/*
  Challenge 2

  Goal:
    Draw a bunch of circles

*/

function draw(objs) {
  for (let obj of objs) {
    obj.draw();
  }
}

var objs = new Array();
var colors = ["blue", "green", "red"];
for (let color of colors) {
  objs.push(new Circle(color));
}
draw(objs);
