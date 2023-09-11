const SPIRAL_DIV = "0a168ba9-spiral";

class Spiralizer {
  // geometry
  degrees_in_a_circle = 360;
  to_radians = (2 * Math.PI)/ this.degrees_in_a_circle;

  // the starting values for the circles
  radius = 1;
  radius_increment = 1;
  angle = 0;
  angle_increment = 5;

  // the center of our sketch (and the circles)
  center_x;
  center_y;

  // the size of the circle to draw  the circles
  point_diameter = 1;

  constructor(p5, center_x, center_y, maximum_radius){
    this.p5 = p5;
    this.center_x = center_x;
    this.center_y = center_y;
    this.maximum_radius = maximum_radius;
  } // constructor

  draw() {
    let radians, x, y;
    
    radians = this.angle * this.to_radians;
    x = this.center_x + this.radius * Math.cos(radians);
    y = this.center_y + this.radius * Math.sin(radians);
    this.p5.circle(x, y, this.point_diameter);
  
    this.radius += this.radius_increment;
    this.angle += this.angle_increment;
  
    if (this.radius >= this.maximum_radius) {
      this.radius = 1;
    }
  } // end draw

} // spiralizer


function spiral_sketch(p5) {
  // the size of the canvas and the color of the circles
  const WIDTH = 500;
  const HEIGHT = WIDTH;
  const POINT_COLOR = "RoyalBlue";

  const spiralizer = new Spiralizer(p5, WIDTH/2, HEIGHT/2, WIDTH/2);

  p5.setup = function(){
    p5.createCanvas(WIDTH, HEIGHT);
    p5.background("white");
    p5.stroke(POINT_COLOR);
    p5.fill(POINT_COLOR);
  } // end setup

  p5.draw = function() {
    spiralizer.draw();
    p5.background(255, 5);
  }// end draw
} // spiral_sketch

new p5(spiral_sketch, SPIRAL_DIV);
