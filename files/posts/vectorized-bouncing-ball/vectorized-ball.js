const TURN_AROUND = -1;


/** vectorized ball */
class Ball {
  /** ball constructor */
  constructor(p5, position, velocity, color, diameter) {
    this.p5 = p5;
    this.position = position;
    this.velocity = velocity;
    this.color = color;
    this.diameter = diameter;
  } // end constructor

  get is_too_far_horizontally() {
    return ((this.position.x < 0) ||
            (this.position.x > this.p5.width));
  } // end is_too_far_horizontally

  get is_too_far_vertically() {
    return ((this.position.y < 0) ||
            (this.position.y > this.p5.height));
  } // end is_too_far_vertically

  move() {
    this.position.add(this.velocity);

    if (this.is_too_far_horizontally) {
      this.velocity.x *= TURN_AROUND;
    }
    if (this.is_too_far_vertically) {
      this.velocity.y *= TURN_AROUND;
    }    
  } // end update

  draw() {
    this.p5.stroke("black");
    this.p5.fill(this.color);
    this.p5.circle(this.position.x, this.position.y, this.diameter);
  } // end draw

  move_and_draw_thine_self() {
    this.move();
    this.draw();
  } // end draw_thine_self
} // end Ball
