/*
  Challenge 4

  Goal:
    Make the circles bounce off the wall
*/

class Renderer {
  constructor() {
    this.objs = [];
  }
  addObject(obj) {
    this.objs.push(obj);
  }
  render() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let obj of this.objs) {
      obj.checkCollision();
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
