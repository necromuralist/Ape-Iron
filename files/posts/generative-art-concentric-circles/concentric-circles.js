const CONCENTRIC_CIRCLES_DIV = "03d2e681-concentric-circles";

function concentric_circles(p5){
  const DEGREES_IN_A_CIRCLE = 360;
  const TO_RADIANS = (2 * Math.PI)/ DEGREES_IN_A_CIRCLE;
  const WIDTH = 500;
  const HEIGHT = WIDTH;
  const POINT_DIAMETER = 1;

  let radius = 5;
  let step = 10;
  let center_x;
  let center_y;

  p5.setup = function(){
    p5.createCanvas(WIDTH, HEIGHT);
    p5.background("white");
    p5.stroke("black");
    p5.fill("black");
    center_x = WIDTH/2;
    center_y = HEIGHT/2;
    p5.frameRate(10);
  }
  
  p5.draw = function() {
    let radians;
    let x;
    let y;
  
    for (let angle = 0; angle < DEGREES_IN_A_CIRCLE; angle += 1){
      radians = angle * TO_RADIANS;
      x = center_x + radius * Math.cos(radians);
      y = center_y + radius * Math.sin(radians);
      p5.circle(x, y, POINT_DIAMETER);
    } // end for
  
    radius += step;
    p5.background(255, 75);

    if (radius >= (p5.width/2 - step) || radius < 0) {
      step *= -1;
    }
  }// end draw
} // end concentric_circles

let concentric_p5 = new p5(concentric_circles, CONCENTRIC_CIRCLES_DIV);
