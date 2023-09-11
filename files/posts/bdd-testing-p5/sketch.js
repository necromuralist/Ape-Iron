BDD_SKETCH_DIV = "6a5fb18a-bdd-sketch"

function flashing_square(p5js) {
  const SIZE = 500;

  let color_increaser;

p5js.setup = function() {
  p5js.createCanvas(SIZE, SIZE);
  color_increaser = new ColorIncreaser(
    1,
    p5js.color(
      CHANNELS.MINIMUM,
      CHANNELS.MINIMUM,
      CHANNELS.MINIMUM,
      CHANNELS.MAXIMUM));
  p5js.background(color_increaser.color);
};

p5js.draw = function() {
  p5js.background(color_increaser.next());
};

} // end flashing_rectangle

new p5(flashing_square, BDD_SKETCH_DIV)
