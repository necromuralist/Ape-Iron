/** The Random Walker */
class Walker {
  /** Create the walker
   * @param {integer}: x - x-coordinate
   * @param {integer}: y - y-coordinate
   * @param {number}: limit - minimum and maximum for the random
   * @param {integer}: p5 - p5 instance

   * As a side effect uses x and y to create `this.position`, a vector
   */
  constructor(x, y, limit, p5) {
    this.position = p5.createVector(x, y);
    this.limit = limit;
    this.p5 = p5
  } // end constructor

  /** The next random step
      @returns: p5.Vector
  */
  get next_step() {
    return p5.Vector.random2D().mult(this.limit);
  } // end get next_step

  /** Add the ~next_step~ vector to the ~position~ vector, updating in-place */
  update() {
    this.position.add(this.next_step);
  } // end update
  

  /** Draw the position as a point */
  show() {
      this.p5.stroke(0, 0, 200, 100);
      this.p5.strokeWeight(5);
      this.p5.point(this.position.x, this.position.y);
    } // end show

  /**Convenience method to call ~update~ and ~show~ */
  move_and_show() {
    this.update();
    this.show();
  } // end move_and_show
} // end Walker
