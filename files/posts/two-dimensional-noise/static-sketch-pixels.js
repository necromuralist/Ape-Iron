const STATIC_NOISE_PIXELS_DIV = "static-2d-noise-graph-pixels";
/** Draw static 2D noise using pixel array*/
function static_pixels(p5) {
  const HEIGHT = 400;

  let plotter;

  /** creates the canvas */
  p5.setup = function() {
    p5.pixelDensity(1);
    p5.createCanvas(
      document.getElementById(STATIC_NOISE_PIXELS_DIV).offsetWidth,
      HEIGHT);
    plotter = new NoisePlotter(p5);
  } // end setup

  /** draw the noise */
  p5.draw = function() {
    plotter.draw();
    p5.noLoop();
  } // end draw

} // end static_pixels

new p5(static_pixels, STATIC_NOISE_PIXELS_DIV);
