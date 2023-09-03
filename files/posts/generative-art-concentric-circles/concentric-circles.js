const CONCENTRIC_CIRCLES_DIV = "03d2e681-concentric-circles";

class ConcentricCircles {
  // geometry
  degrees_in_a_circle = 360;
  to_radians = (2 * Math.PI)/ this.degrees_in_a_circle;

  // the starting values for the circles
  radius = 5;
  _step = 5;

  // the center of our sketch (and the circles)
  _center_x;
  _center_y;

  // the size of the circle to draw  the circles
  point_diameter = 1;
  
  constructor(p5, width, height){
    this.p5 = p5;
    this.width = width;
    this.height = height;
  } // constructor

  get center_x() {
    if (this._center_x === undefined) {
      this._center_x = this.width/2;
    }
    return this._center_x;
  }

  get center_y() {
    if (this._center_y === undefined) {
      this._center_y = this.height/2;
    }
    return this._center_y;
  }

  draw() {
    let radians, x, y;
  
    for (let angle = 0; angle < this.degrees_in_a_circle; angle += 1){
        radians = angle * this.to_radians;
        x = this.center_x + this.radius * Math.cos(radians);
        y = this.center_y + this.radius * Math.sin(radians);
        this.p5.circle(x, y, this.point_diameter);
    }
  
    this.radius += this.step;
  }

  get step() {
    if (this.radius > (this.center_x - this._step) || this.radius <= 0) {
        this._step *= -1;
      }
    return this._step
  }

} // Concentric Circles class

function concentric_circles(p5){
  // the size of the canvas and the color of the circles
  const WIDTH = 500;
  const HEIGHT = WIDTH;
  const POINT_COLOR = "RoyalBlue";

  const circles = new ConcentricCircles(p5, WIDTH, HEIGHT);
  
  p5.setup = function(){
    p5.createCanvas(WIDTH, HEIGHT);
    p5.background("white");
    p5.stroke(POINT_COLOR);
    p5.fill(POINT_COLOR);
    p5.frameRate(10);
  } // end setup

  p5.draw = function() {
    circles.draw();
    p5.background(255, 75);
  }// end draw

} // end concentric_circles sketch function

new p5(concentric_circles, CONCENTRIC_CIRCLES_DIV);
