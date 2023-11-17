const CIRCLE_DIV = "circle-a318e46e";

function circle_sketch(p5) {
  // the size of the canvas and the color of the circles
  const WIDTH = 500;
  const HEIGHT = WIDTH;
  const POINT_COLOR = "RoyalBlue";
  const CENTER_X = WIDTH/2;
  const CENTER_Y = HEIGHT/2;
  const RADIUS = WIDTH/2;
  const ANGLE_CHANGE = 1;
  const TO_RADIANS = Math.PI/180;

  let angle = 0;

  let x_1, y_1, x_2, y_2;

  p5.setup = function() {
    p5.createCanvas(WIDTH, HEIGHT);
    p5.background("white");
    p5.stroke(POINT_COLOR);
    p5.fill(POINT_COLOR);
  }; //setup
  
  p5.draw = function() {
    theta = angle * TO_RADIANS;
    x_1 = CENTER_X + (RADIUS * Math.cos(theta));
    y_1 = CENTER_Y + (RADIUS * Math.sin(theta));

    theta_opposite = theta + Math.PI;

    x_2 = CENTER_X + (RADIUS * Math.cos(theta_opposite));
    y_2 = CENTER_Y + (RADIUS * Math.sin(theta_opposite));
    p5.line(x_1, y_1, x_2, y_2);
    angle += ANGLE_CHANGE;
  }; //setup
}; // circle_sketch

new p5(circle_sketch, CIRCLE_DIV);
