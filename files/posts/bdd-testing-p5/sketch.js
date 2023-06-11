BDD_SKETCH_DIV = "6a5fb18a-bdd-sketch"

const CHANNELS = {
  RED: 0,
  GREEN: 1,
  BLUE: 2,
  ALPHA: 3,
  MAXIMUM: 255,
  MINIMUM: 0
};


function flashing_square(p5js) {
  const SIZE = 500;
  
  let color_increaser;

p5js.setup = function() {
  p5js.createCanvas(SIZE, SIZE);
  p5js.background("black");
  color_increaser = new ColorIncreaser(
    1,
    p5js.color(
      CHANNELS.MINIMUM,
      CHANNELS.MINIMUM,
      CHANNELS.MINIMUM,
      CHANNELS.MAXIMUM));
}

p5js.draw = function() {
  p5js.background(color_increaser.color)
  color_increaser.increase()
}

} // end flashing_rectangle

class ColorIncreaser {
  constructor(color_increment, color) {
    this.color_increment = color_increment;
    this.color = color;
  }// end constructor

  increase() {
    this.color.levels[CHANNELS.RED] += this.color_increment;

    if (this.color.levels[CHANNELS.RED] > CHANNELS.MAXIMUM) {
      this.color.levels[CHANNELS.RED] = CHANNELS.MINIMUM;
      this.color.levels[CHANNELS.GREEN] += this.color_increment;
    }

    if (this.color.levels[CHANNELS.GREEN] > CHANNELS.MAXIMUM) {
      this.color.levels[CHANNELS.GREEN] = CHANNELS.MINIMUM;
      this.color.levels[CHANNELS.BLUE] += this.color_increment;
    }

    if (this.color.levels[CHANNELS.BLUE] > CHANNELS.MAXIMUM) {
      this.color.levels[CHANNELS.BLUE] = CHANNELS.MINIMUM;
    }
  } // end increase
} // end ColorIncreaser

if (typeof module != "undefined") {
  module.exports = ColorIncreaser;
}
new p5(flashing_square, BDD_SKETCH_DIV)
