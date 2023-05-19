NOISY_WALKER_DIV = "noisy-walker";

/** a sketch to make a circle-drawing walker that moves with noise */
function noise_walk(p5js) {
  const SLIDER_WIDTH = 500;
  const MEDIUM_TEAL_BLUE = p5js.color(0, 89, 179, 100);
  const MEDIUM_TEAL_BLUE_OPAQUE = p5js.color(0, 89, 179);
  let walker;
  let slider;

  /** setup the canvas, walker, and slider */
  p5js.setup = function() {
    p5js.createCanvas(
      document.getElementById(NOISY_WALKER_DIV).offsetWidth,
      400);
  
    // a slider to let the user change how much the noise is changing
    slider = p5js.createSlider(0, 1, 0.01, 0);
    slider.style("width", `${SLIDER_WIDTH}px`);
  
    walker = new NoiseWalker({p5: p5js,
                              slider: slider,
                              fill_color:MEDIUM_TEAL_BLUE});
    p5js.background("white");
  } // end setup

  /** move and draw the walker */
  p5js.draw = function() {
    walker.walk();
    walker.show_yourself();
    p5js.textSize(32);
    p5js.textAlign(p5js.CENTER);
    p5js.fill("white");
    p5js.noStroke()
    p5js.rect(p5js.width/2 + 20, p5js.height - 35 , 250, 30);
    p5js.fill(MEDIUM_TEAL_BLUE_OPAQUE);
    p5js.text(`Noise Change: ${slider.value().toFixed(3)}`,
              p5js.width/2 , p5js.height - 10);
  } // end draw
} // end noise_walker

new p5(noise_walk, NOISY_WALKER_DIV);
