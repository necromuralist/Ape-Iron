const SPIRAL_DIV = "hard-spiral";

function spiral(p5){
  const DEGREES_IN_A_CIRCLE = 360;
  const RADIUS_LIMIT = 400;
  const SMALL_DIAMETER = 5;
  const STEP = 5;
  const TO_RADIANS = (2 * Math.PI)/ DEGREES_IN_A_CIRCLE;
  const WIDTH = 3 * RADIUS_LIMIT;
  const ROTATIONS = DEGREES_IN_A_CIRCLE * 50;
  
  let center_x;
  let center_y;
  let end = ROTATIONS;
  let slider;
  let start = 0;
  let radius = 0;
  let increment = 1;

  
  p5.setup = function() {
    p5.createCanvas(WIDTH, 400);
    p5.background("white");
    p5.stroke("black");
    p5.fill("black");
    center_x = p5.width/2;
    center_y = p5.height/2;
    slider = p5.createSlider(
      1,
      364,
      2,
      1);
slider.style("width", "500px");
  } // end setup

  
  p5.draw = function() {
    for (let angle=start; angle <= end; angle += increment) {
      radians = angle * TO_RADIANS;
      x = center_x + radius * Math.cos(radians);
      y = center_y + radius * Math.sin(radians);
      p5.circle(x, y, SMALL_DIAMETER);
      //p5.background(255, 5);
      radius = radius + increment;
      if (radius > p5.width || radius < 0) {
        increment *= -1;
        p5.background(255, 10);
      }
    } // end for
    //start = (start + STEP) % DEGREES_IN_A_CIRCLE * 50 ;

    //p5.noLoop();
  } // end draw
} // end circle

let spiral_p5 = new p5(spiral, SPIRAL_DIV)
