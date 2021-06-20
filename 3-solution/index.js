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
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(0, 0, 1000, 600);
    for (let obj of this.objs) {
      obj.updatePosition();
      obj.draw();
    }

    window.requestAnimationFrame(this.render.bind(this));
  }
}

var renderer = new Renderer();
renderer.addObject(new Circle("blue"));
renderer.addObject(new Circle("green"));
renderer.addObject(new Circle("red"));
renderer.render();
