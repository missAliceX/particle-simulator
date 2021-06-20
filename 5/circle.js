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
    var canvas = document.getElementById("myCanvas");
    var next_x = this.x + this.velocity * Math.cos(this.direction);
    var next_y = this.y + this.velocity * Math.sin(this.direction);
    if (next_x < 0) {
      this.direction = randomInt(-90, 90) / (2 * Math.PI);
      this.x = 0;
    } else if (next_x > canvas.width) {
      this.direction = randomInt(90, 270) / (2 * Math.PI);
      this.x = canvas.width;
    }
    if (next_y < 0) {
      this.direction = randomInt(0, 180) / (2 * Math.PI);
      this.y = 0;
    } else if (next_y > canvas.height) {
      this.direction = randomInt(-180, 0) / (2 * Math.PI);
      this.y = canvas.height;
    }
  }
}
