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

// Can you create circles with different colors? Or create more circles?
// Can you create more circles?
// Can you use a loop like you see above to push these circles instead?
var objs = new Array();
objs.push(new Circle("blue"));
objs.push(new Circle("green"));
objs.push(new Circle("red"));
draw(objs);
