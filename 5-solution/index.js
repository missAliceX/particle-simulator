/*
  Challenge 5

  Goal:
    Make new circles when the user clicks
*/

class Renderer {
  constructor() {
    this.objs = new Array();
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

function init() {
  var renderer = new Renderer();
  renderer.add_object(new Circle("blue"));
  renderer.add_object(new Circle("green"));
  renderer.add_object(new Circle("red"));

  var canvas = document.getElementById("myCanvas");
  canvas.onclick = function(e) {
    var new_circle = new Circle(randomColor());
    new_circle.x = e.offsetX;
    new_circle.y = e.offsetY;
    renderer.add_object(new_circle);
  };

  renderer.render();
}

init();
