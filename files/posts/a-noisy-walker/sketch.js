function noise_walk(p5js) {
  let walker;

  p5js.setup = function() {
    p5js.createCanvas(1000, 400); // creating canvas of size 640 x 240
    walker = new NoiseWalker(p5js); // creating an instance/object of class Walker
    p5js.background("white");
  } // end setup

  p5js.draw = function() {
    walker.walk();
    walker.display();
  }
} // end noise_walker

new p5(noise_walk, "noisy-walker")
