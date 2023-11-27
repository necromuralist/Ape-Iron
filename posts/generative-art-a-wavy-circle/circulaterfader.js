const HSL_FADER_DIV = "hsl-fader-42232bf1";

class HSLFader {
  _increment = 1;
  _stroke_color;
  _next_color
  
  constructor(circulator, p5,  hue=225, saturation=72.7, lightness=56.9) {
    this.circulator = circulator;
    this.p5 = p5;
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
  }; // constructor

  get increment() {
    let lightness = this.p5.lightness(this.stroke_color);
    if (lightness >= 100) {
      this._increment = -1;
    } else if (lightness <= 50) {
      this._increment = 1;
    }; // if-else-if

    return this._increment;
  }; // increment

  get stroke_color() {
    if (!this._stroke_color) {
      this.p5.colorMode(this.p5.HSL);
      this._stroke_color = this.p5.color(this.hue,
                                         this.saturation,
                                         this.lightness);
    }; // if
    return this._stroke_color;
  }; // stroke_color

  get next_color() {
    this._stroke_color = this.p5.color(
      this.hue, this.saturation,
      this.p5.lightness(this.stroke_color) + this.increment
    )

    return this.stroke_color;
  }; // next-color

  draw() {
    this.p5.stroke(this.next_color);
    this.circulator.draw();
  }; // draw
}; // CirculaterFader

function hsl_fader_sketch(p5) {
  const WIDTH = 500;
  const HEIGHT = WIDTH;
  const POINT_COLOR = "RoyalBlue";
  const CENTER_X = WIDTH/2;
  const CENTER_Y = HEIGHT/2;
  const RADIUS = WIDTH/2;

  let fader;

  p5.setup = function() {
    p5.createCanvas(WIDTH, HEIGHT);
    p5.background("white");
    p5.stroke(POINT_COLOR);
    p5.fill(POINT_COLOR);

    const radius = new ConstantRadius(RADIUS);
    const circulator = new Circulator(1, CENTER_X, CENTER_Y, radius, p5);
  
    fader = new HSLFader(circulator, p5);
  }; // setup

  p5.draw = function() {
    fader.draw();
  }; // draw

}; // hsl-fader-sketch

new p5(hsl_fader_sketch, HSL_FADER_DIV);
