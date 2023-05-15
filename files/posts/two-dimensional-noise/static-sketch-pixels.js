/** Draw static 2D noise using pixel array*/
function static_pixels(p5) {
  const OFFSET_INCREMENT = 0.01;
  const WIDTH = 1000;
  const HEIGHT = 400;

  /** creates the canvas */
  p5.setup = function() {
    p5.pixelDensity(1);
    p5.createCanvas(WIDTH, HEIGHT);

    // since we're not setting the alpha channel we need to set the background
    p5.background("white");
  } // end setup

  /** draw the noise */
  p5.draw = function() {
    const RED = 0;
    const GREEN = 1;
    const BLUE = 2;
    const CELLS_FOR_PIXEL = 4;
    const RGB_MAX = 255;

    let intensity;
    let pixel_index;
    let offset_x = 0;
    let offset_y;

    p5.loadPixels();

    for (let x=0; x < p5.width; x++) {
      offset_y = 0;

      for (let y=0; y < p5.height; y++) {
        pixel_index = (x + y * p5.width) * CELLS_FOR_PIXEL;
        intensity = p5.floor(p5.noise(offset_x, offset_y) * RGB_MAX);
        p5.pixels[pixel_index + RED] = intensity;
        p5.pixels[pixel_index + GREEN] = intensity;
        p5.pixels[pixel_index + BLUE] = intensity;

        offset_y += OFFSET_INCREMENT;
      } // end y for
      offset_x += OFFSET_INCREMENT;
    }// end x for
    p5.updatePixels();
    p5.noLoop();
  } // end draw

} // end static_pixels

new p5(static_pixels, "static-2d-noise-graph-pixels");
