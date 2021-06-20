/*
  Challenge 3

  Goal:
    Move the circles around
*/

class Renderer {
  constructor() {
    this.objs = new Array();
  }
  add_object(obj) {
    this.objs.push(obj);
  }
  render() {
    // 1. Draw each of the objects here
    // Hint: loop through this.objs and call draw() and update_position()
    // 2. Oh, it's not moving still...
    // Hint: Let's implement update_position()
    // 3. It's kind of moving, but something looks weird...
    // Hint: Look up "clear canvas"

    // What is someFunction.bind()?
    // What is requestAnimationFrame(anotherFunction)?
    // Hint: Look it up!
    window.requestAnimationFrame(this.render.bind(this));
  }
}

var renderer = new Renderer();
renderer.add_object(new Circle("blue"));
renderer.add_object(new Circle("green"));
renderer.add_object(new Circle("red"));
renderer.render();
