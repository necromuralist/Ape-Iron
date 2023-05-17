class NoisePlotter {
  constructor(p5, offset_increment=0.01) {
    this.p5 = p5
    this.offset_increment = offset_increment;
  } // end constructur

  draw() {
    let offset_y = 0;
    let offset_x;
    let pixel_index;
    let intensity;
    
    this.p5.loadPixels();

    for (let y=0; y < this.p5.height; y++) {
      offset_x = 0;
      for (let x=0; x < this.p5.width; x++) {
        pixel_index = (x + y * this.p5.width) * this.CELLS_PER_PIXEL;
        intensity = this.p5.noise(offset_x, offset_y) * this.RGB_MAX;
        this.p5.pixels[pixel_index + this.RED] = intensity;
        this.p5.pixels[pixel_index + this.GREEN] = intensity;
        this.p5.pixels[pixel_index + this.BLUE] = intensity;
        this.p5.pixels[pixel_index + this.ALPHA] = this.RGB_MAX;
        offset_x += this.offset_increment;        
      } // end x for
      offset_y += this.offset_increment;
    }// end x for
    this.p5.updatePixels();
  } // end draw
} // end NoisePlotter

NoisePlotter.prototype.RED = 0;
NoisePlotter.prototype.GREEN = 1;
NoisePlotter.prototype.BLUE = 2;
NoisePlotter.prototype.ALPHA = 3;
NoisePlotter.prototype.CELLS_PER_PIXEL = 4;
NoisePlotter.prototype.RGB_MAX = 255;
