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
objs.push(new Circle("blue"));
objs.push(new Circle("green"));
objs.push(new Circle("red"));
draw(objs);
