const NOISE_GRAPH_DIV = "noise-graph";

function noise_graph(p5js){
  let X_NOISE_COORDINATE_START = 0;
  let X_NOISE_COORDINATE_STEP_SIZE = 0.01;

  // set up the slider to change the step-size
  const MINIMUM_NOISE_COORDINATE_STEP_SIZE = 0;
  const MAXIMUM_NOISE_COORDINATE_STEP_SIZE = 1;
  const SLIDER_WIDTH = "500px";
  
  let slider;
  let DEFAULT_NOISE_COORDINATE_STEP_SIZE = X_NOISE_COORDINATE_STEP_SIZE;
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
    slider.style("width", SLIDER_WIDTH);
  } // setup

  // draw the noise graph
  p5js.draw = function() {
    p5js.background(BACKGROUND_COLOR, OPACITY);
    p5js.noFill();
    p5js.stroke(LINE_COLOR);
    let noise_step_size = slider.value();
    let y;

    // begin one graph plot
    p5js.beginShape();

    for (let x = 0; x < p5js.width; x++) {

    y = p5js.noise(X_NOISE_COORDINATE_START + x * noise_step_size)
      * p5js.height;
    p5js.vertex(x, y);
    
  }
    p5js.endShape();
  // end one graph plot

  // move the input to the noise function over one step
    X_NOISE_COORDINATE_START += noise_step_size;

    p5js.textSize(32);
    p5js.textAlign(p5js.CENTER);
    p5js.fill("white");
    p5js.noStroke()
    p5js.rect(p5js.width/2 + 20, p5js.height - 35 , 250, 30);
    p5js.fill("black");
    p5js.text(`Noise Change: ${slider.value().toFixed(3)}`,
                p5js.width/2 , p5js.height - 10);
  } // end draw
} // end noise_graph

new p5(noise_graph, NOISE_GRAPH_DIV);
