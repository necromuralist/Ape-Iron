const BOUNCY_SKETCH_DIV = "vectorized-bouncing-ball";

/** sketch for a bouncing ball using vectors */
function bouncy_sketch(p5) {
  const DIAMETER = 50;
  const HEIGHT = 400;
  const BLUE = p5.color(77, 166, 255);
  const RED = p5.color(175, 0, 42);
  
  let position;
  let velocity;
  let blue_ball;
  let red_ball;
 

  /** setup the sketch */
  p5.setup = function() {
    p5.createCanvas(
      document.getElementById(BOUNCY_SKETCH_DIV).offsetWidth,
      HEIGHT
    );
    position = p5.createVector(p5.width/2, p5.height/2);
    velocity = p5.createVector(2, 5);

    position_red = position.copy();
    velocity_red = p5.createVector(-2.5, -5.5);

    blue_ball = new Ball(p5, position, velocity, BLUE, DIAMETER);
    red_ball = new Ball(p5, position_red, velocity_red, RED, DIAMETER);
  } // end setup

  /** draw the ball */
  p5.draw = function() {
    p5.background(255, 100);
    blue_ball.move_and_draw_thine_self();
    red_ball.move_and_draw_thine_self();
  } // end draw
} // end bouncy_sketch

let bouncy_p5 = new p5(bouncy_sketch, BOUNCY_SKETCH_DIV);
