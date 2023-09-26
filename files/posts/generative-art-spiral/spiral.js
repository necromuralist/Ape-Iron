const SPIRAL_DIV = "spiral-0a168ba9";

const SPIRAL_ANGLE_SLIDER = "angle-slider-0a168ba9";
const SPIRAL_RADIUS_SLIDER = "radius-slider-0a168ba9";
const SPIRAL_CIRCLE_SLIDER = "circle-slider-0a168ba9";

const SPIRAL_ANGLE_TEXT = "#angle-text-0a168ba9";
const SPIRAL_RADIUS_TEXT = "#radius-text-0a168ba9";
const SPIRAL_CIRCLE_TEXT = "#circle-text-0a168ba9";

class SliderSettings {
  check_rep(){
    if (!this.min) {
      throw Error(`min must be a number not ${this.min}`);
    }
  }
}
  
const ANGLE_SLIDER = {
  min: 0,
  max: 40,
  default_value: 5,
  step_size: 0,
  label: "Angle Increment",
  precision: 2,
  slider_div: SPIRAL_ANGLE_SLIDER,
  caption_div: SPIRAL_ANGLE_TEXT
}

const RADIUS_SLIDER = {
  min: 0,
  max: 20,
  default_value: 1,
  step_size: 0,
  label: "Radius Increment",
  precision: 2,
  slider_div: SPIRAL_RADIUS_SLIDER,
  caption_div: SPIRAL_RADIUS_TEXT
}

const CIRCLE_SLIDER = {
  min: 1,
  max: 100,
  default_value: 1,
  step_size: 0,
  label: "Point Diameter",
  precision: 2,
  slider_div: SPIRAL_CIRCLE_SLIDER,
  caption_div: SPIRAL_CIRCLE_TEXT
}

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

class Slidini {
  _slider = null;
  _caption = null;

  constructor(settings, p5) {
    this.settings = settings;
    this.p5 = p5;
  } // constructor

  get slider() {
    if (this._slider === null) {
      // create the slider
      this._slider = this.p5.createSlider(
        this.settings.min,
        this.settings.max,
        this.settings.default_value,
        this.settings.step_size,
      );
  
      // attach it to the div tag
      this._slider.parent(this.settings.slider_div);
  
      // set the callback to change label on update
      this._slider.input(() => this.update_caption());
  
      // add the label to the slider
      this.update_caption();
    }
    return this._slider;
  }

  get caption() {
    if (this._caption === null) {
      this._caption = this.p5.select(this.settings.caption_div);
    }
    return this._caption;
  }

  update_caption() {
    this.caption.html(
      `${this.settings.label}: ` +
        `${this.slider.value().toFixed(this.settings.precision)}`);
  } // update_caption
} // slidini

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

  angle_slider = new Slidini(ANGLE_SLIDER, p5);  
  radius_slider = new Slidini(RADIUS_SLIDER, p5);
  circle_slider = new Slidini(CIRCLE_SLIDER, p5);

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
