const STATIC_NOISE_PIXELS_DIV = "static-2d-noise-graph-pixels";

/** Draw static 2D noise using pixel array
 * Params:
 * - p5: p5 instance object
 */
function static_pixels(p5) {
  const HEIGHT = 400;

  let plotter;
  let slider;
  
  /** setup the canvas
   * - sets pixel density to 1 to make it easier to work with
   * - creates the canvas
   * - creates a slider with a callback to update if it's change
   * - sets up the text attributes to print the slider setting
   * - creates a NoisePlotter object to plot the noise
   * - Turns off the draw loop
  */
  p5.setup = function() {
    p5.pixelDensity(1);

    p5.createCanvas(
      document.getElementById(STATIC_NOISE_PIXELS_DIV).offsetWidth,
      HEIGHT);

    slider = p5.createSlider(SLIDER.min,
                             SLIDER.max,
                             SLIDER.default_value,
                             SLIDER.step_size);
    slider.style("width", "500px");

    slider.input(() => p5.redraw());

      p5.fill("white");
      p5.stroke("white");
      p5.textAlign(p5.CENTER);
      p5.textSize(32);
      p5.noStroke()

    plotter = new NoisePlotter(p5, slider);

      p5.noLoop();
    } // end setup
  /** draw the noise */
    p5.draw = function() {
      plotter.draw();
      // add a label to show the amount the noise changes
      p5.text(`Noise Change: ${slider.value().toFixed(3)}`,
              p5.width/2 , p5.height - 10);
    } // end draw
} // end static_pixels

new p5(static_pixels, STATIC_NOISE_PIXELS_DIV);
