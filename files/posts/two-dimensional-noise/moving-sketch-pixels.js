/** Draw static 2D noise using pixel array*/
const MOVING_NOISE_DIV = "moving-2d-noise-graph-pixels"

function moving_pixels(p5) {
  const HEIGHT = 400;
  const WIDTH = 500;
  
  let plotter;
  let slider;

  /** creates the canvas */
  p5.setup = function() {
    p5.pixelDensity(1);
    p5.createCanvas(
      WIDTH,
      HEIGHT);
    
    slider = p5.createSlider(SLIDER.min,
                             SLIDER.max,
                             SLIDER.default_value,
                             SLIDER.step_size).parent("moving-slider");
    slider.style("width", "500px");
    
    p5.fill("white");
    p5.stroke("white");
    p5.textAlign(p5.CENTER);
    p5.textSize(32);
    plotter = new MovingNoise({p5:p5, slider:slider,
                               red:102, green:102});
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
