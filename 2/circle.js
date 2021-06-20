class Circle {
  constructor(color) {
    var canvas = document.getElementById("myCanvas");
    this.ctx = canvas.getContext("2d");
    this.x = randomInt(0, canvas.width);
    this.y = randomInt(0, canvas.height);
    this.color = color;
    this.radius = 5; // Can you change the radius of the circles?
  }
  draw() {
    // Put the code to draw a circle here
  }
}
