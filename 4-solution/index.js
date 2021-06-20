/*
  Challenge 4

  Goal:
    Make the circles bounce off the wall
*/

class Renderer {
  constructor() {
    this.objs = [];
  }
  add_object(obj) {
    this.objs.push(obj);
  }
  render() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let obj of this.objs) {
      obj.check_collision();
      obj.update_position();
      obj.draw();
    }
    window.requestAnimationFrame(this.render.bind(this));
  }
}

var renderer = new Renderer();
renderer.add_object(new Circle("blue"));
renderer.add_object(new Circle("green"));
renderer.add_object(new Circle("red"));
renderer.render();
