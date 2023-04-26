const NOISE_GRAPH_DIV = "noise-graph";

function noise_graph(p5js){
  let STARTING_X_NOISE_COORDINATE = 0;
  let X_NOISE_COORDINATE_STEP_SIZE = 0.01;

  // set up the slider to change the step-size
  let slider;
  let MINIMUM_NOISE_COORDINATE_STEP_SIZE = 0;
  let MAXIMUM_NOISE_COORDINATE_STEP_SIZE = 0.25;
  let DEFAULT_NOISE_COORDINATE_STEP_SIZE = 0.01;
  let SLIDER_STEP_SIZE = 0;

  // define some colors
  let BLACK = 0;
  let WHITE = 255;
  let OPACITY = 20;
  let LINE_COLOR = BLACK;
  let BACKGROUND_COLOR = WHITE;

  // create the canvas and the slider
  p5js.setup = function() {
    let canvas = p5js.createCanvas(
      document.getElementById(NOISE_GRAPH_DIV).offsetWidth, 400);
    p5js.stroke(LINE_COLOR);
    p5js.noFill();

    slider = p5js.createSlider(
      MINIMUM_NOISE_COORDINATE_STEP_SIZE,
      MAXIMUM_NOISE_COORDINATE_STEP_SIZE,
      DEFAULT_NOISE_COORDINATE_STEP_SIZE,
      SLIDER_STEP_SIZE);
    slider.style("width", "100px");
  } // setup

  // draw the noise graph
  p5js.draw = function() {
  p5js.background(BACKGROUND_COLOR, OPACITY);
  let x_noise_coordinate = STARTING_X_NOISE_COORDINATE;
  let noise_step_size = slider.value();

  // begin one graph plot
  p5js.beginShape();
  
  for (let x = 0; x < p5js.width; x++) {
    let y = p5js.noise(x_noise_coordinate) * p5js.height;
    p5js.vertex(x, y);
    x_noise_coordinate += noise_step_size;
  } 
  p5js.endShape();
  // end one graph plot

  // move the input to the noise function over one step
  STARTING_X_NOISE_COORDINATE += noise_step_size;
  } // end draw
} // end noise_graph

new p5(noise_graph, NOISE_GRAPH_DIV);