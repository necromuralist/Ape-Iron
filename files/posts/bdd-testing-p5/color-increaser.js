const CHANNELS = {
  RED: 0,
  GREEN: 1,
  BLUE: 2,
  ALPHA: 3,
  MAXIMUM: 255,
  MINIMUM: 0
};

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
    };

    if (this.color.levels[CHANNELS.GREEN] > CHANNELS.MAXIMUM) {
      this.color.levels[CHANNELS.GREEN] = CHANNELS.MINIMUM;
      this.color.levels[CHANNELS.BLUE] += this.color_increment;
    };

    if (this.color.levels[CHANNELS.BLUE] > CHANNELS.MAXIMUM) {
      this.color.levels[CHANNELS.BLUE] = CHANNELS.MINIMUM;
    };
  } // end increase

  next() {
    this.increase();
    return this.color;
  };  //end next
}; // end ColorIncreaser

if (typeof module != "undefined") {
  module.exports = ColorIncreaser;
};
