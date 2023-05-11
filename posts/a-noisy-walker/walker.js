/**  a noise-based walker */
class NoiseWalker {
  /** create the Noise Walker
   * @param: p5 - a p5.js instance
   * @param: slider - widget to get the amount of noise offset change
   * @param: stroke_weight: how thick to make the circle line
   * @param: diameter of the circle
   * @param: fill_color: color to fill the circle
   * @param: stroke_color - color for the circle's line
   */
  constructor({p5,
               slider,
               stroke_weight=1,
               diameter=24,
               fill_color="cornflowerblue",
               stroke_color="black"} = {}) {
    let noise_upper_bound = 10**5
    
    this.p5 = p5;
    this.slider = slider;
    this.stroke_weight = stroke_weight;
    this.diameter = diameter;
    this.fill_color = fill_color;
    this.stroke_color = stroke_color;
    
    this.position = p5.createVector(p5.width / 2, p5.height / 2);
    this.noise_offset = p5.createVector(p5.random(noise_upper_bound),
                                        p5.random(noise_upper_bound));
  } // end constructor

  /** getter for amount to add to the noise offset
   * @returns {number}: amount to add to the noise offset on walking
  */
  get noise_offset_change() {
    return this.slider.value();
  } // end get noise_offset_change
  
  /** update the position and noise offset */
  walk() {
    this.position.x = this.p5.noise(this.noise_offset.x) * this.p5.width;
    this.position.y = this.p5.noise(this.noise_offset.y) * this.p5.height;
    this.noise_offset.add(this.noise_offset_change,
                          this.noise_offset_change);
  } // end walk
  
  show_yourself() {
    this.p5.strokeWeight(this.stroke_weight);
    this.p5.fill(this.fill_color);
    this.p5.stroke(this.stroke_color);
    this.p5.circle(this.position.x, this.position.y, this.diameter);
  } // end show_yourself
} // end noise-walker
