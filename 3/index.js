/*
  Challenge 3

  Goal:
    Move the circles around
*/

class Renderer {
  constructor() {
    this.objs = new Array();
  }
  addObject(obj) {
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
renderer.addObject(new Circle("blue"));
renderer.addObject(new Circle("green"));
renderer.addObject(new Circle("red"));
renderer.render();
