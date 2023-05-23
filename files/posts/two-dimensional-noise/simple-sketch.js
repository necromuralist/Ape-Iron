const STATIC_NOISE_GRAPH_DIV = "simple-2d-noise-graph";

/** Sketch to visualize 2D Noise using `set` */
/*
 * Params:
 * - p5: A p5 instance object
*/
function simple_sketch(p5) {

  /** Create the canvas */
  p5.setup = function() {
    p5.createCanvas(
      document.getElementById(STATIC_NOISE_GRAPH_DIV).offsetWidth,
      400);
  } //end setup

  /** Draw the visualization then stop the loop */
  p5.draw = function() {
    let intensity;
    let column_offset = 0.0;
    let row_offset;

    p5.loadPixels();

    for (let column = 0; column < p5.width; column++) {
      row_offset = 0.0;
    
      for (let row = 0; row < p5.height; row++) {

        let intensity = p5.noise(column_offset, row_offset) * 255;
        p5.set(column, row, intensity);
  
        row_offset += 0.01;
      } //end row-for
    
      column_offset += 0.01;
    } // end column-for

    p5.updatePixels();
    p5.noLoop();
  } // end draw
    
}// end simple_sketch

new p5(simple_sketch, STATIC_NOISE_GRAPH_DIV);
