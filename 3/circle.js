class Circle {
  constructor(color) {
    var canvas = document.getElementById("myCanvas");
    this.ctx = canvas.getContext("2d");
    this.x = randomInt(0, canvas.width);
    this.y = randomInt(0, canvas.height);
    this.color = color;
    this.radius = 5;
    this.velocity = 15; // this is how fast the circle is going in the given direction
    this.direction = randomInt(0, 360) / (2 * Math.PI); // this is the angle in radians representing the direction the circle is going
  }
  update_position() {
    // Update this.x and this.y here. It needs to move according to its velocity.
    // Hint: Use trigonometry
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}
