const CIRCLE_DIV = "hard-circle";

function circle(p5){
  const DEGREES_IN_A_CIRCLE = 360;
  const RADIUS = 100;
  const SMALL_DIAMETER = 10;
  const STEP = 5;
  const TO_RADIANS = (2 * Math.PI)/ DEGREES_IN_A_CIRCLE;
  const WIDTH = 3 * RADIUS;
  
  let center_x;
  let center_y;
  let slider;;
  let start = 0
  
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
    for (let angle=start; angle <= DEGREES_IN_A_CIRCLE + start; angle += slider.value()) {
      radians = angle * TO_RADIANS;
      x = center_x + RADIUS * Math.cos(radians);
      y = center_y + RADIUS * Math.sin(radians);
      p5.line(center_x, center_y, x, y);
      p5.circle(x, y, SMALL_DIAMETER);
      p5.background(255, 10);
    } // end for
    start = (start + STEP) % 360 ;
  } // end draw
} // end circle

let circle_p5 = new p5(circle, CIRCLE_DIV)
