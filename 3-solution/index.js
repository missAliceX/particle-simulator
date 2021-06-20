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
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(0, 0, 1000, 600);
    for (let obj of this.objs) {
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
