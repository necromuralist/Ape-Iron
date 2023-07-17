class MovingNoise {
  constructor({p5=undefined,
               slider=undefined,
               red=PIXEL_ARRAY.RGB_MAX,
               green=PIXEL_ARRAY.RGB_MAX,
               blue= PIXEL_ARRAY.RGB_MAX,
               y_start_offset=1000} = {}) {
    this.p5 = p5
    this.slider = slider;
    this.red_fraction = red/PIXEL_ARRAY.RGB_MAX;
    this.green_fraction = green/PIXEL_ARRAY.RGB_MAX;
    this.blue_fraction = blue/PIXEL_ARRAY.RGB_MAX;
    this.y_start_offset = y_start_offset;
    this.noise_start = 0;
  } // end constructur

  draw() {
    let offset_y = this.noise_start + this.y_start_offset;
    let offset_x;
    let pixel_index;
    let intensity;
    let increment = this.slider.value();
    
    this.p5.loadPixels();    
    
    for (let y=0; y < this.p5.height; y++) {
      offset_x = this.noise_start;
      for (let x=0; x < this.p5.width; x++) {
        pixel_index = (x + y * this.p5.width) * PIXEL_ARRAY.CELLS_PER_PIXEL;
        intensity = this.p5.noise(offset_x, offset_y) * PIXEL_ARRAY.RGB_MAX;
        this.p5.pixels[pixel_index + PIXEL_ARRAY.RED] = (intensity *
                                                  this.red_fraction);
        this.p5.pixels[pixel_index + PIXEL_ARRAY.GREEN] = (intensity *
                                                    this.green_fraction);
        this.p5.pixels[pixel_index + PIXEL_ARRAY.BLUE] = (intensity *
                                                   this.blue_fraction);
        this.p5.pixels[pixel_index + PIXEL_ARRAY.ALPHA] = PIXEL_ARRAY.RGB_MAX;
        offset_x += increment;        
      } // end x for
      offset_y += increment;
    }// end x for
    this.p5.updatePixels();
    this.noise_start += increment;
  } // end draw
} // end NoisePlotter
