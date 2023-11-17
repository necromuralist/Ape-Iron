const CIRCULATOR_DIV = "circulator-50136a19";

class Circulator {
  _to_radians;
  
  constructor(angle_increment, center_x, center_y, radius, p5) {
    this.angle = 0;
    this.angle_increment = angle_increment;
    this.center_x = center_x;
    this.center_y = center_y;
    this.radius = radius;
    this.p5 = p5;
  }; // constructor

  get to_radians() {
    if (!this._to_radians) {
      this._to_radians = Math.PI/180;
    };
    return this._to_radians;
  }; // to-radians
  
  get theta() {
    return this.angle * this.to_radians;
  }; // theta

  get theta_opposite() {
    return this.theta + Math.PI;
  }; // theta-opposite

  get x_start() {
    return this.center_x + this.radius * Math.cos(this.theta);
  }; // x-start

  get y_start() {
    return this.center_y + this.radius * Math.sin(this.theta);
  }; // y-start

  get x_end() {
    return this.center_x + this.radius * Math.cos(this.theta_opposite);
  }; // x-end

  get y_end() {
    return this.center_y + this.radius * Math.sin(this.theta_opposite);
  }; // y-end

  draw() {
    this.p5.line(this.x_start, this.y_start, this.x_end, this.y_end);
    this.angle += this.angle_increment;
  }; // draw
}; // Circulator

const WIDTH = 500;
const HEIGHT = WIDTH;
const POINT_COLOR = "RoyalBlue";
const CENTER_X = WIDTH/2;
const CENTER_Y = HEIGHT/2;
const RADIUS = WIDTH/2;
  
function circulator_sketch(p5) {
  let circulator;

  p5.setup = function() {
    p5.createCanvas(WIDTH, HEIGHT);
    p5.background("white");
    p5.stroke(POINT_COLOR);
    p5.fill(POINT_COLOR);
    circulator = new Circulator(1, CENTER_X, CENTER_Y, RADIUS, p5);
  }; // setup
  
  p5.draw = function() {
    circulator.draw();
  }; // draw
}// circulator_sketch

new p5(circulator_sketch, CIRCULATOR_DIV);
