/**The Slidini builds and bundles a slider and its label (caption)

   Args:

   - (SliderSettings) settings: object with settings for the slider
   - (CaptionSettings): object with settings for the caption
   - (P5) p5: an instance of the p5 object
**/
class Slidini {
  _slider = null;
  _caption = null;

  constructor(slider_settings, caption_settings, p5) {
    this.slider_settings = slider_settings;
    this.caption_settings = caption_settings;
    this.p5 = p5;
  } // constructor

  get slider() {
    if (this._slider === null) {
      // create the slider
      this._slider = this.p5.createSlider(
        this.slider_settings.min,
        this.slider_settings.max,
        this.slider_settings.default_value,
        this.slider_settings.step_size,
      );
  
      // attach it to the div tag
      this._slider.parent(this.slider_settings.slider_div);
  
      // set the callback to change label on update
      this._slider.input(() => this.update_caption());
  
      // add the label to the slider
      this.update_caption();
    }
    return this._slider;
  }

  get caption() {
    if (this._caption === null) {
      this._caption = this.p5.select(
        this.caption_settings.div_selector);
    }
    return this._caption;
  }

  update_caption() {
    this.caption.html(
      `${this.caption_settings.label}: ` +
        `${this.slider.value().toFixed(this.caption_settings.precision)}`);
  } // update_caption

} // end Slidini

export { Slidini }
