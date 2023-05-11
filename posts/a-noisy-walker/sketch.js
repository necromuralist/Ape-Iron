NOISY_WALKER_DIV = "noisy-walker";

/** a sketch to make a circle-drawing walker that moves with noise */
function noise_walk(p5js) {
  let walker;

  /** setup the canvas, walker, and slider */
  p5js.setup = function() {  
    let medium_teal_blue = p5js.color(0, 89, 179, 100);
    
    p5js.createCanvas(
      document.getElementById(NOISY_WALKER_DIV).offsetWidth,
      400);
    
    // a slider to let the user change how much the noise is changing
    slider = p5js.createSlider(0, 1, 0.01, 0);
    slider.style("width", "500px");
    
    walker = new NoiseWalker({p5: p5js,
                              slider: slider,
                              fill_color:medium_teal_blue});
    p5js.background("white");
  } // end setup
  
  /** move and draw the walker */
  p5js.draw = function() {
    walker.walk();
    walker.show_yourself();
  } // end draw
} // end noise_walker

new p5(noise_walk, NOISY_WALKER_DIV);
