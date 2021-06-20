class Circle {
  constructor(color) {
    var canvas = document.getElementById("myCanvas");
    this.ctx = canvas.getContext("2d");
    this.x = randomInt(0, canvas.width);
    this.y = randomInt(0, canvas.height);
    this.color = color;
    this.radius = 5;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}
