class Circle {
  constructor(color) {
    var canvas = document.getElementById("myCanvas");
    this.ctx = canvas.getContext("2d");
    this.x = randomInt(0, canvas.width);
    this.y = randomInt(0, canvas.height);
    this.color = color;
    this.radius = 5;
    this.velocity = 5;
    this.direction = randomInt(0, 360) / (2 * Math.PI);
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
  updatePosition() {
    this.x += this.velocity * Math.cos(this.direction);
    this.y += this.velocity * Math.sin(this.direction);
  }
  checkCollision() {
    // Check to see if the circle wiil hit the walls of the canvas in the next frame
    // If so, make it move in an opposite random direction
    // Hint: Use some conditional statements
  }
}
