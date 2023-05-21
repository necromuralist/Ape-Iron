const STATIC_NOISE_GRAPH_DIV = "simple-2d-noise-graph";
function simple_sketch(p5) {

  p5.setup = function() {
    p5.createCanvas(
      document.getElementById(STATIC_NOISE_GRAPH_DIV).offsetWidth,
      400);
  } //end setup
  

  p5.draw = function() {
    let offset_x = 0.0;
  
      p5.loadPixels();
  
      for (let x = 0; x < p5.width; x++) {
        let offset_y = 0.0;
  
        for (let y = 0; y < p5.height; y++) {
          let intensity = p5.noise(offset_x, offset_y) * 255
          p5.set(x, y, p5.floor(intensity));
          offset_y += 0.01;
        } //end y-for
        offset_x += 0.01;
      } // end x-for
  
      p5.updatePixels();
      p5.noLoop();
    } // end draw
}// end simple_sketch

new p5(simple_sketch, STATIC_NOISE_GRAPH_DIV);
