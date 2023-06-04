const CIRCLE_DIV = "hard-circle";

function circle(p5){
  const RADIUS = 100;
  const DEGREES_IN_A_CIRCLE = 360;
  const TO_RADIANS = (2 * Math.PI)/ DEGREES_IN_A_CIRCLE;
  
  let center_x;
  let center_y;
  let start = 0;
  
  p5.setup = function() {
    p5.createCanvas(1000, 400);
    p5.background("white");
    p5.stroke("black");
    center_x = p5.width/2;
    center_y = p5.height/2;
  } // end setup

  
  p5.draw = function() {
    for (let angle=start; angle <= DEGREES_IN_A_CIRCLE + start; angle += 1) {
      radians = angle * TO_RADIANS;
      x = center_x + RADIUS * Math.cos(radians);
      y = center_y + RADIUS * Math.sin(radians);
      p5.circle(x, y, 5);
      p5.background(255, 10);
    } // end for
    start = (start + 5) % 360 ;
  } // end draw
} // end circle

let circle_p5 = new p5(circle, CIRCLE_DIV)
