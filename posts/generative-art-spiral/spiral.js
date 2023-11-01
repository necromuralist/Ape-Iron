import { CaptionSettings, SliderSettings } from "../../javascript/slider.js";
import { Slidini } from "../../javascript/slidini.js";
import { Validator } from "../../javascript/validator.js";



const SPIRAL_DIV = "spiral-0a168ba9";

const SPIRAL_ANGLE_SLIDER = "angle-slider-0a168ba9";
const SPIRAL_RADIUS_SLIDER = "radius-slider-0a168ba9";
const SPIRAL_CIRCLE_SLIDER = "circle-slider-0a168ba9";

const SPIRAL_ANGLE_TEXT = "angle-text-0a168ba9";
const SPIRAL_RADIUS_TEXT = "radius-text-0a168ba9";
const SPIRAL_CIRCLE_TEXT = "circle-text-0a168ba9";

const VALIDATOR = new Validator(document);
  
const ANGLE_SLIDER = new SliderSettings(
  0,
  40,
  5,
  0,
  SPIRAL_ANGLE_SLIDER,
  VALIDATOR
);
  
const ANGLE_CAPTION = new CaptionSettings(
  "Angle Increment",
  2,
  SPIRAL_ANGLE_TEXT,
  VALIDATOR
);

ANGLE_SLIDER.check_rep();
ANGLE_CAPTION.check_rep();

const RADIUS_SLIDER = new SliderSettings(
  0,
  20,
  1,
  0,
  SPIRAL_RADIUS_SLIDER,
  VALIDATOR
);

const RADIUS_CAPTION = new CaptionSettings(
  "Radius Increment",
  2,
  SPIRAL_RADIUS_TEXT,
  VALIDATOR
);

RADIUS_SLIDER.check_rep();
RADIUS_CAPTION.check_rep();

const CIRCLE_SLIDER = new SliderSettings(
  1,
  100,
  1,
  0,
  SPIRAL_CIRCLE_SLIDER,
  VALIDATOR
);

const CIRCLE_CAPTION = new CaptionSettings(
  "Point Diameter",
  2,
  SPIRAL_CIRCLE_TEXT,
  VALIDATOR
);

CIRCLE_SLIDER.check_rep();
CIRCLE_CAPTION.check_rep();

class Spiralizer {
  // geometry
  degrees_in_a_circle = 360;
  to_radians = (2 * Math.PI)/ this.degrees_in_a_circle;

  // the starting values for the circles
  radius = 1;
  angle = 0;

  // the center of our sketch (and the circles)
  center_x;
  center_y;

  constructor(p5, center_x, center_y, maximum_radius,
              angle_slider, radius_slider, circle_slider){
    this.p5 = p5;
    this.center_x = center_x;
    this.center_y = center_y;
    this.maximum_radius = maximum_radius;
  
    // the amount to move the points on the circle as they're drawn
    this.angle_increment = angle_slider;
    this.radius_increment = radius_slider;
  
    // the size of the circle to draw  the circles
    this.point_diameter = circle_slider;
  } // constructor

  draw() {
    let radians, x, y;
    
    radians = this.angle * this.to_radians;
    x = this.center_x + this.radius * Math.cos(radians);
    y = this.center_y + this.radius * Math.sin(radians);
    this.p5.circle(x, y, this.point_diameter.value());
  
  
    this.radius += this.radius_increment.value();
    this.angle += this.angle_increment.value();
  
    if (this.radius >= this.maximum_radius) {
      this.radius = this.radius_increment.value();
    }
  } // end draw

  reset() {
    this.radius = this.radius_increment.value();
    this.angle = 0;
  } // end reset

} // spiralizer


function spiral_sketch(p5) {
  // the size of the canvas and the color of the circles
  const WIDTH = 500;
  const HEIGHT = WIDTH;
  const POINT_COLOR = "RoyalBlue";
  
  let spiralizer;
  let angle_slider;
  let radius_slider;
  let circle_slider;

  p5.setup = function(){
    p5.createCanvas(WIDTH, HEIGHT);
    p5.background("white");
    p5.stroke(POINT_COLOR);
    p5.fill(POINT_COLOR);

  angle_slider = new Slidini(ANGLE_SLIDER, ANGLE_CAPTION, p5);  
  radius_slider = new Slidini(RADIUS_SLIDER, RADIUS_CAPTION, p5);
  circle_slider = new Slidini(CIRCLE_SLIDER, CIRCLE_CAPTION, p5);

  spiralizer = new Spiralizer(p5, WIDTH/2, HEIGHT/2, WIDTH/2,
                              angle_slider.slider,
                              radius_slider.slider,
                              circle_slider.slider);
  
  } // end setup

  p5.draw = function() {
    spiralizer.draw();
    p5.background(255, 5);
  }// end draw

  p5.doubleClicked = function() {
    spiralizer.reset();
    p5.background("white");
  } // end doubleClicked
} // spiral_sketch

new p5(spiral_sketch, SPIRAL_DIV);
