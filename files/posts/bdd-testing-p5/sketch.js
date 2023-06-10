BDD_SKETCH_DIV = "6a5fb18a-bdd-sketch"
function flashing_square(p5js) {
  const RED = 0;
  const BLUE = 1;
  const GREEN = 2;
  const RGB_MAXIMUM = 255;
  const RGB_MINIMUM = 0;
  const SIZE = 500;
  
  let fill_color;
  let color_increment = 1;

p5js.setup = function() {
  p5js.createCanvas(SIZE, SIZE);
  p5js.background("black");
  fill_color = p5js.color(RGB_MINIMUM,
                          RGB_MINIMUM,
                          RGB_MINIMUM,
                          RGB_MAXIMUM);
  p5js.noStroke();
}

p5js.draw = function() {
  p5js.fill(fill_color);
  p5js.square(0, 0, SIZE);

  fill_color.levels[RED] += color_increment;
  
  if (fill_color.levels[RED] > RGB_MAXIMUM) {
    fill_color.levels[RED] = RGB_MINIMUM;
    fill_color.levels[BLUE] += color_increment;
  }
  
  if (fill_color.levels[BLUE] > RGB_MAXIMUM) {
    fill_color.levels[BLUE] = RGB_MINIMUM;
    fill_color.levels[GREEN] = (
      fill_color.levels[GREEN] + color_increment) % RGB_MAXIMUM;
  }
} // end draw

} // end flashing_rectangle

class ColorIncreaser {
  constructor(color_increment, color) {
    this.color_increment = color_increment;
    this.color = color;
  }// end constructor
} // end ColorIncreaser

if (typeof module != "undefined") {
  module.exports = ColorIncreaser;
}
new p5(flashing_square, BDD_SKETCH_DIV)
