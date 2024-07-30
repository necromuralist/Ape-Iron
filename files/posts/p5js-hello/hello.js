const HELLO_DIV = "hello-08b095a8";

class Hello {
  constructor(p5, width, height, diameter, step) {
    this.p5 = p5;
    this.step = step;
    this.radius = 10;
    this.width = width;
    this.height = height;
    this.y = height/2;
    this.diameter = diameter;
    this.x = this.diameter + 1;
  }; //constructor

  draw() {
    this.p5.circle(this.x, this.y, this.diameter);
    if (this.x <= this.diameter || this.x >= this.width - this.diameter) {
      this.step *= -1;
    }; 
    this.x = (this.x + this.step) % this.width;
  }; // draw
}; // Hello
  
function hello_sketch(p5){
  const WIDTH = 800;
  const HEIGHT = WIDTH/4;
  const BACKGROUND = 255;
  const ALPHA = 50;
  const POINT_COLOR = "RoyalBlue";
  
  let HELLO;
 
  p5.setup = function() {
    p5.createCanvas(WIDTH, HEIGHT);
    p5.background(BACKGROUND);
    p5.stroke(POINT_COLOR);
    p5.fill(BACKGROUND);
    HELLO = new Hello(p5, WIDTH, HEIGHT, 50, 5);
  }; // setup

  p5.draw = function() {
    p5.background(BACKGROUND, ALPHA);
    HELLO.draw();
  }; //draw
}; // hello_sketch

new p5(hello_sketch, HELLO_DIV);
