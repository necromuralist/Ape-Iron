/** Draw static 2D noise using pixel array*/
const MOVING_NOISE_DIV = "moving-2d-noise-graph-pixels"


function moving_pixels(p5) {
  const WIDTH = 1000;
  const HEIGHT = 400;
  
  let slider;
  let plotter;

  /** creates the canvas */
  p5.setup = function() {
    p5.pixelDensity(1);
    p5.createCanvas(
      document.getElementById(MOVING_NOISE_DIV).offsetWidth,
      HEIGHT);
    
    slider = p5.createSlider(0, 1, 0.01, 0);
    slider.style("width", "500px");
    p5.fill("white");
    p5.textAlign(p5.CENTER);
    p5.textSize(32);
    p5.noStroke()
    plotter = new MovingNoise(p5, slider, 102, 102);
  } // end setup

  /** draw the noise */
  p5.draw = function() {
    plotter.draw();

    // add a label to show the amount the noise changes
    p5.text(`Noise Change: ${slider.value().toFixed(3)}`,
            p5.width/2 , p5.height - 10);
  } // end draw

} // end static_pixels

let move_p5 = new p5(moving_pixels, MOVING_NOISE_DIV);
