const CIRCULATER_FADER_DIV = "circulater-fader-42232bf1";

class CirculaterFader {
  _increment = 1;
  _stroke_color;
  
  constructor(circulator, p5,  stroke_color) {
    this.circulator = circulator;
    this.p5 = p5;
    this._stroke_color = stroke_color;
  }; // constructor

  get increment() {
    let blue = this.p5.blue(this._stroke_color);
    if (blue >= 255) {
      this._increment = -1;
    } else if (blue <= 0) {
      this._increment = 1;
    }; // if-else-if

    return this._increment;
  }; // increment

  get stroke_color() {
    if (!this._stroke_color) {
      this._stroke_color = this.p5.color(65, 105, 225);
    } else {
      this._stroke_color.setBlue(
        (this.p5.blue(this._stroke_color) + this.increment));
      this._stroke_color.setRed(
        (this.p5.red(this._stroke_color) + this.increment));
      this._stroke_color.setGreen(
        (this.p5.green(this._stroke_color) + this.increment));
    }; // if-else
    return this._stroke_color;
  }; // stroke_color

  draw() {
    this.p5.stroke(this.stroke_color);
    this.circulator.draw();
  }; // draw
}; // CirculaterFader

function circulater_fader_sketch(p5) {
  const WIDTH = 500;
  const HEIGHT = WIDTH;
  const POINT_COLOR = "RoyalBlue";
  const CENTER_X = WIDTH/2;
  const CENTER_Y = HEIGHT/2;
  const RADIUS = WIDTH/2;

  let fader;

  p5.setup = function() {
    let color = p5.color(POINT_COLOR);
    p5.createCanvas(WIDTH, HEIGHT);
    p5.background("white");
    p5.stroke(color);
    p5.fill(color);
    const circulator = new Circulator(1, CENTER_X, CENTER_Y, RADIUS, p5);
   
    fader = new CirculaterFader(circulator, p5, color);
  }; // setup

  p5.draw = function() {
    fader.draw();
  }; // draw

}; // circulater-fader-sketch

new p5(circulater_fader_sketch, CIRCULATER_FADER_DIV);
