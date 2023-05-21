class NoisePlotter {
  constructor(p5, slider) {
    this.slider = slider;
    this.p5 = p5
  } // end constructur

  draw() {
    let offset_y = 0;
    let offset_x;
    let pixel_index;
    let intensity;
    let offset_increment = this.slider.value()
    
    this.p5.loadPixels();
    
    for (let y=0; y < this.p5.height; y++) {
      offset_x = 0;
      for (let x=0; x < this.p5.width; x++) {
        pixel_index = (x + y * this.p5.width) * PIXEL_ARRAY.CELLS_PER_PIXEL;
        intensity = this.p5.noise(offset_x, offset_y) * PIXEL_ARRAY.RGB_MAX;
        this.p5.pixels[pixel_index +
                       PIXEL_ARRAY.RED] = intensity;
        this.p5.pixels[pixel_index +
                       PIXEL_ARRAY.GREEN] = intensity;
        this.p5.pixels[pixel_index +
                       PIXEL_ARRAY.BLUE] = intensity;
        this.p5.pixels[pixel_index +
                       PIXEL_ARRAY.ALPHA] = PIXEL_ARRAY.RGB_MAX;
        offset_x += offset_increment;        
      } // end x for
      offset_y += offset_increment;
    }// end x for
    this.p5.updatePixels();
  } // end draw

} // end NoisePlotter
