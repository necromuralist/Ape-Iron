/** Plot Two-Dimensional Noise */
class NoisePlotter {
  constructor(p5, slider) {
    this.slider = slider;
    this.p5 = p5
  } // end constructur

  /** Construct the Noise Plotter
   * Params:
   *  - p5: p5 instance object
   *  - slider: slider to grab the noise-offset increment value
  */
  

  draw() {
    let intensity;
    let column_offset;
    let offset_increment = this.slider.value()
    let row_offset = 0;
    let pixel_index;

      this.p5.loadPixels();
      
      for (let y=0; y < this.p5.height; y++) {
        column_offset = 0;
        for (let x=0; x < this.p5.width; x++) {
          pixel_index = (x + y * this.p5.width) * PIXEL_ARRAY.CELLS_PER_PIXEL;
          intensity = this.p5.noise(column_offset, row_offset) * PIXEL_ARRAY.RGB_MAX;
          this.p5.pixels[pixel_index +
                         PIXEL_ARRAY.RED] = intensity;
          this.p5.pixels[pixel_index +
                         PIXEL_ARRAY.GREEN] = intensity;
          this.p5.pixels[pixel_index +
                         PIXEL_ARRAY.BLUE] = intensity;
          this.p5.pixels[pixel_index +
                         PIXEL_ARRAY.ALPHA] = PIXEL_ARRAY.RGB_MAX;
          column_offset += offset_increment;        
        } // end x for
        row_offset += offset_increment;
      }// end x for
      this.p5.updatePixels();
    } // end draw
} // end NoisePlotter
