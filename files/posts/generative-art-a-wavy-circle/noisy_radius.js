const NOISY_FADER_DIV = "noisy-fader-20091e70";

class NoisyRadius {
  _noise_coordinate = 0;

  constructor(scale, p5, noise_step=0.005) {
    this.scale = scale;
    this.noise_step = noise_step;
    this.p5 = p5;
  }; // constructor

  get noise_coordinate() {
    this._noise_coordinate += this.noise_step;
    return this._noise_coordinate;
  }; // noise_coordinate

  get length() {
    this._length = (this.p5.noise(this.noise_coordinate)
                    * this.scale) + 1;
    return this._length;
  }; // length
}; // NoisyRadius

function noisy_fader_sketch(p5) {
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

    const radius = new NoisyRadius(RADIUS, p5);
    const circulator = new Circulator(1, CENTER_X, CENTER_Y, radius, p5);
  
    fader = new HSLFader(circulator, p5);
  }; // setup

  p5.draw = function() {
    fader.draw();
  }; // draw
  
}; // noisy-fader-sketch

new p5(noisy_fader_sketch, NOISY_FADER_DIV);
