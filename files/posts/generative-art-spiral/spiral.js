const SPIRAL_DIV = "spiral-0a168ba9";

const SPIRAL_ANGLE_SLIDER = "angle-slider-0a168ba9";
const SPIRAL_RADIUS_SLIDER = "radius-slider-0a168ba9";
const SPIRAL_CIRCLE_SLIDER = "circle-slider-0a168ba9";

const SPIRAL_ANGLE_TEXT = "#angle-text-0a168ba9";
const SPIRAL_RADIUS_TEXT = "#radius-text-0a168ba9";
const SPIRAL_CIRCLE_TEXT = "#circle-text-0a168ba9";

const ANGLE_SLIDER = {
  min: 0,
  max: 40,
  default_value: 5,
  step_size: 0,
  label: "Angle Increment",
  precision: 2,
}

const RADIUS_SLIDER = {
  min: 0,
  max: 20,
  default_value: 1,
  step_size: 0,
  label: "Radius Increment",
  precision: 2
}

const CIRCLE_SLIDER = {
  min: 1,
  max: 100,
  default_value: 1,
  step_size: 0,
  label: "Point Diameter",
  precision: 2
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

  

} // spiralizer

class slidini {
  _slider;
  _caption;

  constructor(slider_div_id, caption_div_id, label, p5) {
    this.slider_div_id = slider_div_id;
    this.caption_div_id = caption_div_id;
    this.settings = settings;
  } // constructor

  get slider() {
    if (this._slider === undefined) {
      // create the slider
      this._slider = this.p5.createSlider(
        this.settings.min,
        this.settings.max,
        this.settings.default_value,
        this.settings.step_size,
      );
  
      // attach it to the div tag
      this._slider.parent(this.slider_div_id);
  
      // set the callback to change label on update
      this._slider.input(() => this.update_caption());
    }
    return this._slider;
  }

  get caption() {
    if (this._caption === undefined) {
      this._caption = this.p5.select(this.caption_div_id);
    }
    return this._caption;
  }

  update_caption() {
    this.caption.html(`${this.settings.label}` +
                      `${this.slider.value().toFixed(this.settings.precision)}`)
  } // update_caption
} // slidini

function spiral_sketch(p5) {
  // the size of the canvas and the color of the circles
  const WIDTH = 500;
  const HEIGHT = WIDTH;
  const POINT_COLOR = "RoyalBlue";
  
  let spiralizer;
  let angle_slider, angle_text;
  let radius_slider, radius_text;
  let circle_slider, circle_text;

  p5.setup = function(){
    p5.createCanvas(WIDTH, HEIGHT);
    p5.background("white");
    p5.stroke(POINT_COLOR);
    p5.fill(POINT_COLOR);

  angle_slider = p5.createSlider(
    ANGLE_SLIDER.min,
    ANGLE_SLIDER.max,
    ANGLE_SLIDER.default_value,
    ANGLE_SLIDER.step_size,
  ); // angle increment slider
    
  radius_slider = p5.createSlider(
    RADIUS_SLIDER.min,
    RADIUS_SLIDER.max,
    RADIUS_SLIDER.default_value,
    RADIUS_SLIDER.step_size,
  ); // radius increment slider
  
  circle_slider = p5.createSlider(
    CIRCLE_SLIDER.min,
    CIRCLE_SLIDER.max,
    CIRCLE_SLIDER.default_value,
    CIRCLE_SLIDER.step_size,
  ); // point diameter

  angle_slider.parent(SPIRAL_ANGLE_SLIDER);
  radius_slider.parent(SPIRAL_RADIUS_SLIDER);
  circle_slider.parent(SPIRAL_CIRCLE_SLIDER);

  angle_text = p5.select(SPIRAL_ANGLE_TEXT);
  radius_text = p5.select(SPIRAL_RADIUS_TEXT);
  circle_text = p5.select(SPIRAL_CIRCLE_TEXT);

  spiralizer = new Spiralizer(p5, WIDTH/2, HEIGHT/2, WIDTH/2,
                              angle_slider,
                              radius_slider,
                              circle_slider);
  
  } // end setup

  p5.draw = function() {
    spiralizer.draw();
    p5.background(255, 5);
    angle_text.html(`Angle Increment: ` +
                    `${angle_slider.value().toFixed(ANGLE_SLIDER.precision)}`
                   );
    radius_text.html(`Radius Increment: ` +
                     `${radius_slider.value().toFixed(RADIUS_SLIDER.precision)}`
                    );
    circle_text.html(`Point Diameter: ` +
                     `${circle_slider.value().toFixed(CIRCLE_SLIDER.precision)}`
                    );
  }// end draw

  p5.doubleClicked = function() {
    p5.background("white");
    spiralizer.reset();
  } // end doubleClicked
} // spiral_sketch

new p5(spiral_sketch, SPIRAL_DIV);
