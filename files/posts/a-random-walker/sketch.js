const WALKER_SKETCH_DIV = "random-walker-sketch";
const HEIGHT = 400;
const STEP_LIMIT = 5;
const WHITE = 255;

/** Sketch of a Random Walk */
function random_walk(p5js){
  let walker;

  /** Initial setup of the canvas and Walker */
  p5js.setup = function() {
      p5js.createCanvas(
        document.getElementById(WALKER_SKETCH_DIV).offsetWidth, HEIGHT);
    walker = new Walker(p5js.width/2, p5js.height/2, STEP_LIMIT, p5js);
    p5js.background(WHITE);
  } // end setup 

  /** Draw a frame */
  p5js.draw = function() {
      walker.move_and_show();
    } // end draw
} // end random_walk

new p5(random_walk, WALKER_SKETCH_DIV);
